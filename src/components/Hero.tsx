import { motion } from "framer-motion";
import "animate.css";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
  ArrowDown,
} from "phosphor-react";

const Hero = () => {
  const scrollToSection = () => {
    const section = document.querySelector("#projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden snap-start"
    >
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-900 to-transparent z-0"></div>

      {/* gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 z-[-1]"></div>

      {/* animação de fundo (pontos) */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6 mt-16">
        {/* borda animada na foto de perfil*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 blur-md opacity-70 animate-pulse"></div>
          <img
            className="relative w-32 h-32 object-cover rounded-full border-2 border-rose-500 p-1 bg-neutral-900"
            src="/eu.jpeg"
            alt="Sérgio Feitosa"
            width={120}
            height={120}
          />
        </motion.div>

        {/* Name with animated brackets */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="sm:text-5xl text-4xl font-bold text-white"
        >
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-rose-500 inline-block"
          >
            {"<"}
          </motion.span>
          <span className="relative">
            Sérgio Feitosa
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></span>
          </span>
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-rose-500 inline-block"
          >
            {"/>"}
          </motion.span>
        </motion.h1>

        {/* animacao do titulo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative"
        >
          <h2 className="sm:text-3xl text-2xl font-medium text-white">
            Desenvolvedor Web
          </h2>
          <div className="absolute -right-4 top-0 h-full w-1 bg-rose-500 animate-blink"></div>
        </motion.div>

        {/* animacao da descricao */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="sm:text-3xl max-w-4xl text-center font-light text-gray-300"
        >
          Graduando em{" "}
          <span className="italic text-white font-medium relative inline-block">
            Engenharia de Computação
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-500/50"></span>
          </span>{" "}
          na Universidade Federal do Vale do São Francisco
        </motion.p>

        {/* icones c hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex gap-5 mt-4"
        >
          {[
            {
              icon: <GithubLogo size={32} weight="fill" />,
              href: "https://github.com/ssergiofeitosa",
              label: "GitHub",
            },
            {
              icon: <LinkedinLogo size={32} weight="fill" />,
              href: "https://www.linkedin.com/in/francisco-sérgio-feitosa-lima-segundo-874118210/",
              label: "LinkedIn",
            },
            {
              icon: <InstagramLogo size={32} weight="fill" />,
              href: "https://www.instagram.com/sergio_ffeitosa/",
              label: "Instagram",
            },
            {
              icon: <EnvelopeSimple size={32} weight="fill" />,
              href: "mailto:fsfsegundo@hotmail.com",
              label: "Email",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{
                scale: 1.2,
                color: "#f43f5e",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1 + index * 0.1 },
              }}
              className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* seta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="text-rose-500"
          >
            <ArrowDown size={32} weight="bold" onClick={scrollToSection} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
