import {
  FiShoppingCart,
  FiShoppingBag,
  FiXCircle,
  FiInfo,
} from "react-icons/fi";

const AllProductCard = ({
  image,
  name,
  description,
  price,
  promo,
  available = true,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
      
      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover"
        />

        {/* PROMO BADGE */}
        {promo && (
          <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <FiShoppingBag size={14} />
            {promo}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-green-900">
            {name}
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>

        {/* PRICE + FREE */}
        <div className="flex justify-between items-center">
          <span className="text-green-700 font-bold text-lg">
            ₦{price}
          </span>

          <span className="text-gray-500 text-sm">
            {promo ? "First 1 free" : "0"}
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-1 border border-green-600 text-green-700 py-2 rounded-lg text-sm hover:bg-green-800 hover:text-white transition">
            <FiInfo size={15} />
            Details
          </button>

          {available ? (
            <button className="flex-1 flex items-center justify-center gap-1 bg-green-800 text-white py-2 rounded-lg text-sm hover:bg-green-900 transition">
              <FiShoppingCart size={15} />
              Order Now
            </button>
          ) : (
            <button
              disabled
              className="flex-1 flex items-center justify-center gap-1 bg-green-50 text-gray-600 py-2 rounded-lg text-sm cursor-not-allowed"
            >
              <FiXCircle size={15} />
              Not Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;


