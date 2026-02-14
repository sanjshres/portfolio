import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";
import Navbar from "./layout/navbar";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <Projects />
    </>
  );
}

export default App;
