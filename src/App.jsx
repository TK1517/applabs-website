import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";
import ShowcaseSection from "./components/ShowcaseSection";
import Projects from "./components/Projects";
import SubmitIdeas from "./components/SubmitIdeas";
import Contact from "./components/Contact";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <ShowcaseSection />
      <TeamSection />
      <Projects />
      <section className="quote-section">
  <h2 className="quote-text">
    Dream. Design. Develop. Deliver.
  </h2>
</section>
      <SubmitIdeas />
      <Contact />
    </>
  );
}

export default App;