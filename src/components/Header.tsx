import { motion } from "framer-motion";
const Header = () => {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
    // { name: "Theme Changer", href: "#theme-changer" },
  ];
  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/10 backdrop-blur-lg shadow-md z-50 ">
      <nav className="text-white flex justify-center gap-6 p-4 flex-wrap">
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            whileHover={{ scale: 1.1 }} // efeito ao passar o mouse
            whileTap={{ scale: 0.9 }} // eefeito ao clicar
            className="relative text-xl font-light mx-[12px] text-gray-300 hover:text-gray-200 transition-all after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            {item.name}
          </motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
