import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                FJF
              </div>
              <span className="font-semibold text-white">Family Joy Food</span>
            </div>
            <p className="text-sm">
              Premium Nigerian food products and agricultural land leasing
              services. Growing together with Family Joy Food Ventures.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="hover:text-green-400 transition">
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#nutrition"
                  className="hover:text-green-400 transition"
                >
                  Nutrition Info
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Land */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services & Land</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#land-lease"
                  className="hover:text-green-400 transition"
                >
                  Agricultural Land Leasing
                </a>
              </li>
              <li>
                <a
                  href="#investors"
                  className="hover:text-green-400 transition"
                >
                  Connect with Investors
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-green-400 transition">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Lagos, Nigeria</li>
              <li>
                <a
                  href="mailto:info@familyjoyfoods.com"
                  className="hover:text-green-400 transition"
                >
                  info@familyjoyfoods.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 Family Joy Food Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
