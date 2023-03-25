import { AboutSection } from "./components/Sections/AboutSection";
import { ContactsSection } from "./components/Sections/ContactsSection";
import { Header } from "./components/Header";
import { HomeSection } from "./components/Sections/HomeSection";

import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";
import { BackToTop } from "./components/BackToTop";
import { ProjectsSection } from "./components/Sections/ProjectsSection";

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark_theme" : "light_theme"}`}>
      <Header />
      <BackToTop />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
      <footer>Credits soon</footer>
    </div >
  );
}

export default App;
