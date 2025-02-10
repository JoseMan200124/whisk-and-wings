import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/assets/logo-slider.png"; // Ajusta la ruta de tu logo

const sections = [
    { label: "Inicio", to: "inicio" },
    { label: "Productos", to: "productos" },
    { label: "Nosotros", to: "nosotros" },
    { label: "Florecen", to: "florecen" },
    { label: "Contáctanos", to: "contactanos" },
];

function getActiveSection() {
    let current = "inicio";
    for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].to);
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 80) {
                current = sections[i].to;
                break;
            }
        }
    }
    return current;
}

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("inicio");
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActiveSection(getActiveSection());
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className="fixed top-0 w-full h-16 bg-[#394446] z-50 flex items-center justify-center">
            <div className="max-w-[1200px] w-full px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Whisk & Wings Logo"
                        className="object-contain w-auto h-10 md:h-12"
                    />
                </div>

                {/* Menú en escritorio */}
                <ul className="hidden md:flex items-center space-x-8">
                    {sections.map(({ label, to }) => (
                        <li key={to} className="relative">
                            <a
                                href={`#${to}`}
                                className={`font-semibold transition-colors ${
                                    activeSection === to
                                        ? "text-white"
                                        : "text-white/80 hover:text-white"
                                }`}
                            >
                                {label}
                                {activeSection === to && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded-md"
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botón hamburguesa en mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 hover:text-white/70 transition-colors"
                >
                    {openMenu ? (
                        // Ícono "X"
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Ícono "hamburguesa"
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menú full screen (mobile) */}
            <AnimatePresence>
                {openMenu && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-[#394446] flex flex-col md:hidden"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {/* Botón Cerrar */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-white/70 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Links de navegación */}
                        <div className="flex-grow flex flex-col justify-center items-center space-y-8">
                            {sections.map(({ label, to }) => (
                                <a
                                    key={to}
                                    href={`#${to}`}
                                    className={`text-2xl font-semibold ${
                                        activeSection === to ? "text-white" : "text-white/80"
                                    }`}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
