import ProductCard from "../components/ProductCard";
import yamChips from "../assets/yam-chips.jpg";
import potatoChips from "../assets/potato-chips.jpg"
import casavaChips from "../assets/orange-chips.jpg"

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Yam Chips",
      description: "Thin-sliced dried yam chips.",
      price: "1,500",
      promo: "1 Free",
      image: yamChips,
    },
    {
      id: 2,
      name: "Potato Chips",
      description: "Crunchy sun-dried potato chips.",
      price: "1,800",
      promo: "1 Free",
      image: potatoChips,
    },
    {
      id: 3,
      name: "Cassava Chips",
      description: "Naturally processed cassava slices.",
      price: "1,800",
      promo: "1 Free",
      image: casavaChips,
    },
  ];

  return (
    <section  id="products" className="bg-green-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
       {/* AVAILABLE FOR ORDER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-900">
            Available for Order
          </h2>
          <p className="text-green-700 text-sm mt-2">
            Our premium chip products are ready for delivery. <br />
            Place your order now!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
