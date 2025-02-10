import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <motion.section
            id="banner-genial"
            className="w-full min-h-[50vh] flex items-center justify-center bg-[#7B7B63] px-4 text-center relative py-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Fondo con ligera opacidad */}
            <div className="absolute inset-0 pointer-events-none bg-[#394446]/20" />
            <div className="relative z-10 max-w-3xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                    “La magia está en cada detalle, transformando sabores en emociones.”
                </h2>
                <p className="text-base md:text-lg mb-8">
                    Innovamos cada día para llevarte dulces experiencias que trascienden
                    la vista y el paladar.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-[#394446] rounded-full text-white font-semibold hover:bg-[#49442E] transition-colors">
                    Conoce más
                    <FaArrowRight className="ml-2" />
                </button>
            </div>
        </motion.section>
    );
};

export default Banner;
