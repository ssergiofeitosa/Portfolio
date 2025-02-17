import React, { useState } from "react";

interface Project {
  id: string;
  image: string;
  title: string;
  technologies: string[];
}

interface CarouselProps {
  projects: Project[]; // Recebe projetos via props
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [selected, setSelected] = useState(projects[0]?.id || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.id);
  };

  // Função para calcular a posição dos cards
  const getTransform = (index: number) => {
    const selectedIndex = projects.findIndex((p) => p.id === selected);
    const distance = index - selectedIndex;

    if (distance === 0) return "translateX(0) scale(1)"; // Item selecionado
    if (distance === 1 || distance === -(projects.length - 1))
      return "translateX(40%) scale(0.8)"; // Direita
    if (distance === -1 || distance === projects.length - 1)
      return "translateX(-40%) scale(0.8)"; // Esquerda
    return "translateX(0) scale(0)"; // Esconde outros itens
  };

  return (
    <div className="flex w-full h-full items-center justify-center p-8 min-h-screen bg-transparent transition-colors duration-700">
      <div className="w-full max-w-6xl flex flex-col items-center">
        {" "}
        {/* Aumentado para max-w-6xl */}
        <div className="relative w-full h-[500px] mb-5">
          {" "}
          {/* Altura aumentada */}
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
                className={`absolute w-3/5 h-full left-0 right-0 m-auto transition-all duration-700 ease-in-out cursor-pointer ${
                  selected === project.id ? "z-10" : "z-0 opacity-40"
                }`}
                style={{
                  transform: getTransform(index),
                }}
              >
                <div className="relative w-full h-full group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 rounded-lg hover:bg-black/40 transition-colors">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-sm bg-black/30 text-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div> */}
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
