
import { siteConfig } from '../data/site.js'
import { disciplines } from '../data/disciplines.js'

export default function Disciplines() {
  return (
    <section
      className="section section--soft"
      id="clases"
      aria-labelledby="disciplines-title"
    >
      <div className="container">
        <p className="section__eyebrow">
          Explora el movimiento
        </p>

        <h2
          className="section__title"
          id="disciplines-title"
        >
          Encuentra tu manera de volar
        </h2>

        <p className="section__description">
          Cada disciplina es una oportunidad para
          descubrir tus capacidades y expresarte
          a través del movimiento.
        </p>

        <div className="card-grid">
          {disciplines.map((discipline) => {
            const message =
              `Hola, quiero recibir información sobre las clases de ${discipline.title} en ElevArte. ¿Me pueden contar los horarios y precios?`

            const whatsappUrl =
              `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`

            return (
              <article
                className="card"
                key={discipline.id}
              >
                <img
                  className="card__image"
                  src={discipline.image}
                  alt={discipline.imageAlt}
                  loading="lazy"
                />

                <div className="card__body">
                  <h3 className="card__title">
                    {discipline.title}
                  </h3>

                  <p className="card__description">
                    {discipline.description}
                  </p>

                  <a
                    className="button button--primary card__action"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar por WhatsApp sobre las clases de ${discipline.title}`}
                  >
                    Consultar por esta clase
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
