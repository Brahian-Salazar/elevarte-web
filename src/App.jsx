
import { siteConfig } from './data/site.js'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Disciplines from './sections/Disciplines.jsx'
import './App.css'

export default function App() {
  const whatsappUrl = `${
    siteConfig.contact.whatsappUrl
  }?text=${encodeURIComponent(
    'Hola, quiero recibir información sobre las clases y experiencias de ElevArte.'
  )}`

  return (
    <div className="site-shell">
      <Navbar />

      <main>
        {/* Presentación principal */}
        <Hero />

        {/* Sobre ElevArte */}
        <section
          className="section"
          id="nosotros"
          aria-labelledby="about-title"
        >
          <div className="container">
            <p className="section__eyebrow">
              Nuestra esencia
            </p>

            <h2
              className="section__title"
              id="about-title"
            >
              Un espacio para crecer y expresarte
            </h2>

            <p className="section__description">
              En ElevArte, el movimiento se convierte
              en una oportunidad para descubrir tus
              capacidades, fortalecer tu confianza y
              conectar con tu creatividad.
            </p>
          </div>
        </section>

        {/* Disciplinas con sus imágenes */}
        <Disciplines />

        {/* Servicios y experiencias */}
        <section
          className="section"
          id="servicios"
          aria-labelledby="services-title"
        >
          <div className="container">
            <p className="section__eyebrow">
              Más posibilidades
            </p>

            <h2
              className="section__title"
              id="services-title"
            >
              Arte y bienestar para diferentes espacios
            </h2>

            <p className="section__description">
              En ElevArte, el movimiento y la expresión
              artística también pueden formar parte de
              experiencias personalizadas, actividades
              de bienestar corporativo y presentaciones
              para eventos especiales.
            </p>

            <div className="services-grid">
              <article className="service-card">
                <h3>Clases personalizadas</h3>
                <p>
                  Experiencias adaptadas a tus objetivos,
                  capacidades e intereses.
                </p>
              </article>

              <article className="service-card">
                <h3>Bienestar corporativo</h3>
                <p>
                  Actividades de movimiento y expresión
                  para compartir y fortalecer el bienestar
                  en diferentes espacios de trabajo.
                </p>
              </article>

              <article className="service-card">
                <h3>Shows y eventos</h3>
                <p>
                  Presentaciones artísticas para
                  celebraciones y eventos especiales.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section
          className="section contact"
          id="contacto"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <p className="section__eyebrow">
              Da el primer paso
            </p>

            <h2
              className="section__title"
              id="contact-title"
            >
              Tu próxima experiencia comienza aquí
            </h2>

            <p className="contact__description">
              Escríbenos para consultar información
              sobre las clases y experiencias de
              ElevArte.
            </p>

            <a
              className="button button--outline"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>

            <div className="contact__details">
              <span>
                {siteConfig.location.cities.join(' · ')}
                {', '}
                {siteConfig.location.department}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {new Date().getFullYear()} ElevArte.
            {' '}Vuela sin límites.
          </p>

          <p>Arte · Movimiento · Bienestar</p>
        </div>
      </footer>
    </div>
  )
}
