import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AnchorLink from "react-anchor-link-smooth-scroll";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
          <AnchorLink href="#top" style={{textDecorationColor:"white",color:'white'}}>
            ALI HUZAIFA
          </AnchorLink>
            <i className="fas fa-code"></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">

              <AnchorLink href="#skills">
                <div
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  SKILLS
                </div>
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#services">
                <div
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  SERVICES
                </div>
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#experience">
                <div
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  EXPERIENCE
                </div>
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink href="#projects">
                <div
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  PROJECTS
                </div>
              </AnchorLink>
            </li>
           
            <li className="nav-item">
              <AnchorLink href="#contact">
                <div
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  CONTACT US
                </div>
              </AnchorLink>
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