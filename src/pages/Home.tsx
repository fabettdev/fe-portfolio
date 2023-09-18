// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";

function Home() {
  const theme: string | null = localStorage.getItem("theme");

  if (theme) {
    document.body.dataset.theme = theme;
  }

  return (
    <>
      <Header />
      <main className="bg-light text-dark">
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
