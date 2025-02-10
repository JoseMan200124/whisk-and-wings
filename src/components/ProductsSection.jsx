import React from "react";
import { motion } from "framer-motion";

const productImages = [
    {
        src: "/assets/img1.jpeg",
        alt: "Cupcakes de flores",
        description:
            "Cupcakes de flores",
    },
    {
        src: "/assets/img2.jpeg",
        alt: "Chunky Cookies",
        description:
            "Chunky Cookies",
    },
    {
        src: "/assets/img3.jpeg",
        alt: "Galletas con Royal icing",
        description:
            "Galletas con Royal icing",
    },
    {
        src: "/assets/img4.jpeg",
        alt: "Mini donas",
        description:
            "Mini donas",
    },
    {
        src: "/assets/img5.jpeg",
        alt: "Cupcakes personalizados",
        description:
            "Cupcakes personalizados",
    },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const ProductsSection = () => {
    return (
        <section
            id="productos"
            className="w-full py-16 px-4 md:px-8 bg-[#ffffff] flex flex-col items-center"
        >
            <motion.h2
                className="text-4xl font-extrabold text-[#394446] mb-4"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Nuestra Colección
            </motion.h2>
            <motion.p
                className="text-lg text-[#49442E] mb-12 max-w-xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Dulces creaciones que te encantarán desde la primera mirada.
            </motion.p>

            <div className="max-w-6xl w-full flex flex-col gap-8">
                {/* Primera fila: 3 imágenes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {productImages.slice(0, 3).map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden bg-[#7B7B63]/10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-64 object-cover"
                            />
                            {/* Capa superpuesta con descripción personalizada */}
                            <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="text-white font-bold text-lg px-4 text-center">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Segunda fila: 2 imágenes centradas */}
                <div className="flex justify-center gap-8">
                    {productImages.slice(3).map((item, index) => (
                        <motion.div
                            key={index + 3} // Se suma 3 para mantener claves únicas
                            className="relative overflow-hidden bg-[#7B7B63]/10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-64 object-cover"
                            />
                            {/* Capa superpuesta con descripción personalizada */}
                            <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="text-white font-bold text-lg px-4 text-center">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
