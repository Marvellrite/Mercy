import React from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mb-6 shadow-lg">
            FJF
          </div>
          <p className="text-green-600 font-medium mb-4">
            Family Joy Food - Food Products & Agricultural Land Leasing
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Nigerian Food & Agri Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Discover authentic yam and potato products made with traditional
            methods, plus agricultural land leasing opportunities. From farm to
            your table with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-flex items-center justify-center"
            >
              Shop Products
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#land-lease"
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-flex items-center justify-center"
            >
              Lease Land
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
