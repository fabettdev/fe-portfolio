// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-black h-[200vh]">
        <Hero />
      </main>
      <div className="h-[30vh]"></div>
      <Footer />
    </>
  );
}

export default Home;
