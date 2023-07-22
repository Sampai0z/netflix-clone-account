import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul className="navbar-links">
        <li className="navbar-link active">Home</li>
        <li className="navbar-link">TV Shows</li>
        <li className="navbar-link">Movies</li>
        <li className="navbar-link">New & Popular</li>
        <li className="navbar-link">My List</li>
      </ul> 
      <div className="navbar-icons">
        <i className="fas fa-user-circle">a</i>
        <i className="fas fa-bell">2</i>
        <i className="fas fa-cog">a</i>
      </div>
    </nav>
  );
}

export default Navbar;
