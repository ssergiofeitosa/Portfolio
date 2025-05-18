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
    <div className="relative w-full max-w-[700px] sm:max-w-[800px] h-auto flex flex-col rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] mx-auto">
      {/* Card container */}
      <div className="relative z-10 flex flex-col h-full w-full bg-neutral-900/95 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
        {/* Image container */}
        <div className="relative h-[220px] md:h-[320px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60 z-10" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
          />

          {/* Action buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-rose-500 transition-all duration-300 transform hover:scale-110"
              aria-label="View GitHub repository"
            >
              <FaGithub size={24} />
            </a>
            {project.site && (
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-rose-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Visit live site"
              >
                <FaExternalLinkAlt size={22} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col p-8 bg-gradient-to-b from-neutral-900 to-neutral-900/95">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
              <div className="h-[2px] bg-gradient-to-r from-rose-500 to-rose-500/20 mt-2 w-16 group-hover:w-full transition-all duration-500 ease-out" />
            </h3>
          </div>

          <p className="text-gray-300 mb-6 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-medium">
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 transition-all duration-300 hover:border-rose-500/50 hover:bg-rose-500/5"
                >
                  <span className="text-xl">{technologyIcons[tech]}</span>
                  <span className="text-gray-300">{tech}</span>
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