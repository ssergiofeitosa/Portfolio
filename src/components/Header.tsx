import { useState } from "react";
import { motion } from "framer-motion";
import { UserCircle, HouseSimple, Code, List, X } from "phosphor-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home", icon: <HouseSimple size={20} /> },
    { name: "Projetos", href: "#projects", icon: <Code size={20} /> },
    { name: "Contato", href: "#contact", icon: <UserCircle size={20} /> },
  ];

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-900/10 backdrop-blur-lg shadow-md z-50 p-4 h-14  ">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 ">
        {/* Botão do menu mobile (escondido em telas grandes) */}
        <button
          className="sm:hidden text-white "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <List size={32} />}
        </button>

        {/* Menu desktop (centralizado em telas grandes) */}
        <nav className="hidden sm:flex justify-center w-full text-white gap-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              className="relative text-lg flex gap-1 font-light mx-[10px] lg:mx-[20px] text-gray-50 hover:text-rose-500 transition-all after:content-[''] after:w-0 after:h-[2px] after:bg-rose-500 after:absolute after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.icon}
              {item.name}
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden fixed top-14 left-0 w-full bg-black/85 backdrop-blur-lg text-white py-4 px-6 shadow-lg flex flex-col items-start gap-4"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-lg text-gray-300 hover:text-rose-500"
            >
              {item.icon}
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
