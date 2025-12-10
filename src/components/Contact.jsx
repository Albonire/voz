import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const whatsappNumber = "573125250624";
  const whatsappMessage = encodeURIComponent("Hola, me gustaria obtener mas informacion sobre el cuidado de la voz.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefono',
      value: '+57 312 525 0624',
      href: 'tel:+573125250624',
    },
    {
      icon: MapPin,
      label: 'Ubicacion',
      value: 'Pamplona, Colombia',
      href: '#',
    },
  ];

  return (
    <section id="contacto" className="contact section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Contactanos</h2>
          <p>
            Estamos aqui para ayudarte. Comunicate con nosotros para
            resolver tus dudas.
          </p>
        </motion.div>

        <div className="contact__wrapper">
          {/* Contact Info Cards */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-grid">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="contact__info-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="contact__info-icon">
                      <Icon size={22} />
                    </div>
                    <div className="contact__info-text">
                      <span className="contact__info-label">{item.label}</span>
                      <span className="contact__info-value">{item.value}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            className="contact__whatsapp"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="whatsapp-card">
              <div className="whatsapp-card__icon">
                <MessageCircle size={48} />
              </div>
              <h3 className="whatsapp-card__title">Escribenos por WhatsApp</h3>
              <p className="whatsapp-card__text">
                Respuesta rapida y personalizada. Estamos disponibles para
                atenderte y resolver todas tus dudas sobre el cuidado vocal.
              </p>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-card__btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
                Iniciar Conversacion
                <Send size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
