import { AboutSection } from "./components/Sections/AboutSection";
import { ContactsSection } from "./components/Sections/ContactsSection";
import { Header } from "./components/Header";
import { HomeSection } from "./components/Sections/HomeSection";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark_theme" : "light_theme"}`}>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        {/* <section className="projetos" id="projetos">
          <h2 className="section__tittle">Projetos:</h2>
          <div className="card-container">

            <a className="card" href="#" target="_blank">
              <span>Em breve</span>
            </a>

          </div>
        </section> */}
        <ContactsSection />
      </main>
      <footer>Credits soon</footer>
    </div >
  );
}

export default App;
