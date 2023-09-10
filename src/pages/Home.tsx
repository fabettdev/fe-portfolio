// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-black py-40 md:py-56 flex flex-col gap-48 lg:gap-72">
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
