export function AboutSection() {
  return (
    <section className="sobre-mim" id="sobre-mim">
      <h2 className="section__tittle">Sobre Mim</h2>
      <div className="description">
        <h3 className="description__tittle">Quem sou?</h3>
        <p className="description__text">
          De Rio de Janeiro - RJ e tenho 24 anos, sou tecnólogo em Análise e
          Desenvolvimento de Sistemas pela UNIFACIG. Atualmente Desenvolvedor
          Front-End, também aprendendo sobre tecnologias Back-End para
          aperfeiçoar metodologias de integração.
        </p>
      </div>

      <div className="skills">
        <h3 className="skills__tittle">Skills:</h3>
        <ul className="skills__container">
          <li className="skills__icon">
            <i className="fab fa-html5"></i>
            <span>HTML</span>
          </li>

          <li className="skills__icon">
            <i className="fab fa-css3-alt"></i>
            <span>CSS</span>
          </li>

          <li className="skills__icon">
            <i className="fab fa-js"></i>
            <span>JAVASCRIPT</span>
          </li>

          <li className="skills__icon">
            <i className="fab fa-github"></i>
            <span>GITHUB</span>
          </li>

          <li className="skills__icon">
            <i className="fab fa-react"></i>
            <span>REACT.JS</span>
          </li>

          <li className="skills__icon">
            <i className="fab fa-node-js"></i>
            <span>NODE.JS</span>
          </li>

          <li className="skills__icon">
            <i className="fa-brands fa-envira"></i>
            <span>MONGODB</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
