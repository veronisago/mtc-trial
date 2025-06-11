import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';
import GoldButton from '../common/GoldButton';

const TestimonialSection = ({data}) => {
  return (
    <section className="w-full bg-lightGray py-20 flex items-center justify-center">
      <div className="relative w-full max-w-3xl flex items-center justify-center px-4">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 group">
          <img src={leftArrow} alt="Previous" className="w-9 h-9 group-hover:scale-110 transition" />
        </button>
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="uppercase text-gold tracking-widest text-xs font-normal mb-2 block">
            {data.eyebrow}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-darkGray mb-4">
          {data.title}
          </h3>
          <p className="text-mediumGray mb-2 max-w-xs md:max-w-xl">
          {data.copy}
          </p>
          <span className="text-mediumGray text-sm mb-6 block">{data.author}</span>
          <GoldButton>{data.cta.label}</GoldButton>
        </div>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 group">
          <img src={rightArrow} alt="Next" className="w-9 h-9 group-hover:scale-110 transition" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection; 