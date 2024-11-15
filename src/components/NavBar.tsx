import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo"> Portfolio</a>
        <ul className="navbar-menu">
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
