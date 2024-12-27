import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing:"ease-in-sine",
      offset:100,
    });
  }, []);
  return (
  <>
    <div className="overflow-hidden ">
      <Navigation/>
      <Hero />
    </div>
  </>
  );
}

export default App;
