import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Swiper from "./components/swiper/Swiper";
function App() {
  return (
    <>
      <div className="pattern bg-gray-950 flex flex-col items-center scroll-smooth font-primary overflow-x-hidden w-screen">
        <Header />
        <Hero></Hero>
        <Swiper></Swiper>
        <div className="h-[200px] w-full"></div> {/* gambiarra */}
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
