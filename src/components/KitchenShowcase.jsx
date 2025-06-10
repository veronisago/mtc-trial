import backKitchen from '../assets/blackKitchen.png';

const KitchenShowcase = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[400px]">
      {/* Imagen a la izquierda */}
      <div className="md:w-1/2 w-full h-[300px] md:h-auto">
        <img
          src={backKitchen}
          alt="Handmade kitchen"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Contenido a la derecha */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white py-12 px-8">
        <div className="max-w-md">
          <span className="uppercase text-gold tracking-widest text-xs font-semibold mb-2 block">
            Quality Craftmanship from build to delivery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-4">
            Discover the beauty of a handmade kitchen
          </h2>
          <p className="text-mediumGray mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget elit sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultricies.
          </p>
          <button className="bg-gold text-white rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:bg-gold/90 transition">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default KitchenShowcase; 