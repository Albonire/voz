import { motion } from 'framer-motion';
import { Mic, Heart, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Introduccion', href: '#introduccion' },
    { label: 'Videos', href: '#videos' },
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
              <span>VozCare</span>
            </a>
            <p className="footer__tagline">
              Cuidando tu voz, potenciando tu carrera.
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

          {/* Social */}
          <div className="footer__social">
            <h4 className="footer__nav-title">Siguenos</h4>
            <div className="footer__social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="footer__social-link"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            {currentYear} VozCare. Todos los derechos reservados.
          </p>
          <p className="footer__made-with">
            Hecho con <Heart size={14} className="footer__heart" /> para profesionales de la voz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
