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
      image: "/burguermania.png",
      title: "Burguer Mania",
      technologies: ["Angular", "TypeScript", "CSS"],
      description: "Um aplicativo de delivery de hambúrgueres desenvolvido com Angular e TypeScript.",
      link:"https://github.com/ssergiofeitosa/Projeto-Restic---Burguer-Mania.git",
      site:""
    },
    {
      id: "item-2",
      image: "/quiz.png",
      title: "Quiz App de História",
      technologies: ["JavaScript", "TypeScript", "CSS"],
      description: "Um quiz interativo sobre história mundial, desenvolvido com JavaScript e TypeScript. O aplicativo inclui perguntas de múltipla escolha, um sistema de pontuação e feedback instantâneo.",
      link:"https://github.com/ssergiofeitosa/Projeto-Restic---Quiz.git",
      site:"https://projeto-restic-quiz-historia.vercel.app"
    },
    {
      id: "item-3",
      image: "/googleformclone.png",
      title: "Google Form Clone",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      description: "Um clone do Google Forms desenvolvido com React e TailwindCSS. ",
      link:"https://github.com/ssergiofeitosa/Google-Form-Clone-React.git",
      site:""
    },
  ];

  return (
    <>
      <div className="pattern bg-gray-950 flex flex-col items-center scroll-smooth font-primary overflow-x-hidden">
        <Header />
        <Hero></Hero>
        <Carousel projects={projects}></Carousel>
        <div className="h-[200px] w-full"></div> {/* gambiarra */}
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;