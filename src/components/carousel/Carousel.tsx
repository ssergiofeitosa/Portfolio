import React, { useState } from "react";

interface Project {
  id: string;
  image: string;
  title: string;
  technologies: string[];
}

interface CarouselProps {
  projects: Project[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [selected, setSelected] = useState(projects[0]?.id || "");

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
      className="flex h-full w-full items-center justify-center pt-20 pb-16 px-4 bg-transparent"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-white text-5xl md:text-4xl lg:text-5xl font-light">
            Projetos
          </h2>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px]">
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
                {/* Container principal */}
                <div className="relative w-full h-full flex flex-col">
                  {/* Container da imagem com altura fixa */}
                  <div className="h-[70%] md:h-[80%] flex-shrink-0 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full rounded-lg object-cover transform transition-transform duration-300 ${
                        selected === project.id
                          ? "scale-100"
                          : "scale-90 opacity-40 blur-xs"
                      }`}
                    />
                  </div>

                  {/* Container de detalhes com crescimento automático */}
                  <div
                    className={`flex-grow bg-gray-700 bg-opacity-75 text-white p-3 md:p-4 rounded-md transition-all duration-300 mt-4 ${
                      selected === project.id
                        ? "opacity-100 blur-none"
                        : "opacity-40 blur-xs"
                    }`}
                  >
                    <h3 className="text-base md:text-lg font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm mb-2">
                      Tecnologias: {project.technologies.join(", ")}
                    </p>
                    <div className="text-xs md:text-sm">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Alias eveniet illum in laborum omnis assumenda
                        dolorum ducimus hic vitae. Assumenda porro dolores ipsa
                        placeat, dicta commodi voluptate ab adipisci quisquam?
                      </p>
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
