import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Hero from './components/Hero';
// import Form from './components/Form';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <div className="min-h-screen flex flex-col justify-between bg-gray-950 items-center">
        <Header />
        <Hero></Hero>
        <Skills />
        <Contact></Contact>
        <Footer></Footer>
      </div>

      
    </>
  );
}

export default App;
