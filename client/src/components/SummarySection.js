import React, { useState } from 'react';
import { generateAndSendSummary, generateSummary } from '../services/api';
import { toast } from 'react-toastify';

const SummarySection = () => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateSummary = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await generateSummary();
      
      if (response.success) {
        setSummary(response.summary);
        toast.success('Summary generated successfully!');
      } else {
        setError(response.message || 'Failed to generate summary');
        toast.error('Failed to generate summary');
      }
    } catch (err) {
      setError('Error generating summary. Please try again.');
      toast.error('Error generating summary');
      console.error('Error generating summary:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendToSlack = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await generateAndSendSummary();
      
      if (response.success) {
        setSummary(response.summary);
        toast.success('Summary sent to Slack successfully!');
      } else {
        setError(response.message || 'Failed to send summary to Slack');
        toast.error('Failed to send summary to Slack');
      }
    } catch (err) {
      setError('Error sending summary to Slack. Please try again.');
      toast.error('Error sending summary to Slack');
      console.error('Error sending summary to Slack:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summary-section">
      <h2>Todo Summary</h2>
      <div className="summary-actions">
        <button 
          onClick={handleGenerateSummary} 
          disabled={loading}
          className="btn-generate"
        >
          {loading ? 'Processing...' : 'Generate Summary'}
        </button>
        <button 
          onClick={handleSendToSlack} 
          disabled={loading}
          className="btn-send"
        >
          {loading ? 'Processing...' : 'Generate & Send to Slack'}
        </button>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      {summary && (
        <div className="summary-result">
          <h3>Generated Summary</h3>
          <div className="summary-content">
            {summary.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SummarySection;