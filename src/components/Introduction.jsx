import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Introduction.css';

const Introduction = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="introduccion" className="introduction section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Bienvenidos a Voz Viva</h2>
        </motion.div>

        <div className="introduction__content">
          <motion.div
            className="introduction__text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="introduction__paragraph">
              En esta pagina, ofrecemos una amplia variedad de ejercicios y consejos 
              disenados especificamente para los docentes de primaria. Nuestro objetivo 
              es prevenir el dano vocal y promover una voz saludable y resistente.
            </p>
            <p className="introduction__paragraph">
              A traves de videos tutoriales, tecnicas de respiracion, ejercicios de 
              calentamiento y estrategias para el cuidado diario, te ayudamos a mantener 
              tu voz en optimas condiciones.
            </p>
            <p className="introduction__highlight">
              Descubre como cuidar tu herramienta principal y mejorar tu bienestar vocal.
            </p>
          </motion.div>

          <motion.div
            className="introduction__image-container"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img 
              src="/docentevoz.jpeg" 
              alt="Docente cuidando su voz" 
              className="introduction__image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
