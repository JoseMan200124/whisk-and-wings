import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ImageSlider recibe:
 *  - slides: array de objetos con { src, customClass, ... }
 *  - currentIndex: el índice del slide actual
 *  - isMobile: boolean (true si es mobile)
 */
const ImageSlider = ({ slides, currentIndex, isMobile }) => {
    const currentSlide = slides[currentIndex];

    return (
        <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentSlide.src}
                    src={currentSlide.src}
                    alt={`Slide ${currentIndex}`}

                    className={`
            w-full
            ${isMobile ? "h-screen" : "h-full"}
            object-cover
            transition-transform
            duration-700
            ${currentSlide.customClass ? currentSlide.customClass : ""}
          `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </AnimatePresence>
        </div>
    );
};

export default ImageSlider;
