import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';

const TestimonialSection = () => {
  return (
    <section className="w-full bg-lightGray py-16 flex items-center justify-center">
      <div className="relative w-full max-w-3xl flex items-center justify-center px-4">
        {/* Flecha izquierda */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 group">
          <img src={leftArrow} alt="Previous" className="w-8 h-8 group-hover:scale-110 transition" />
        </button>
        {/* Contenido principal */}
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="uppercase text-gold tracking-widest text-xs font-semibold mb-2 block">
            What our customers say
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-darkGray mb-4">
            Over 35 years experience designing handmade kitchens
          </h3>
          <p className="text-mediumGray mb-2 max-w-xl">
            Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.
          </p>
          <span className="text-mediumGray text-sm mb-6 block">Jane, Dundee</span>
          <button className="bg-gold text-white rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:bg-gold/90 transition">
            Frequently Asked Questions
          </button>
        </div>
        {/* Flecha derecha */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 group">
          <img src={rightArrow} alt="Next" className="w-8 h-8 group-hover:scale-110 transition" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection; 