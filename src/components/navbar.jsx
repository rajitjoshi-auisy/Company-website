function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/auisy_logo1.png" alt="Auisy Logo" />
      </div>

      <ul className="nav-links">
        <li>Who We Are <span className="arrow">▾</span></li>
        <li>What We Do <span className="arrow">▾</span></li>
        <li>We Work With <span className="arrow">▾</span></li>
        <li>Careers</li>
      </ul>

      <div className="navbar-right">
        <span className="search-icon">&#128269;</span>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
}

export default Navbar;