import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <div class="logo">BrunoTrajano</div>
        <a href="#">
          <i class="fas fa-bars navigation-icon"></i>
        </a>
        <nav>
          <ul class="menu">

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
      </header>
      <main>
        <section class="home" id="home">
          <div class="profile">
            <img class="profile__foto" src="" alt="" />
            <div>
              <span class="profile__text">Olá, meu nome é</span>
              <h1 class="profile__name">Bruno Trajano</h1>
              <span class="profile__text">sou Desenvolvedor Frontend</span>
            </div>
          </div>
        </section>
        <section class="sobre-mim" id="sobre-mim">
          <h2 class="section__tittle">Sobre Mim</h2>
          <div class="description">
            <h3 class="description__tittle">Quem sou?</h3>
            <p class="description__text">
              De Rio de Janeiro - RJ e tenho 24 anos, sou tecnólogo em Análise e Desenvolvimento de Sistemas pela UNIFACIG.
              Atualmente Desenvolvedor Front-End, também aprendendo sobre tecnologias Back-End para aperfeiçoar metodologias
              de integração.
            </p>
          </div>

          <div class="skills">
            <h3 class="skills__tittle">Skills:</h3>
            <ul class="skills__container">

              <li class="skills__icon">
                <i class="fab fa-html5"></i>
                <span>HTML</span>
              </li>

              <li class="skills__icon">
                <i class="fab fa-css3-alt"></i>
                <span>CSS</span>
              </li>

              <li class="skills__icon">
                <i class="fab fa-js"></i>
                <span>JAVASCRIPT</span>
              </li>

              <li class="skills__icon">
                <i class="fab fa-github"></i>
                <span>GITHUB</span>
              </li>

              <li class="skills__icon">
                <i class="fab fa-react"></i>
                <span>REACT.JS</span>
              </li>

              <li class="skills__icon">
                <i class="fab fa-node-js"></i>
                <span>NODE.JS</span>
              </li>

              <li class="skills__icon">
                <i class="fa-brands fa-envira"></i>
                <span>MONGODB</span>
              </li>

            </ul>
          </div>
        </section>

        <section class="projetos" id="projetos">
          <h2 class="section__tittle">Projetos:</h2>
          <div class="card-container">

            <a class="card" href="#" target="_blank">
              <span>Em breve</span>
            </a>

          </div>
        </section>

        <section class="contatos" id="contato">
          <h2 class="section__tittle">Contatos</h2>
          <ul class="social-container">

            <li class="social">
              <a href="https://www.linkedin.com/in/bruno-trajano/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </li>

            <li class="social">
              <a href="https://github.com/link.brun0" target="_blank"> <i class="fab fa-github"></i></a>
            </li>

            <li class="social">
              <a href="https://wa.me/5598970886368" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </li>

            <li class="social">
              <a href="mailto:brunoalvestrajano250@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a>
            </li>

            <li class="social">
              <a href="https://www.instagram.com/link.brun0" target="_blank"><i class="fab fa-instagram"></i></a>
            </li>

          </ul>

        </section>
      </main>
      <footer>
        Credits soon
      </footer>
    </div>
  )
}

export default App
