import grayKitchen from '../assets/grayKitchen.png';
import blueKitchen from '../assets/blueKitchen.png';
import whiteKitchen from '../assets/whiteKitchen.png';
import redKitchen from '../assets/redKitchen.png';
import GoldButton from '../common/GoldButton';

const CustomerGallery = ({data}) => {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-darkGray mb-10 text-center">{data.title}</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <img src={redKitchen} alt="Red Kitchen" className="w-56 h-56 object-cover shadow" />
        <img src={grayKitchen} alt="Gray Kitchen" className="w-56 h-56 object-cover shadow" />
        <img src={blueKitchen} alt="Blue Kitchen" className="w-56 h-56 object-cover shadow" />
        <img src={whiteKitchen} alt="White Kitchen" className="w-56 h-56 object-cover shadow" />
      </div>
      <GoldButton>{data.cta.label}</GoldButton>
    </section>
  );
};

export default CustomerGallery; 