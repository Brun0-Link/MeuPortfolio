export function Header() {
  const body = document.querySelector("body");
  const toggle = document.getElementById("toggle");
  function toggleDarkLightMode() {
    toggle.classList.toggle("active");
    body.classList.toggle("dark_mode");
  }

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

      <div id="toggle" onClick={toggleDarkLightMode}>
        <i className="indicator"></i>
      </div>
    </header>
  );
}
