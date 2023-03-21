import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header>
      <div className="logo">BrunoTrajano</div>
      <a href="#">
        <i className="fas fa-bars navigation-icon"></i>
      </a>
      <nav>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#sobre-mim">Sobre mim</a>
          </li>

          <li>
            <a href="#projetos">Projetos</a>
          </li>

          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>

      <div id="toggle" onClick={toggleTheme}>
        <i className="indicator"></i>
      </div>
    </header>
  )
}
