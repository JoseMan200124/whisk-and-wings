// src/components/ComponenteAnimado.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ComponenteAnimado = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-white shadow-lg rounded-lg"
        >
            <h2 className="text-2xl font-semibold">Sección Animada</h2>
            <p className="mt-4">Este componente aparece con una animación suave al hacer scroll.</p>
        </motion.div>
    );
};

export default ComponenteAnimado;
