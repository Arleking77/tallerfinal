import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <p>saber mas:</p>
      </div>
      <div>
        <p>Encuéntranos en redes sociales:</p>
        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          
        </ul>
      </div>
      <div>
        <p>Contáctanos:</p>
        <ul className="contact-links">
          <li>
            <a href="mailto:correo@ejemplo.com">
              Correo Electrónico
            </a>
          </li>
          <li>
            <a href="tel:+123456789">
              Teléfono
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Footer;
