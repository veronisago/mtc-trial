const GoldButton = ({ children, className = "", ...props }) => (
  <button
    className={`bg-gold uppercase text-white tracking-widest font-light rounded-full px-8 py-3 text-xs hover:bg-gold/90 transition mb-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default GoldButton;
