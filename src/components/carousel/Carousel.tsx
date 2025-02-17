import React, { useState } from 'react';
// Interface para os dados dos projetos
interface Project {
  id: string;
  image: string;
  title: string;
  technologies: string[];
}

// Dados dos projetos
const projects: Project[] = [
  {
    id: 'item-1',
    image: 'src/assets/burguermania.png',
    title: 'Projeto 1',
    technologies: ['Angular', 'Typescript', 'CSS'],
  },
  {
    id: 'item-2',
    image: 'src/assets/burguermania.png',
    title: 'Projeto 2',
    technologies: ['Angular', 'Typescript', 'CSS'],
  },
  {
    id: 'item-3',
    image: 'src/assets/burguermania.png',
    title: 'Projeto 3',
    technologies: ['Angular', 'Typescript', 'CSS'],
  },
];

const Carousel: React.FC = () => {
  const [selected, setSelected] = useState('item-1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.id);
  };

  return (
    <div className="flex w-full h-full items-center justify-center p-8 min-h-screen bg-transparent transition-colors duration-500">
      <div className="w-full max-w-4xl max-h-600px flex flex-col items-center">
        <div className="relative w-full h-96 mb-5">
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
                className={`absolute w-3/5 h-full left-0 right-0 m-auto transition-transform duration-500 ease-in-out cursor-pointer ${
                  selected === project.id ? 'z-10' : 'z-0 opacity-40'
                }`}
                style={{
                  transform:
                    selected === project.id
                      ? 'translateX(0) scale(1)'
                      : selected === projects[(index + 1) % projects.length].id
                      ? 'translateX(-40%) scale(0.8)'
                      : 'translateX(40%) scale(0.8)',
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-black/1 flex flex-col justify-end p-4 rounded-lg">
                    <h3 className="text-white text-lg font-bold  ">{project.title}</h3>
                    <div className="flex space-x-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
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