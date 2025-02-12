import {motion} from "framer-motion"
const Header = () => {
    const menuItems = [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
        // { name: "Theme Changer", href: "#theme-changer" },
    ];
    const scrollToSection = (href: string) => {
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header className="fixed top-0 left-0 w-full bg-zinc-900/30 backdrop-blur-md shadow-md z-50">

            <nav className="text-white flex justify-center gap-6 p-4 flex-wrap">
                {menuItems.map((item, index) => (
                    <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                    }}
                    whileHover={{ scale: 1.0 }} // Efeito ao passar o mouse
                    whileTap={{ scale: 0.9 }} // Efeito ao clicar
                    className="text-xl font-bold text-gray-300 hover:text-gray-200 opacity-100 transition-colors cursor-pointer"
                >
                    {item.name}
                </motion.a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
