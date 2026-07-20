import './App.css';

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🚀 My Apps</h1>
        <p>Explore all my projects</p>
      </header>

      <div className="apps-grid">
        {/* Health App Card */}
        <a href="https://health-app-production-xxxx.up.railway.app" className="app-card">
          <div className="app-icon">🏥</div>
          <h2>Health App</h2>
          <p>Track your daily calories and weight goals with an AI-powered food recognizer.</p>
          <span className="badge">Live</span>
        </a>

        {/* Placeholder for Future Apps */}
        <div className="app-card placeholder">
          <div className="app-icon">📱</div>
          <h2>Coming Soon</h2>
          <p>More apps coming soon...</p>
          <span className="badge">WIP</span>
        </div>
      </div>

      <footer className="footer">
        <p>Made with ❤️ by shiv0903</p>
        <p>
          <a href="https://github.com/shiv0903">GitHub</a> | 
          <a href="https://twitter.com">Twitter</a>
        </p>
      </footer>
    </div>
  );
}