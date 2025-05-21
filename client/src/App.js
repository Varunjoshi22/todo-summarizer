import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './components/TodoList';
import SummarySection from './components/SummarySection';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Summary Assistant</h1>
        <p>Manage your tasks and get AI-powered summaries</p>
      </header>
      
      <main className="App-main">
        <div className="container">
          <div className="row">
            <div className="col">
              <TodoList />
            </div>
            <div className="col">
              <SummarySection />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Todo Summary Assistant</p>
      </footer>
      
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
