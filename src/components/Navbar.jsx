import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
       <a href="#home" className="logo-text">
  Krithan <span>A N</span>
</a>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a
        href="/Resume/My_Resume.pdf"
        className="resume-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </header>
  );
}

export default Navbar;