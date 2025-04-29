import {
  FaAngular,
  FaReact,
  FaCss3,
  FaJs,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import type { JSX } from "react";

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
  Angular: <FaAngular className="text-[#dd0031]" />,
  React: <FaReact className="text-[#61dafb]" />,
  TypeScript: <SiTypescript className="text-[#3178c6]" />,
  JavaScript: <FaJs className="text-[#f7df1e]" />,
  CSS: <FaCss3 className="text-[#264de4]" />,
  TailwindCSS: <SiTailwindcss className="text-[#38bdf8]" />,
};

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  if (!project) {
    return (
      <div className="w-full h-full flex items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 p-6">
        <p className="text-gray-400">Project data unavailable</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[700px] sm:max-w-[800px] h-auto flex flex-col rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.00] hover:shadow-2xl mx-auto">
      {/* container do card */}
      <div className="relative z-10 flex flex-col h-full w-full bg-neutral-900/95 rounded-2xl overflow-hidden border border-neutral-800">
        {/* Image */}
        <div className="relative h-[180px] md:h-[420px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-40 z-10 group-hover:opacity-60 transition-all" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
          />

          {/* botoes de link externo */}
          <div className="absolute inset-0 flex items-center justify-center gap-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900/70 text-rose-400 p-3.5 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-lg"
              aria-label="View GitHub repository"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900/70 backdrop-blur-md text-rose-400 p-3.5 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Visit live site"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>

        {/* conteúdo de texto */}
        <div className="flex-grow flex flex-col p-6 bg-neutral-900 border-t border-neutral-800/50">
          <div className="mb-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white inline-block">
              {project.title}
              <div className="h-[2px] bg-gradient-to-r from-rose-600 to-red-900 mt-1 w-0 group-hover:w-full transition-all duration-300" />
            </h3>
          </div>

          <p className="text-base text-gray-300 mb-5 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2.5 font-medium">
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 bg-neutral-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm border border-neutral-700/50 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:bg-white/5"
                >
                  <span className="text-xl">{technologyIcons[tech]}</span>
                  <span className="text-gray-200 font-medium">{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
