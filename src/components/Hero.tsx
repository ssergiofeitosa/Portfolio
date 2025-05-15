import { motion } from "framer-motion";
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

  const socialLinks = [
    {
      icon: <GithubLogo weight="light" />,
      href: "https://github.com/ssergiofeitosa",
      label: "GitHub",
    },
    {
      icon: <LinkedinLogo weight="light" />,
      href: "www.linkedin.com/in/sérgio-feitosa-874118210",
      label: "LinkedIn",
    },
    {
      icon: <InstagramLogo weight="light" />,
      href: "https://www.instagram.com/sergio_ffeitosa/",
      label: "Instagram",
    },
    {
      icon: <EnvelopeSimple weight="light" />,
      href: "mailto:fsfsegundo@hotmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="relative">
              <img
                src="/eu.jpeg"
                alt="Sérgio Feitosa"
                className="relative w-64 h-64 object-cover rounded-full border-2 border-rose-500/30 p-1 glass-card hover-glow"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <span className="text-rose-500">&lt;</span>
                Sérgio Feitosa
                <span className="text-rose-500">/&gt;</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl text-gray-300 font-light">
                Desenvolvedor de Software
              </h2>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Graduando em{" "}
                <span className="font-medium text-white relative">
                  Engenharia de Computação
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500/50" />
                </span>{" "}
                na Universidade Federal do Vale do São Francisco
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="glass-card p-3 hover:bg-white/10 hover-glow"
                    aria-label={social.label}
                  >
                    <span className="text-2xl text-gray-300 hover:text-rose-500 transition-colors duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* CV Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="https://drive.google.com/file/d/1lm1Z0fblj4HtSPh_FdPa9dSJcLc7pHqT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass-card px-6 py-3 text-white hover:bg-white/10 hover-glow group"
                >
                  <span>Meu Currículo</span>
                  <Download
                    weight="light"
                    className="text-rose-500 group-hover:translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToSection}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-rose-500 hover:text-rose-400 transition-colors duration-300"
          >
            <ArrowDown size={32} weight="light" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;