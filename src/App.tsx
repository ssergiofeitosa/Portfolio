import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Hero from './components/Hero';
// import Form from './components/Form';
import Contact from "./components/Contact";
function App() {
  return (
    <>

      <div className="min-h-fit max-w-full items-center w-full h-screen bg-gradient-to-r from-gray-950 to-zinc-900 flex flex-col">
        <Header />
        <Hero></Hero>
        <Skills />
        <Contact></Contact>
      </div>

      
    </>
  );
}

export default App;