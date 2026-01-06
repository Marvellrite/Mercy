import {
  FiShoppingCart,
  FiShoppingBag,
  FiInfo,
} from "react-icons/fi";

const ProductCard = ({ image, name, description, price, promo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden ">
      
      {/* Image section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover"
        />

        {/* Promo badge */}
        {promo && (
          <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <FiShoppingBag size={14} />
            {promo}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-green-900">
            {name}
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center">
          <span className="text-green-700 font-bold text-lg">
            ₦{price}
          </span>
          <span className="text-gray-500 text-sm">
            First 1 free
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-1 border hover:text-white border-green-600 text-green-700 py-2 rounded-lg text-sm hover:bg-green-800 transition">
            <FiInfo size={15} />
            Details
          </button>

          <button className="flex-1 flex items-center justify-center gap-1 bg-green-700 text-white py-2 rounded-lg text-sm hover:bg-green-800 transition">
            <FiShoppingCart size={15} />
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

