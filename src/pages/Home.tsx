// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-black py-60 flex flex-col gap-64">
        <Hero />
        <Skills />
        <Experience />
      </main>
      <div className="h-[30vh]"></div>
      <Footer />
    </>
  );
}

export default Home;
