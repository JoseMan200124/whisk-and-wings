import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";
import Nosotros from "./components/Nosotros";
import Florecen from "./components/Florecen";
import Contactanos from "./components/Contactanos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-[#ffffff]">
            {/* Barra de navegación */}
            <Navbar />

            {/* Sección Hero (Inicio) */}
            <Hero />

            {/* Sección Productos */}
            <ProductsSection />

            {/* Sección Nosotros (con fondo fijo/parallax) */}
            <Nosotros />

            {/* Sección de "Emprendedores que Florecen" */}
            <Florecen />

            {/* Sección Contáctanos */}
            <Contactanos />

            {/* Banner */}
            <Banner />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
