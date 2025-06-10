import heroImage from "../assets/heroImage2x.png";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat -mt-20 flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <span className="uppercase tracking-widest text-lightGray text-xs md:text-sm mb-4 text-center font-light">
          DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY
        </span>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 leading-tight max-w-2xl">
          Bespoke & made to measure
          <br />
          handmade kitchen design
        </h1>
        <button className="bg-gold text-white tracking-widest font-light rounded-full px-8 py-3 text-sm  shadow-lg hover:bg-gold/90 transition mb-2">
          ORDER NOW
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <span className="h-1 w-12 rounded bg-gold"></span>
        <span className="h-1 w-12 rounded bg-white"></span>
        <span className="h-1 w-12 rounded bg-white"></span>
      </div>
    </div>
  );
};

export default Hero;
