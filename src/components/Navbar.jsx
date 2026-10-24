
import { siteConfig } from '../data/site.js'

export default function Navbar() {
  return (
    <header className="nav">
      <nav
        className="container nav__inner"
        aria-label="Navegación principal"
      >
        <a
          className="nav__brand"
          href="#inicio"
          aria-label="ElevArte, ir al inicio"
        >
          <img
            className="nav__logo-image"
            src="/images/logo-elevarte.png"
            alt="ElevArte, vuela sin límites"
          />
        </a>

        <ul className="nav__links">
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <a
                className="nav__link"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
