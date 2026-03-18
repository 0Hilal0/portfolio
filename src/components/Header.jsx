import "../styles/header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#top" className="logo">
          Hilal Özkan
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#timeline">Journey</a>
            </li>
            <li>
              <a href="#contact" className="nav-cta">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;