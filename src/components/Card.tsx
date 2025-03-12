import { FaAngular, FaReact, FaCss3, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

interface Project {
  id: string;
  image: string;
  title: string;
  technologies: string[];
  description: string;
  link: string;
  site: string;
}

const technologyIcons: { [key: string]: JSX.Element } = {
  Angular: <FaAngular className="inline-block" />,
  React: <FaReact className="inline-block" />,
  TypeScript: <SiTypescript className="inline-block" />,
  JavaScript: <FaJs className="inline-block" />,
  CSS: <FaCss3 className="inline-block" />,
  TailwindCSS: <SiTailwindcss className="inline-block" />,
};

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <div className="relative w-full h-full flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Container da imagem */}
      <div className="h-[70%] md:h-[80%] flex-shrink-0 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:border-2 hover:border-rose-500"
        />
      </div>

      {/* Container de detalhes */}
      <div className="flex-grow bg-neutral-800/80 bg-opacity-75 text-white p-3 md:p-4 rounded-md mt-4">
        <h3 className="text-lg md:text-2xl font-bold mb-2">
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 hover:underline"
          >
            {project.title}
          </a>
        </h3>
        
        <p className="text-sm md:text-md mb-2">
          <span className="text-md md:text-lg">Tecnologias: </span>
          {project.technologies.map((tech) => (
            <span key={tech} className="inline-flex items-center mr-4">
              {technologyIcons[tech]}
              <span>{tech}</span>
            </span>
          ))}
        </p>

        <h4 className="text-rose-400 text-sm mb-2 hover:underline">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="truncate block"
          >
            {project.link}
          </a>
        </h4>

        <div className="text-sm md:text-lg">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;