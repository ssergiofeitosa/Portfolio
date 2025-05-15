import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Swiper from "./components/swiper/Swiper";

function App() {
  return (
    <div className="pattern bg-dark-950 flex flex-col items-center scroll-smooth font-primary overflow-x-hidden w-screen min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-transparent pointer-events-none"></div>
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Swiper />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;