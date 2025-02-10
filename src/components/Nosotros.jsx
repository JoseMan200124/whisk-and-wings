import React from "react";
import { motion } from "framer-motion";

const Nosotros = () => {
    return (
        <section
            id="nosotros"
            className="w-full min-h-[60vh] flex items-center justify-center relative"
            style={{
                backgroundImage: 'url("/assets/nosotros-bg.jpeg")',
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay para oscurecer un poco el fondo */}
            <div className="absolute inset-0 bg-black/40" />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto p-6 md:p-12 text-center text-white bg-black/50 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-4xl font-extrabold mb-6">Sobre Nosotros</h2>
                <p className="text-lg mb-6">
                    En <strong>Whisk & Wings</strong>, creemos que cada postre es una obra de
                    arte que merece ser creada con pasión y dedicación. Nuestro nombre nace
                    de la herramienta esencial <em>(whisk, el batidor)</em> y las alas que
                    representan la transformación constante de nuestros productos.
                </p>
                <p className="text-lg mb-6">
                    Nos enorgullece ofrecer creaciones que combinan sabores únicos, colores
                    vibrantes y diseños personalizados. Nuestra misión es entregar
                    experiencias dulces que despierten emoción y alegría en cada ocasión
                    especial.
                </p>
                <p className="text-lg">
                    La creatividad, la calidad y la innovación son los pilares de todo lo
                    que hacemos. ¡Gracias por acompañarnos en este viaje dulce y mágico!
                </p>
            </motion.div>
        </section>
    );
};

export default Nosotros;
