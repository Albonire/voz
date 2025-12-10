import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Maximize, Pause } from 'lucide-react';
import './VideoGallery.css';

const VideoGallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const problems = [
    {
      id: 1,
      title: 'Disfonia (ronquera o alteracion de la voz)',
      description: 'La voz se vuelve ronca, cansada o poco clara debido al uso excesivo de la voz, mala tecnica o deshidratacion.',
      exercise: 'Calentamiento Vocal Basico',
      steps: [
        'Vibracion de labios: realizar "brrrr" durante 10-15 segundos para relajar las cuerdas.',
        'Sirenas vocales: deslizar la voz de grave a agudo con un "uuu" suave, sin forzar.',
        'Respiracion con apoyo: inhalar inflando el abdomen y hablar sin apretar la garganta.'
      ],
      videoSrc: '/Calentamiento vocal.mp4',
      thumbnail: '/thumbnail-calentamiento.jpg',
    },
    {
      id: 2,
      title: 'Fatiga Vocal',
      description: 'La voz se agota, pierde potencia y aparece tension despues de hablar por mucho tiempo sin pausas.',
      exercise: 'Micropausas y Estiramientos',
      steps: [
        'Micropausas vocales: cada 10-15 minutos, detener el habla por 5-10 segundos y realizar una respiracion profunda.',
        'Estiramiento de cuello: mover la cabeza suavemente hacia los lados y hacia abajo para relajar los musculos.',
        'Relajacion mandibular: abrir y cerrar la boca lentamente para eliminar la tension.'
      ],
      videoSrc: null, // Placeholder - video pendiente
      thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
    },
    {
      id: 3,
      title: 'Nodulos Vocales',
      description: 'Son protuberancias en las cuerdas vocales por uso forzado de la voz; causan ronquera persistente y dificultad para proyectar la voz.',
      exercise: 'Ejercicio con Pajilla (Tracto Vocal Semiocluido)',
      steps: [
        'Fonacion en pajilla: colocar una pajilla entre los labios y emitir un sonido suave de "uuu" durante 1-2 minutos.',
        'Burbujas en agua: soplar la pajilla dentro de un vaso con agua mientras se mantiene un sonido estable.',
        'Estos ejercicios disminuyen la presion en las cuerdas vocales y ayudan a mejorar la calidad vocal.'
      ],
      videoSrc: null, // Placeholder - video pendiente
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    },
  ];

  const openVideo = (problem) => {
    setActiveVideo(problem);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = '';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="videos" className="video-gallery section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Problemas vocales frecuentes en docentes de primaria</h2>
          <p>
            Conoce los problemas mas comunes y los ejercicios recomendados para prevenirlos y tratarlos.
          </p>
        </motion.div>

        <motion.div
          className="problems-list"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.id}
              className={`problem-card ${index % 2 === 1 ? 'problem-card--reverse' : ''}`}
              variants={itemVariants}
            >
              {/* Problem Info */}
              <div className="problem-card__info">
                <span className="problem-card__number">0{problem.id}</span>
                <h3 className="problem-card__title">{problem.title}</h3>
                <p className="problem-card__description">{problem.description}</p>
                
                <div className="problem-card__exercise">
                  <h4 className="problem-card__exercise-title">{problem.exercise}</h4>
                  <ul className="problem-card__steps">
                    {problem.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Video Preview */}
              <motion.div
                className="problem-card__video"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                onClick={() => openVideo(problem)}
              >
                <div className="problem-card__thumbnail">
                  <img src={problem.thumbnail} alt={problem.exercise} />
                  <div className="problem-card__overlay">
                    <div className="problem-card__play-btn">
                      <Play size={32} />
                    </div>
                  </div>
                  <span className="problem-card__video-label">Ver ejercicio</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="video-modal__content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="video-modal__close" onClick={closeVideo}>
                <X size={24} />
              </button>

              <div className="video-modal__player">
                {activeVideo.videoSrc ? (
                  <video
                    ref={videoRef}
                    src={activeVideo.videoSrc}
                    controls
                    autoPlay
                    className="video-modal__video"
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : (
                  <div className="video-modal__placeholder">
                    <img src={activeVideo.thumbnail} alt={activeVideo.exercise} />
                    <div className="video-modal__placeholder-overlay">
                      <Play size={64} />
                      <p>Video disponible proximamente</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="video-modal__info">
                <h3>{activeVideo.exercise}</h3>
                <p>{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;
