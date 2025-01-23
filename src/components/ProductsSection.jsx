import React from "react";
import { motion } from "framer-motion";

const productImages = [
    { src: "/src/assets/img1.jpeg", alt: "Producto 1" },
    { src: "/src/assets/img2.jpeg", alt: "Producto 2" },
    { src: "/src/assets/img3.jpeg", alt: "Producto 3" },
    { src: "/src/assets/img4.jpeg", alt: "Producto 4" },
    { src: "/src/assets/img5.jpeg", alt: "Producto 5" },
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

            <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {productImages.map((item, index) => (
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
                        {/* Capa superpuesta con texto / frase genérica */}
                        <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white font-bold text-lg px-4 text-center">
                                Dulzura en cada detalle
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
