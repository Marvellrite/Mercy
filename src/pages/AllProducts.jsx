import ProductCard from "../components/AllProductCard";
import yamChips from "../assets/yam-chips.jpg";
import potatoChips from "../assets/potato-chips.jpg";
import orangeChips from "../assets/orange-chips.jpg";
import yam from "../assets/yam.jpg";
import amala from "../assets/amala.jpg";
import potato from "../assets/potato.jpg"

const AllProducts = () => {
  const products = [
    {
      id: 1,
      name: "Yam Flour (Poundo Yam)",
      description: "Easily prepared swallow food made from processed yam.",
      price: "2,500",
      image: yam,
      available: false,
      free: false,
    },
    {
      id: 2,
      name: "Amala (Fermented Yam Flour)",
      description: "Made from dried fermented yam.",
      price: "2,000",
      image: amala,
      available: false,
      free: false,
    },
    {
      id: 3,
      name: "Yam Chips",
      description: "Thin-sliced dried yam chips.",
      price: "1,500",
      promo: "1 Free",
      image: yamChips,
      available: true,
      free: false,
    },
    {
      id: 4,
      name: "Purple Potato Chips",
      description: "Prepared from purple potatoes rich in antioxidants.",
      price: "1,800",
      promo: "1 Free",
      image: potatoChips,
      available: true,
      free: false,
    },
    {
      id: 5,
      name: "Orange Potato Chips",
      description: "Made from orange sweet potatoes.",
      price: "1,800",
      promo: "1 Free",
      image: orangeChips,
      available: true,
      free: false,
    },
    {
      id: 6,
      name: "Potato Flour",
      description: "A gluten-free flour made from dried potato.",
      price: "3,000",
      image: potato,
      available: false,
      free: false,
    },
  ];

  return (
    <section id="nutrition" className="bg-white min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black">
            All Our Products
          </h2>
          <p className="text-green-700 text-sm mt-2">
            Browse our complete range of premium Nigerian food products.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* VIEW ALL PRODUCTS BUTTON */}
<div className="mt-12 flex justify-center">
  <button className="bg-green-700 hover:bg-green-800 text-white px-10 py-3 rounded-lg text-sm font-semibold transition">
    View all Products →
  </button>
</div>
      </div>
    </section>
  );
};

export default AllProducts;
