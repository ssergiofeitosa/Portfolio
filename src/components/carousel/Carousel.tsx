import React, { useState } from "react";
import { FaAngular, FaReact, FaCss3, FaJs } from "react-icons/fa"; // Ícones para Angular, React, CSS
import { SiTypescript, SiTailwindcss } from "react-icons/si"; // Ícones para TypeScript e TailwindCSS

interface Project {
  id: string;
  image: string;
  title: string;
  technologies: string[];
  description: string;
  link:string;
}

interface CarouselProps {
  projects: Project[];
}

// mapeamento de tecnologias para ícones............ adicionar aqui novos icones
const technologyIcons: { [key: string]: JSX.Element } = {
  Angular: <FaAngular className="inline-block " />,
  React: <FaReact className="inline-block " />,
  TypeScript: <SiTypescript className="inline-block " />,
  JavaScript: <FaJs className="inline-block" />,
  CSS: <FaCss3 className="inline-block " />,
  TailwindCSS: <SiTailwindcss className="inline-block " />,
};

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [selected, setSelected] = useState(projects[0]?.id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.id);
  };

  const getTransform = (index: number) => {
    const selectedIndex = projects.findIndex((p) => p.id === selected);
    const distance = index - selectedIndex;

    if (distance === 0) return "translateX(0) scale(1)";
    if (distance === 1 || distance === -(projects.length - 1))
      return "translateX(40%) scale(0.8)";
    if (distance === -1 || distance === projects.length - 1)
      return "translateX(-40%) scale(0.8)";
    return "translateX(0) scale(0)";
  };

  return (
    <div
      id="projects"
      className="flex h-full w-full items-center justify-center pt-20 px-4 bg-transparent"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="container mx-auto text-center mb-8 w-[85%] lg:w-[70%] ">
          <h2 className="text-white text-5xl md:text-4xl lg:text-5xl font-light items-center">
            Projetos
          </h2>
          <br />
          <br />
          <p className="text-white text-justify">
            Esses projetos foram desenvolvidos com o objetivo de aprimorar
            minhas habilidades e aprender novas tecnologias. Cada um deles
            representa um desafio que me ajudou a evoluir, explorando diferentes
            conceitos e boas práticas.
          </p>
        </div>

        <div className="relative w-full h-[280px] sm:h-[500px] lg:h-[320px] lg:w-[70%]">
          {projects.map((project) => (
            <input
              key={project.id}
              type="radio"
              name="slider"
              id={project.id}
              checked={selected === project.id}
              onChange={handleChange}
              className="hidden"
            />
          ))}

          <div className="absolute w-full h-full">
            {projects.map((project, index) => (
              <label
                key={project.id}
                htmlFor={project.id}
                className={`absolute w-4/5 md:w-3/5 h-full left-0 right-0 m-auto transition-all duration-700 ease-in-out cursor-pointer ${
                  selected === project.id ? "z-10" : "z-0"
                }`}
                style={{ transform: getTransform(index) }}
              >
                {/* ccontainer principal */}
                <div className="relative w-full h-full flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out">
                  {/* container da imagem com altura fixa */}
                  <div className="h-[70%] md:h-[80%] flex-shrink-0 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full rounded-lg object-cover transform transition-transform duration-300 hover:border-2 hover:border-rose-500  ${
                        selected === project.id
                          ? "scale-100"
                          : "scale-90 opacity-40 blur-xs"
                      }`}
                    />
                  </div>

                  {/* container de detalhes  ....crescimento automático */}
                  <div
                    className={`flex-grow bg-neutral-800/80 bg-opacity-75 text-white p-3 md:p-4 rounded-md transition-all duration-300 mt-4  ${
                      selected === project.id
                        ? "opacity-100 blur-none"
                        : "opacity-40 blur-xs"
                    }`}
                  >
                    <h3 className="text-base md:text-lg font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm mb-2">
                      Tecnologias:{" "}
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center mr-4"
                        >
                          {technologyIcons[tech]} {/* icone antes do texto */}
                          <span>{tech}</span> {/* texto da tech */}
                        </span>
                      ))}
                    </p>
                    <h4 className="text-rose-400 text-sm mb-2 hover:underline hover:-scale-z-110">
                      
                      <a
                        href={project.link}
                        target="_blank"
                      >
                        {project.link}
                      </a>
                    </h4>
                    <div className="text-xs md:text-sm">
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
