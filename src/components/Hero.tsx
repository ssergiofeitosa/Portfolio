import { motion } from "framer-motion";
import "animate.css";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
  ArrowDown,
  Download,
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
      <div className="container mx-auto px-4 flex flex-col items-center text-center md:text-left gap-6 mt-16">
        {/* container pai*/}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative md:w-1/3 flex justify-center"
          >
            <div className="absolute top-1/2 left-1/2 w-44 h-44 md:w-64 md:h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-rose-700 to-red-700 blur-sm animate-pulse"></div>
            <img
              className="relative w-40 h-40 md:w-64 md:h-64 object-cover rounded-full border-2 border-rose-600 p-1 bg-neutral-900 filter brightness-75"
              src="/eu.jpeg"
              alt="Sérgio Feitosa"
            />
          </motion.div>

          <div className="md:w-2/3 flex flex-col items-center md:items-start gap-6">
            {/* nome */}
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

            {/* animação do titulo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative self-center md:self-start"
            >
              <h2 className="sm:text-3xl text-2xl font-medium text-white">
                Desenvolvedor Web
              </h2>
            </motion.div>

            {/* aniamçao da descricao */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="sm:text-xl max-w-2xl text-center md:text-left font-light text-gray-300"
            >
              Graduando em{" "}
              <span className="italic text-white font-medium relative inline-block">
                Engenharia de Computação
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-rose-500/50"></span>
              </span>{" "}
              na Universidade Federal do Vale do São Francisco
            </motion.p>

            {/* icones de links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex gap-5 mt-2 justify-center md:justify-start"
            >
              {[
                {
                  icon: <GithubLogo size={32} weight="light" />,
                  href: "https://github.com/ssergiofeitosa",
                  label: "GitHub",
                },
                {
                  icon: <LinkedinLogo size={32} weight="light" />,
                  href: "https://www.linkedin.com/in/francisco-sérgio-feitosa-lima-segundo-874118210/",
                  label: "LinkedIn",
                },
                {
                  icon: <InstagramLogo size={32} weight="light" />,
                  href: "https://www.instagram.com/sergio_ffeitosa/",
                  label: "Instagram",
                },
                {
                  icon: <EnvelopeSimple size={32} weight="light" />,
                  href: "mailto:fsfsegundo@hotmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1 + index * 0.1 },
                  }}
                >
                  <div className="absolute inset-0 bg-rose-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-md bg-white/5 border border-white/50 rounded-xl p-1 shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:border-rose-500/50">
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{
                        scale: 1.1,
                        color: "#f43f5e",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-200 hover:text-rose-500 transition-colors duration-300 flex items-center justify-center"
                    >
                      {social.icon}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* cvitae */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="self-center md:self-start"
            >
              <a
                href="https://drive.google.com/file/d/1lJkk1EkjooN6Ll1Yc9bRMDy7O_G8ZELN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="flex items-center gap-2 text-white border border-rose-500/30 bg-neutral-800/60 hover:bg-neutral-700/60 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  whileHover={{
                    boxShadow: "0 0 8px rgba(244, 63, 94, 0.4)",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Meu Currículo</span>
                  <Download size={18} className="text-rose-400" />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* seta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.0 }}
            className="text-rose-500 cursor-pointer"
          >
            <ArrowDown size={32} weight="bold" onClick={scrollToSection} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
