import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div exact to="/" className="nav-logo">
            ALI HUZAIFA
            <i className="fas fa-code"></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SKILLS
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                WORK EXPERIENCE
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                PROJECTS
              </div>
            </li>
            <li className="nav-item">
              <div
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                CONTACT US
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <CloseIcon fontSize="20px" /> : <MenuIcon fontSize="20px" />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;