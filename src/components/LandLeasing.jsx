import React from "react";
import { ChevronRight } from "lucide-react";

const LandLeasing = () => {
  return (
    <section
      id="land-lease"
      className="py-16 bg-gradient-to-r from-green-700 to-green-600"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Interested in Land Leasing?
        </h2>
        <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
          We offer agricultural land leasing opportunities for farming
          enthusiasts and businesses.
        </p>
        <a
          href="#land-lease"
          className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Learn More
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};

export default LandLeasing;
