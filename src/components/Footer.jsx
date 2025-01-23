// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.footer
            className="w-full bg-[#394446] text-white py-10 px-4 md:px-8 m-0"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Acerca de la empresa */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Whisk & Wings</h2>
                    <p className="text-sm text-gray-200 leading-relaxed">
                        Whisk representa la herramienta esencial (el batidor),
                        y Wings simboliza nuestra transformación constante.
                        Creamos dulces experiencias llenas de creatividad y sabor.
                    </p>
                </div>

                {/* Contacto */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center space-x-2">
                            <FaInstagram />
                            <span>whiskandwings.gt</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaFacebookF />
                            <span>Whisk & Wings</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaTiktok />
                            <span>whisk.wings</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaEnvelope />
                            <span>whiskwings@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div className="md:text-right">
                    <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        ¡Mantente al tanto de nuestras novedades y creaciones!
                    </p>
                    <div className="flex md:justify-end space-x-4 text-xl">
                        <a
                            href="https://www.instagram.com/whiskandwings.gt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-100 transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-100 transition-colors"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.tiktok.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-100 transition-colors"
                        >
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Whisk & Wings. Todos los derechos reservados.
            </div>
        </motion.footer>
    );
};

export default Footer;
