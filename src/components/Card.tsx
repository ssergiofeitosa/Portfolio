import { useState } from "react";
import { motion } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full flex flex-col rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* efeito borda*/}
      <div
        className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-br from-rose-500 via-rose-400 to-neutral-700 opacity-0 transition-opacity duration-300 z-0"
        style={{ opacity: isHovered ? 0.8 : 0 }}
      />

      {/* container */}
      <div className="relative z-10 flex flex-col h-full bg-neutral-900 rounded-xl overflow-hidden">
        {/* container da img */}
        <div className="relative h-[200px] md:h-[220px] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? "brightness(0.7)" : "brightness(0.9)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* overlay de botoes */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900/80 text-rose-500 p-3 rounded-full hover:bg-rose-500 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View GitHub repository"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900/80 text-rose-500 p-3 rounded-full hover:bg-rose-500 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit live site"
            >
              <FaExternalLinkAlt size={18} />
            </motion.a>
          </motion.div>
        </div>

        <div className="flex-grow flex flex-col p-5 bg-neutral-800/95">
          {/* title */}
          <div className="mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white group">
              {project.title}
              <div className="h-[2px] w-0 group-hover:w-full bg-rose-500 transition-all duration-300 mt-1"></div>
            </h3>
          </div>

          {/* descricao do projeto */}
          <p className="text-sm text-gray-300 mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* icones de techs */}
          <div className="mt-auto">
            <h4 className="text-sm text-gray-400 mb-2">Tecnologias:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="inline-flex items-center gap-1.5 bg-neutral-700/50 px-2 py-1 rounded-md text-xs"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-lg">{technologyIcons[tech]}</span>
                  <span className="text-gray-200">{tech}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
