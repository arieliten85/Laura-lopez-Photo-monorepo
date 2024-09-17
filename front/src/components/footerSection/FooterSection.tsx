import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./footerSection.css";

export const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column" data-test="footer-column-social">
          <h3 className="footer__heading">Redes</h3>
          <div className="footer__social" data-test="footer-social">
            <a
              href="https://www.instagram.com/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              data-test="footer-link-instagram"
            >
              <FaInstagram className="footer__social-icon" />
            </a>
            <a
              href="https://www.facebook.com/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              data-test="footer-link-facebook"
            >
              <FaFacebookF className="footer__social-icon" />
            </a>
            <a
              href="https://wa.me/54988888888"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              data-test="footer-link-whatsapp"
            >
              <FaWhatsapp className="footer__social-icon" />
            </a>
          </div>
        </div>
        <div className="footer__column" data-test="footer-column-accessibility">
          <h3 className="footer__heading">Accesibilidad</h3>
          <ul className="footer__list" data-test="footer-list-accessibility">
            <li className="footer__item">
              <a
                href="https://www.google.com/maps/@-32.8832975,-68.8791187,14z?hl=es&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                data-test="footer-link-map"
              >
                Mapa del sitio <FaMapMarkerAlt className="footer__icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column" data-test="footer-column-contact">
          <h3 className="footer__heading">Contacto</h3>
          <ul className="footer__list" data-test="footer-list-contact">
            <li className="footer__item">Tel: +54-15-888-888</li>
            <li className="footer__item">Lun - Vie: 09:00 AM - 19:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom" data-test="footer-bottom">
        <p className="footer__copy-text">
          Copyright © 2024. Todos los derechos reservados. Creado por AriDev
        </p>
      </div>
    </footer>
  );
};
