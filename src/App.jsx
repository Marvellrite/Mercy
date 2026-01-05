import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OrderCTA from "./components/OrderCta";
import Products from "./components/Products";
import LandLeasing from "./components/LandLeasing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <Features />
      <OrderCTA />
      <Products />
      <LandLeasing />
      <Footer />
    </div>
  );
};

export default App;
