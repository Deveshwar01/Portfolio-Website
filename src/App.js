import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/UI/Hero";
import { Services } from "./components/UI/Services";
import { Portfolio } from "./components/UI/Portfolio";
import Skills from "./components/Skill/skills";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Services /> */}
        <Skills/>
        <Portfolio/>
      </main>
      <Footer />
    </>
  );
}

export default App;
