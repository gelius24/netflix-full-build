import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import logo from "./netflix-logo.png"
import avatar from "./netflix-avatar.png"

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory()

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src={logo}
          alt="netflix logo"
        />
        <img
        onClick={() => history.push('profile')}
          className="nav__avatar"
          src={avatar}
          alt="user's avatar"
        />
      </div>

      
    </div>
  );
}

export default Nav;
