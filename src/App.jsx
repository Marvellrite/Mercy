import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./pages/Products";
import LandLeasing from "./components/LandLeasing";
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <Features />
      <Products />
      <AllProducts/>
      <LandLeasing />
      <Footer />
    </div>
  );
};

export default App;
