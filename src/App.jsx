import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🚀 My Apps</h1>
        <p className="tagline">Portfolio of Projects</p>
      </header>

      <main className="main-content">
        <div className="apps-grid">
          <a href="https://disciplined-flow-production-608a.up.railway.app" className="app-card" target="_blank" rel="noopener noreferrer">
            <div className="card-icon">🍽️</div>
            <h2>Calorie Count</h2>
            <p>Track daily calories and monitor weight goals</p>
            <span className="arrow">→</span>
          </a>

          <div className="app-card coming-soon">
            <div className="card-icon">🔜</div>
            <h2>Coming Soon</h2>
            <p>More projects on the way!</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Built by Shiv</p>
        <a href="https://github.com/shiv0903" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
}
