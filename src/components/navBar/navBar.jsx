import React from 'react'
import "./navBar.css"
import logoNav from "../../public/Logos/2.png"

const NavBar = ({isScrolling}) => {

  const returnToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={(returnToTop)}>
          
          <a className="navbar-logo" href="/"  onClick={(returnToTop)}>
            <img id="logoNav" src={logoNav} alt="logoPh"></img>
            </a>
            
            <ul>
              <li>
                <a href="https://wa.me/541162767256" target='_blank'>Contacto</a>
              </li>
            </ul>

        </div>
        
    </nav>
  );
}

export default NavBar