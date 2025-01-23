import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Ejemplo simple de animación con GSAP al hacer scroll,
 * sin acciones que generen rebote (onLeave, etc.).
 */
const AnimacionScroll = () => {
    const seccionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            seccionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: seccionRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <section
            ref={seccionRef}
            className="min-h-screen flex items-center justify-center bg-[#7B7B63]"
        >
            <h1 className="text-4xl font-bold text-white">Sección con Animación GSAP</h1>
        </section>
    );
};

export default AnimacionScroll;
