import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, Clock, Mic2, Wind, Stethoscope, Smartphone, Heart } from 'lucide-react';
import './Tips.css';

const Tips = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const tips = [
    {
      icon: Droplets,
      title: 'Hidratate constantemente',
      description: 'Bebe agua durante todo el dia para mantener las cuerdas vocales lubricadas.',
    },
    {
      icon: Clock,
      title: 'Realiza pausas vocales',
      description: 'Descansa la voz cada cierto tiempo durante la jornada escolar para prevenir fatiga.',
    },
    {
      icon: Mic2,
      title: 'Calienta y relaja la voz',
      description: 'Antes y despues de las clases, realiza ejercicios de calentamiento y enfriamiento vocal.',
    },
    {
      icon: Wind,
      title: 'Cuida tu postura y respiracion',
      description: 'Manten la espalda recta y respira adecuadamente; la respiracion diafragmatica protege la voz.',
    },
    {
      icon: Stethoscope,
      title: 'Consulta a un profesional',
      description: 'Acude a un fonoaudiologo ante ronquera persistente, perdida de voz o molestias vocales frecuentes.',
    },
    {
      icon: Smartphone,
      title: 'Utiliza recursos digitales',
      description: 'Apoyate en paginas web y aplicaciones educativas que ofrezcan ejercicios y estrategias para el cuidado vocal.',
    },
    {
      icon: Heart,
      title: 'Mantén hábitos saludables',
      description: 'Dormir bien, reducir el estres y cuidar la salud general tambien protege la voz.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="tips" className="tips section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Tips para el cuidado de la voz</h2>
          <p>
            Consejos practicos para mantener tu voz saludable y prevenir problemas vocales.
          </p>
        </motion.div>

        <motion.div
          className="tips__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={index}
                className="tip-card"
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="tip-card__header">
                  <div className="tip-card__number">{index + 1}</div>
                  <div className="tip-card__icon">
                    <Icon size={24} />
                  </div>
                </div>
                <h4 className="tip-card__title">{tip.title}</h4>
                <p className="tip-card__description">{tip.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Tips;
