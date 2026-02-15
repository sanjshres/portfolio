import { useState } from "react";
import Experience from "./components/Experience";
import GetInTouch from "./components/GetinTouch";
import { HeroSection } from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./layout/footer";
import Navbar from "./layout/navbar";

function App() {
  const [toggleContact, setToggleContact] = useState(false);
  return (
    <>
      {" "}
      <Navbar
        toggleContact={toggleContact}
        setToggleContact={setToggleContact}
      />
      {toggleContact ? (
        <GetInTouch onBack={() => setToggleContact(false)} />
      ) : (
        <>
          <HeroSection onToggleContact={() => setToggleContact((prev) => !prev)} />
          <Projects />
          <Experience />
          <Skills />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
