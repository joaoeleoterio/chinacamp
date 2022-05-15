import React from "react";
import "../styles/Footer.css";

function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Chinacamp</strong> by 
            <a
              href="https://www.jhinfo.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              JHINFO
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;