// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Smartphone from "../components/Smartphone";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-black">
        <div className="h-[100vh] flex justify-center items-center">
          <Smartphone />
        </div>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default Home;
