import bgImage from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home"
      className="relative py-24 md:py-28 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-200/20 px-4 py-2 rounded-full mb-6">
          <span className="bg-green-700 text-white font-semibold px-2 py-1 rounded text-xs">
            FJF
          </span>
          <span className="text-sm">
            Family Joy Food – Food Products & Land Leasing
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Premium Nigerian <br />
         Food & Agri Solutions
        </h1>

        {/* Description */}
        <p className="text-base md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
          Discover authentic yam and potato products made with traditional methods, plus agricultural land leasing opportunities. From farm to your table with love.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-green-800 hover:bg-green-900 px-6 py-3 rounded-md text-sm md:text-base font-medium transition">
            Shop Products →
          </button>

          <button className="border border-white px-6 py-3 rounded-md text-sm md:text-base font-medium hover:bg-white/10 transition">
            Lease Land
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

