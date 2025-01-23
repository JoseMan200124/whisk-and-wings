import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";

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

const slides = [
    {
        src: "/src/assets/slide4.jpg",
        backgroundColor: "#394446",
        slogan: "Sabores que Enamoran",
        description:
            "Descubre la pasión y el amor por la repostería en cada detalle de nuestros postres.",
        customClass: "",
    },
    {
        src: "/src/assets/slide5.jpg",
        backgroundColor: "#49442E",
        slogan: "Dulces Momentos",
        description:
            "Celebra la vida y cada ocasión especial con nuestros deliciosos y creativos postres.",
        customClass: "md:scale-95",
    },
    {
        src: "/src/assets/slide1.jpg",
        backgroundColor: "#7B7B63",
        slogan: "Arte y Sabor en Cada Creación",
        description:
            "Elaboramos dulces artesanales únicos y personalizados, fusionando creatividad e innovación.",
        customClass: "",
    },
    {
        src: "/src/assets/slide2.jpg",
        backgroundColor: "#394446",
        slogan: "La Dulzura Hecha Arte",
        description:
            "Disfruta de postres exclusivos que combinan sabores exquisitos y diseños sorprendentes.",
        customClass: "",
    },
    {
        src: "/src/assets/slide3.jpg",
        backgroundColor: "#49442E",
        slogan: "Experiencias Dulces Inolvidables",
        description:
            "Creamos recuerdos y momentos especiales con cada bocado de nuestras creaciones únicas.",
        customClass: "",
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useIsMobile();

    // Cambiar slide cada 4s
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
        <section
            id="inicio"
            className="relative w-full h-screen flex flex-col justify-center overflow-hidden"
        >
            <div
                className="flex flex-col md:flex-row w-full h-full relative"
                style={{
                    backgroundColor: currentSlide.backgroundColor,
                }}
            >
                {/* Sección izquierda: texto */}
                <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-start pt-16 md:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight text-white">
                                {currentSlide.slogan}
                            </h1>
                            <p className="max-w-md text-sm md:text-lg font-light tracking-normal mb-6 md:mb-8 text-white">
                                {currentSlide.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Sección derecha: slider de imágenes */}
                <div className="w-full md:w-1/2 relative overflow-hidden">
                    <ImageSlider
                        slides={slides}
                        currentIndex={currentIndex}
                        isMobile={isMobile}
                    />

                    {/* Overlay para oscurecer un poco y dar contraste al texto */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: isMobile
                                ? `linear-gradient(to bottom, ${currentSlide.backgroundColor} 0%, rgba(0,0,0,0) 50%)`
                                : `linear-gradient(to right, ${currentSlide.backgroundColor} 0%, rgba(0,0,0,0) 50%)`,
                        }}
                    />

                    {/* Miniaturas/Previews para seleccionar manualmente el slide */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(index)}
                                className={`w-8 h-8 cursor-pointer bg-cover bg-center border-2 ${
                                    index === currentIndex ? "border-white" : "border-transparent"
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
