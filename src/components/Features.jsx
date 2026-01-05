import React from "react";
import { Leaf, Heart, Truck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description:
        "All products are made from natural ingredients with no preservatives.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nutritious",
      description:
        "Rich in vitamins, minerals, and essential nutrients for your health.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery to your doorstep via WhatsApp ordering.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
