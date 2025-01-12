import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";

// Hook para detectar si es mobile
const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return isMobile;
};

/**
 * slides:
 * - backgroundColor: color de fondo para esa sección
 * - slogan, description: textos mostrados en la parte izquierda
 * - customClass: clases extra para personalizar la imagen en desktop (por ejemplo scale).
 */
const slides = [
    {
        src: "/src/assets/slide4.jpg",
        backgroundColor: "#3A3F3A",
        slogan: "Sabores que Enamoran",
        description:
            "Descubre la pasión y el amor por la repostería en cada detalle de nuestros postres.",
        customClass: "" // se muestra normal (ocupará todo)
    },
    {
        src: "/src/assets/slide5.jpg",
        backgroundColor: "#394446",
        slogan: "Dulces Momentos",
        description:
            "Celebra la vida y cada ocasión especial con nuestros deliciosos y creativos postres.",
        // Escalamos un poco hacia abajo para "comprimir" la imagen.
        // Ajusta el valor como quieras (scale-95, scale-90, etc.)
        customClass: "md:scale-95"
    },
    {
        src: "/src/assets/slide1.jpg",
        backgroundColor: "#3A3F3A",
        slogan: "Arte y Sabor en Cada Creación",
        description:
            "Elaboramos dulces artesanales únicos y personalizados, fusionando creatividad e innovación.",
        customClass: ""
    },
    {
        src: "/src/assets/slide2.jpg",
        backgroundColor: "#7B7B63",
        slogan: "La Dulzura Hecha Arte",
        description:
            "Disfruta de postres exclusivos que combinan sabores exquisitos y diseños sorprendentes.",
        customClass: ""
    },
    {
        src: "/src/assets/slide3.jpg",
        backgroundColor: "#49442E",
        slogan: "Experiencias Dulces Inolvidables",
        description:
            "Creamos recuerdos y momentos especiales con cada bocado de nuestras creaciones únicas.",
        customClass: ""
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useIsMobile();

    // Rotar slides cada 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    const currentSlide = slides[currentIndex];

    return (
        // h-screen en desktop para ocupar toda la pantalla
        // En móviles usamos min-h-screen + h-auto (luego la imagen rellena con h-screen).
        <section
            id="inicio"
            className="relative w-full min-h-screen md:h-screen flex flex-col justify-center"
        >
            {/* Contenedor principal con el color de fondo dinámico */}
            <div
                className="flex flex-col md:flex-row w-full h-full relative"
                style={{
                    backgroundColor: currentSlide.backgroundColor,
                }}
            >
                {/* Sección izquierda: texto, con algo de padding extra solo en mobile */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start pt-16 md:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
                                {currentSlide.slogan}
                            </h1>
                            <p className="max-w-md text-base md:text-lg font-light tracking-normal mb-8 text-white">
                                {currentSlide.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Logo centrado con animación */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`
            absolute z-20 pointer-events-none
            -translate-x-1/2 -translate-y-1/2
            ${isMobile ? "top-[25%] left-[25%]" : "top-[27%] left-[43%]"}
          `}
                >
                    <img
                        src="/src/assets/logo-slider.png"
                        alt="Logo centrado"
                        className={`${
                            isMobile ? "md:w-70 md:h-70 w-60 h-60" : "md:w-80 md:h-80 w-70 h-70"
                        } object-contain`}
                    />
                </motion.div>

                {/* Sección derecha: slider de imágenes */}
                <div className="w-full md:w-1/2 relative overflow-hidden">
                    <ImageSlider
                        slides={slides}
                        currentIndex={currentIndex}
                        isMobile={isMobile}
                    />

                    {/* Overlay: gradiente para que el texto izquierdo se lea mejor */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(
                to ${isMobile ? "bottom" : "right"},
                ${currentSlide.backgroundColor} 0%,
                rgba(0,0,0,0) 40%
              )`,
                        }}
                    />

                    {/* Miniaturas/Previews para seleccionar manualmente el slide */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(index)}
                                className={`w-10 h-10 cursor-pointer bg-cover bg-center border-2 ${
                                    index === currentIndex ? "border-[#ffce00]" : "border-transparent"
                                }`}
                                style={{
                                    backgroundImage: `url(${slide.src})`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
