// src/components/AnimacionScroll.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimacionScroll = () => {
    const seccionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(seccionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: seccionRef.current,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse',
                    // Efecto difuminado
                    onEnter: () => gsap.to(seccionRef.current, { filter: 'blur(0px)', duration: 1 }),
                    onLeave: () => gsap.to(seccionRef.current, { filter: 'blur(5px)', duration: 1 }),
                },
            }
        );
    }, []);

    return (
        <section ref={seccionRef} className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">Bienvenido a Mi Página Profesional</h1>
        </section>
    );
};

export default AnimacionScroll;
