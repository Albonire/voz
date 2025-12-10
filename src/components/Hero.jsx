import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToIntro = () => {
    const element = document.querySelector('#introduccion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__background">
        <img
          src="/ciberacustica-2-1200x630.jpg"
          alt="Recurso de cuidado vocal en docentes"
          className="hero__image"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Recurso de cuidado vocal en docentes
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Voz Viva: <span className="hero__accent">Fortalece</span> tu herramienta diaria
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Ejercicios y consejos para mantener tu voz en su mejor forma
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <button className="btn btn-primary" onClick={scrollToIntro}>
              Comenzar
            </button>
            <a href="#videos" className="btn btn-secondary">
              Ver Ejercicios
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          className="hero__scroll-indicator"
          onClick={scrollToIntro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll to content"
        >
          <ChevronDown size={28} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
