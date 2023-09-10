// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-black pb-48">
        <Hero />
        <Skills />
      </main>
      <div className="h-[30vh]"></div>
      <Footer />
    </>
  );
}

export default Home;
