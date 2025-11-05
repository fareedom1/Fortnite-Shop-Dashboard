import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout-container">
      <nav>
        <h2>🎮 Fortnite Shop</h2>
        <ul>
          <li><Link to="/">🏠 Dashboard</Link></li>
          <li><Link to="/about">ℹ️ About</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
