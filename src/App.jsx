import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="w-screen h-screen flex flex-col bg-[#2E2E2E] overflow-x-hidden">
            <Navbar />
            <Hero />
        </div>
    );
}

export default App;
