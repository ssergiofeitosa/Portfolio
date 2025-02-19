import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Carousel from './components/carousel/Carousel';
import Footer from "./components/Footer";

function App() {
  const projects = [
    {
      id: "item-1",
      image: "/src/assets/burguermania.png",
      title: "Burguer Mania",
      technologies: ["Angular", "TypeScript", "CSS"],
    },
    {
      id: "item-2",
      image: "/src/assets/quiz.png",
      title: "Quiz App de História",
      technologies: ["JavaScript", "TypeScript", "CSS"],
    },
    {
      id: "item-3",
      image: "/src/assets/googleformclone.png",
      title: "Google Form Clone",
      technologies: ["React", "TypeScript", "TailwindCSS"],
    },
  ];

  return (
    <>
      <div className="pattern bg-gray-950 flex flex-col items-center scroll-smooth font-primary overflow-x-hidden">
        <Header />
        <Hero></Hero>
        <Carousel projects={projects}></Carousel>
        <div className="h-[200px] w-full"></div>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;