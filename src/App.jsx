import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🚀 My Apps</h1>
          <p className="tagline">Portfolio of Projects</p>
        </div>
      </header>

      <main className="main-content">
        <div className="apps-grid">
          {/* Calorie Count App Card */}
          <a 
            href="https://calorie-count-production-dc17.up.railway.app" 
            className="app-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-icon">🍽️</div>
            <h2>Calorie Count</h2>
            <p>Track your daily calories, log meals, and monitor your weight goals with precision.</p>
            <div className="card-footer">
              <span className="tech-stack">FastAPI • React • SQLite</span>
              <span className="arrow">→</span>
            </div>
          </a>

          {/* Coming Soon Card */}
          <div className="app-card coming-soon">
            <div className="card-icon">🔜</div
