import { motion } from 'framer-motion';
import { Mic, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Bienvenidos', href: '#introduccion' },
    { label: 'Ejercicios', href: '#videos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo" onClick={(e) => scrollToSection(e, '#inicio')}>
              <div className="footer__logo-icon">
                <Mic size={20} />
              </div>
              <span>Voz Viva</span>
            </a>
            <p className="footer__tagline">
              Fortalece tu herramienta diaria. Recurso de cuidado vocal para docentes.
            </p>
          </div>

          {/* Links */}
          <nav className="footer__nav">
            <h4 className="footer__nav-title">Enlaces</h4>
            <ul className="footer__nav-links">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            {currentYear} Voz Viva. Todos los derechos reservados.
          </p>
          <p className="footer__made-with">
            Hecho con <Heart size={14} className="footer__heart" /> para docentes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
