import { motion } from "framer-motion";
import { GithubLogo, LinkedinLogo, InstagramLogo } from "phosphor-react";

const Footer = () => {
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
  ];

  return (
    <footer className="w-full bg-neutral-900/80 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-500 transition-colors duration-300"
                aria-label={social.label}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-400">
              © 2025{" "}
              <a 
                href="https://github.com/ssergiofeitosa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-500 transition-colors duration-300"
              >
                F. Sérgio Feitosa
              </a>
              . Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;