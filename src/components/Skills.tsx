import Card from "./Card";
import burguerMania from "../assets/burguermania.png";
import { FaReact, FaAngular, FaHtml5, FaCss3 } from "react-icons/fa"; // Exemplo de ícones

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  githublink: string;
  technologies: JSX.Element[]; // Agora aceita elementos JSX (ícones)
}

const Skills = () => {
  const projetos: ProjectProps[] = [
    {
      title: "Burguer Mania",
      description:
        "Layout completo de uma hamburgueria. Projeto desenvolvido na ResTIC36.",
      image: burguerMania,
      githublink: "https://github.com/ssergiofeitosa",
      technologies: [<FaAngular />, <FaHtml5 />, <FaCss3 />],
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section
      className="px-4 bg-transparent min-h-screen pt-[120px] w-full text-white flex flex-col items-center gap-8"
      id="projects"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-white text-5xl font-normal mb-8">
          Projetos Pessoais
        </h2>
        <div className="flex justify-center gap-8">
          {projetos.map((projeto, index) => (
            <Card
              key={index}
              title={projeto.title}
              description={projeto.description}
              image={projeto.image}
              technologies={projeto.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
