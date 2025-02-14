import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" flex flex-col bg-gray-950 items-center scroll-smooth font-primary ">
        <Header />
        <Hero></Hero>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
