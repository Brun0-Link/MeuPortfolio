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

          <li className="skills__card">
            <div className="tec_name">
              <i className="fab fa-html5"></i>
            </div>
            <div className="tec_picture"></div>
            <div className="tec_description">HTML</div>
          </li>

          <li className="skills__card">
            <div className="tec_name">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="tec_picture"></div>
            <div className="tec_description">CSS</div>
          </li>

          <li className="skills__card">
            <div className="tec_name">
              <i className="fab fa-js"></i>
            </div>
            <div className="tec_picture"></div>
            <div className="tec_description">JAVASCRIPT</div>
          </li>

          <li className="skills__card">
            <div className="tec_name">
              <i className="fab fa-github"></i>
            </div>
            <div className="tec_picture"></div>
            <div className="tec_description">GITHUB</div>
          </li>

          <li className="skills__card">
            <div className="tec_name">
              <i className="fab fa-react"></i>
            </div>
            <div className="tec_picture"></div>
            <div className="tec_description">REACT.JS</div>
          </li>

          <li className="skills__card">
            <div className="tec_name">
              <i className="fab fa-node-js"></i>
            </div>
            <div className="tec_picture"></div>
            <div className="tec_description">NODE.JS</div>
          </li>

          <li className="skills__card">
            <div className="tec_name">
              <i className="fa-brands fa-envira"></i>
            </div>
            <div className="tec_picture"></div>
            <div className="tec_description">MONGODB</div>
          </li>

        </ul>
      </div>
    </section>
  )
}
