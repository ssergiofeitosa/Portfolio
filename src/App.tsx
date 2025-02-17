import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/Footer";
function App() {
  const projects = [
    {
      id: "item-1",
      image: "/src/assets/burguermania.png",
      title: "Burguer Mania",
      technologies: ["Angular", "TypeScript", "SCSS"],
    },
    {
      id: "item-2",
      image: "/src/assets/quiz.png",
      title: "Quiz App",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      id: "item-3",
      image: "/src/assets/googleformclone.png",
      title: "Form Clone",
      technologies: ["Next.js", "Firebase", "Zod"],
    },
    {
      id: "item-4",
      image: "https://picsum.photos/200/100",
      title: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "item-5",
      image: "https://picsum.photos/200/300",
      title: "Admin Dashboard",
      technologies: ["React", "Material UI", "Chart.js"],
    },
  ];
  return (
    <>
      <div className="pattern bg-gray-950 flex flex-col items-center scroll-smooth font-primary ">
        <Header />
        <Hero></Hero>
        <Carousel projects={projects}></Carousel>
        {/* <Skills></Skills> */}

        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
