import React from "react";
import { ChevronRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Yam Chips",
      description:
        "Crispy, naturally-made yam chips with authentic Nigerian taste",
      image:
        "https://images.unsplash.com/photo-1600952841320-db92ec8b9ae1?w=400&h=300&fit=crop",
      available: true,
    },
    {
      id: 2,
      name: "Sweet Potato Chips",
      description: "Delicious sweet potato chips packed with nutrients",
      image:
        "https://images.unsplash.com/photo-1610416814842-0b8d7b4ff4d8?w=400&h=300&fit=crop",
      available: true,
    },
    {
      id: 3,
      name: "Mixed Chips Pack",
      description: "A perfect blend of yam and sweet potato chips",
      image:
        "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop",
      available: true,
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Our Products
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our complete range of premium Nigerian food products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {product.available && (
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Available Now
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#products"
            className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition"
          >
            View All Products
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
