import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from"../images/logo.webp";

function Header () {

  return (
    <div className="header">
      <Link to="/">
        <img 
          className="header-logo"
          src={ logo }
          alt="ChinaCamp Logo"
        />
      </Link>
      <div className="sites">
        <Link id="button" to="/cardapio">Cardápio</Link>
        <Link id="button" to="/sobre">Sobre</Link>
        <Link id="button" to="/contato">Contato</Link>

      </div>
    </div>
  );
}

export default Header;
