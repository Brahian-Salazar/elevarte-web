
import { useEffect, useState } from 'react'
import { siteConfig } from '../data/site.js'

const slides = [
  {
    id: 'telas-aereas',
    title: 'Telas aéreas',
    image: '/images/telas-aereas.jpg',
    alt: 'Práctica de danza aérea en telas',
  },
  {
    id: 'lira-aerea',
    title: 'Lira aérea',
    image: '/images/lira-aerea.jpeg',
    alt: 'Práctica de acrobacia en lira aérea',
  },
  {
    id: 'pole-sport',
    title: 'Pole Sport',
    image: '/images/pole-sport.jpg',
    alt: 'Práctica de Pole Sport en barra vertical',
  },
  {
    id: 'flexibilidad',
    title: 'Flexibilidad y acondicionamiento',
    image: '/images/flexibilidad.jpeg',
    alt: 'Entrenamiento de flexibilidad y movilidad corporal',
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    function updateMotionPreference() {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    return () => {
      mediaQuery.removeEventListener(
        'change',
        updateMotionPreference
      )
    }
  }, [])

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        (currentIndex + 1) % slides.length
      )
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [isPaused, prefersReducedMotion])

  function showPreviousSlide() {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + slides.length) % slides.length
    )
  }

  function showNextSlide() {
    setActiveIndex((currentIndex) =>
      (currentIndex + 1) % slides.length
    )
  }

  const activeSlide = slides[activeIndex]

  const whatsappUrl = `${
    siteConfig.contact.whatsappUrl
  }?text=${encodeURIComponent(
    'Hola, quiero conocer las clases de ElevArte.'
  )}`

  const instagramUrl =
    siteConfig.contact.instagramUrl

  return (
    <section
      className="hero"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Arte · Movimiento · Bienestar
          </p>

          <h1 className="hero__title" id="hero-title">
            Descubre tu fuerza.
            <br />
            <span>Vuela sin límites.</span>
          </h1>

          <p className="hero__description">
            {siteConfig.brand.description}
            {' '}
            Explora el movimiento, desarrolla tu
            confianza y expresa tu esencia.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conoce nuestras clases
            </a>

            <a
              className="button button--outline"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
            >
              Instagram
            </a>

            <a
              className="button button--outline"
              href="#clases"
            >
              Explora las disciplinas
            </a>
          </div>

          <p className="hero__location">
            Manizales · Villamaría, Caldas
          </p>
        </div>

        <div className="hero__visual">
          <figure
            className="hero__image-frame"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget)
              ) {
                setIsPaused(false)
              }
            }}
          >
            <img
              key={activeSlide.id}
              className="hero__image"
              src={activeSlide.image}
              alt={activeSlide.alt}
              fetchPriority="high"
            />

            <figcaption
              className="hero__image-caption"
              aria-live="off"
            >
              <span className="hero__caption-label">
                Encuentra tu movimiento
              </span>

              <span className="hero__caption-title">
                {activeSlide.title}
              </span>
            </figcaption>

            <div
              className="hero__carousel-controls"
              aria-label="Controles de fotografías"
            >
              <button
                className="hero__carousel-arrow"
                type="button"
                onClick={showPreviousSlide}
                aria-label="Ver fotografía anterior"
              >
                <span aria-hidden="true">‹</span>
              </button>

              <div
                className="hero__carousel-dots"
                role="group"
                aria-label="Seleccionar fotografía"
              >
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    className={`hero__carousel-dot ${
                      index === activeIndex
                        ? 'hero__carousel-dot--active'
                        : ''
                    }`}
                    type="button"
                    aria-label={`Ver fotografía: ${slide.title}`}
                    aria-current={
                      index === activeIndex ? 'true' : undefined
                    }
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <button
                className="hero__carousel-arrow"
                type="button"
                onClick={showNextSlide}
                aria-label="Ver fotografía siguiente"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </figure>

          <span
            className="hero__decoration"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
