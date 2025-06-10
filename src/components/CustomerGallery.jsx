import grayKitchen from '../assets/grayKitchen.png';
import blueKitchen from '../assets/blueKitchen.png';
import whiteKitchen from '../assets/whiteKitchen.png';
import redKitchen from '../assets/redKitchen.png';

const CustomerGallery = () => {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-darkGray mb-10 text-center">Customer Gallery</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <img src={grayKitchen} alt="Gray Kitchen" className="w-56 h-56 object-cover rounded shadow" />
        <img src={blueKitchen} alt="Blue Kitchen" className="w-56 h-56 object-cover rounded shadow" />
        <img src={whiteKitchen} alt="White Kitchen" className="w-56 h-56 object-cover rounded shadow" />
        <img src={redKitchen} alt="Red Kitchen" className="w-56 h-56 object-cover rounded shadow" />
      </div>
      <button className="bg-gold text-white rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:bg-gold/90 transition">
        View More
      </button>
    </section>
  );
};

export default CustomerGallery; 