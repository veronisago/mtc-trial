import backKitchen from '../assets/blackKitchen.png';
import GoldButton from '../common/GoldButton';

const KitchenShowcase = ({data}) => {
  return (
    <section className="w-full flex flex-col mt-[0.5px] md:flex-row min-h-[400px]">
      <div className="md:w-1/2 w-full h-[300px] md:h-auto">
        <img
          src={backKitchen}
          alt="Handmade kitchen"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:w-1/2 w-full flex items-center md:justify-start justify-center bg-white py-20 px-8 md:px-16">
        <div className="max-w-md">
          <span className="uppercase text-gold tracking-widest text-xs font-normal mb-2 block">
            {data.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-5">
            {data.title}
          </h2>
          <p className="text-mediumGray mb-8 text-sm leading-relaxed">
            {data.copy}
          </p>
          <GoldButton>{data.cta.label}</GoldButton>
        </div>
      </div>
    </section>
  );
};

export default KitchenShowcase; 