import React from "react";
import { motion } from "framer-motion";

const Florecen = () => {
    return (
        <section
            id="florecen"
            className="relative w-full py-16 px-4 md:px-8 bg-[#f9f4ed] flex flex-col items-center overflow-visible"
        >
            <motion.div
                className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Columna de texto */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#394446] leading-tight">
                        Ganadores de “Emprendedores que Florecen” 2024
                    </h2>
                    <p className="text-lg text-[#49442E] leading-relaxed">
                        Nos complace compartir que <strong>Whisk & Wings</strong> fue galardonado
                        en el concurso <em>“Emprendedores que Florecen”</em>, una iniciativa
                        organizada por <strong>Banco Industrial</strong> y el{" "}
                        <strong>Festival de las Flores en la Antigua</strong>. Este reconocimiento
                        enfatiza la relevancia, sostenibilidad y capacidad de transformación de los
                        emprendimientos guatemaltecos.
                    </p>
                    <p className="text-lg text-[#49442E] leading-relaxed">
                        El <strong>Festival de las Flores</strong>, reconocido por celebrar la
                        riqueza cultural y natural de Guatemala, presentó este concurso para
                        impulsar el crecimiento y el impacto positivo de los emprendedores en el
                        desarrollo integral del país.
                    </p>
                    <p className="text-lg text-[#49442E] leading-relaxed">
                        ¡Gracias a todos por su apoyo! Seguimos comprometidos en crear dulces
                        experiencias que florecen en cada bocado.
                    </p>
                </div>

                {/* Columna de imágenes en estilo collage */}
                <div className="w-full md:w-1/2 flex justify-center relative overflow-visible">
                    {/* Contenedor relativo para acomodar ambas imágenes sin recortar */}
                    <div className="relative w-full max-w-sm h-auto pb-16 md:pb-10 overflow-visible">
                        {/* Imagen principal */}
                        <div className="relative z-10 w-full h-64 md:h-96 bg-gray-100 rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/public/assets/emprendedores-ganadores.jpeg"
                                alt="Ganadores de Emprendedores que Florecen"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Segunda imagen: más grande y sobrepasando la sección */}
                        <div
                            className={`
                absolute
                right-4
                bottom-[-4rem]        /* en móviles */
                md:bottom-[-10rem]    /* en pantallas medianas y grandes */
                w-44 h-44
                sm:w-56 sm:h-56
                md:w-72 md:h-72
                bg-white
                rounded-lg
                shadow-xl
                rotate-2
                z-20
                overflow-hidden
              `}
                        >
                            <img
                                src="/public/assets/emprendedores-ganadores2.jpg"
                                alt="Otro ángulo de los ganadores"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Florecen;
