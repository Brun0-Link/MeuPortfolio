export function AboutSection() {
  return (
    <section className="sobre-mim" id="sobre-mim">
      <h2 className="section__title">Sobre Mim</h2>
      <div className="description">
        <h3 className="description__title">Quem sou?</h3>
        <p className="description__text">
          De Rio de Janeiro - RJ e tenho 24 anos, sou tecnólogo em Análise e
          Desenvolvimento de Sistemas pela UNIFACIG. Atualmente Desenvolvedor
          Front-End, também aprendendo sobre tecnologias Back-End para
          aperfeiçoar metodologias de integração.
        </p>
      </div>

      <div className="skills">
        <h3 className="skills__title">Skills:</h3>
        <ul className="skills__container">

          <li className="skills__card">
            <div className="tec_name">HTML</div>
            <div className="tec_picture">
              <i className="fab fa-html5"></i>
            </div>
            <div className="tec_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum vitae quo praesentium libero ut sapiente, porro voluptate ducimus natus ipsam fugit aspernatur nemo quidem, amet ad harum eligendi temporibus!
            </div>
          </li>

          <li className="skills__card">
            <div className="tec_name">CSS</div>
            <div className="tec_picture">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="tec_description"></div>
          </li>

          <li className="skills__card">
            <div className="tec_name">JAVASCRIPT</div>
            <div className="tec_picture">
              <i className="fab fa-js"></i>
            </div>
            <div className="tec_description"></div>
          </li>

          <li className="skills__card">
            <div className="tec_name">GITHUB</div>
            <div className="tec_picture">
              <i className="fab fa-github"></i>
            </div>
            <div className="tec_description"></div>
          </li>

          <li className="skills__card">
            <div className="tec_name">REACT.JS</div>
            <div className="tec_picture">
              <i className="fab fa-react"></i>
            </div>
            <div className="tec_description"></div>
          </li>

          <li className="skills__card">
            <div className="tec_name">NODE.JS</div>
            <div className="tec_picture">
              <i className="fab fa-node-js"></i>
            </div>
            <div className="tec_description"></div>
          </li>

          <li className="skills__card">
            <div className="tec_name">MONGODB</div>
            <div className="tec_picture">
              <i className="fa-brands fa-envira"></i>
            </div>
            <div className="tec_description"></div>
          </li>

        </ul>
      </div>
    </section>
  )
}
