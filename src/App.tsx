import Experience from "./components/Experience";
import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./layout/footer";
import Navbar from "./layout/navbar";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
