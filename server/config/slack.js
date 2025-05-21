const axios = require('axios');

// Send message to Slack channel using webhook
const sendToSlack = async (message) => {
  try {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (!webhookUrl) {
      throw new Error('SLACK_WEBHOOK_URL is not defined in environment variables');
    }
    
    // Format the message for Slack
    const payload = {
      text: '*Todo Summary*',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📋 Todo Summary',
            emoji: true
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: message
          }
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `*Generated on:* ${new Date().toLocaleString()}`
            }
          ]
        }
      ]
    };
    
    // Send the message to Slack
    const response = await axios.post(webhookUrl, payload);
    
    if (response.status !== 200) {
      throw new Error(`Failed to send message to Slack: ${response.statusText}`);
    }
    
    return { success: true, message: 'Summary sent to Slack successfully' };
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    throw new Error('Failed to send message to Slack');
  }
};

module.exports = { sendToSlack };