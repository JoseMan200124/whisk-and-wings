import React, { useState } from "react";
import { motion } from "framer-motion";

const Contactanos = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Gracias, ${formData.nombre}. Hemos recibido tu mensaje: "${formData.mensaje}". Pronto te responderemos a ${formData.correo}.`
        );
        // Reiniciar formulario
        setFormData({ nombre: "", correo: "", mensaje: "" });
    };

    return (
        <section
            id="contactanos"
            className="w-full py-16 px-4 md:px-8 bg-white flex flex-col items-center"
        >
            <motion.h2
                className="text-4xl font-extrabold text-[#394446] mb-4"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Contáctanos
            </motion.h2>
            <motion.p
                className="text-lg text-[#49442E] mb-12 text-center max-w-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                ¿Tienes alguna pregunta o deseas un pedido especial? Envíanos tu mensaje y
                estaremos encantados de atenderte.
            </motion.p>

            <motion.form
                className="max-w-2xl w-full bg-[#7B7B63]/10 p-6 rounded-md shadow-md"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="mb-4">
                    <label htmlFor="nombre" className="block mb-1 font-semibold text-[#394446]">
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block mb-1 font-semibold text-[#394446]">
                        Correo electrónico
                    </label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                        placeholder="nombre@correo.com"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="mensaje" className="block mb-1 font-semibold text-[#394446]">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none resize-none"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-[#394446] text-white px-6 py-2 rounded hover:bg-[#49442E] transition-colors"
                    >
                        Enviar
                    </button>
                </div>
            </motion.form>
        </section>
    );
};

export default Contactanos;
