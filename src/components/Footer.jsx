import heroImage from '../assets/heroImage2x.png';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white pt-12 pb-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Logo y columnas */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-10 mb-8" />
          <hr className="w-full border-t border-white border-opacity-20 mb-8" />
          <div className="w-full flex flex-col md:flex-row justify-between text-center md:text-left mb-8 gap-8">
            {/* About */}
            <div className="flex-1">
              <h4 className="uppercase font-bold mb-3 tracking-widest text-base">About</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li><a href="#" className="hover:text-gold transition">Shop</a></li>
                <li><a href="#" className="hover:text-gold transition">Plan My Kitchen</a></li>
                <li><a href="#" className="hover:text-gold transition">About Us</a></li>
                <li><a href="#" className="hover:text-gold transition">Gallery</a></li>
              </ul>
            </div>
            {/* Service */}
            <div className="flex-1">
              <h4 className="uppercase font-bold mb-3 tracking-widest text-base">Service</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li><a href="#" className="hover:text-gold transition">FAQ</a></li>
                <li><a href="#" className="hover:text-gold transition">Contact</a></li>
                <li><a href="#" className="hover:text-gold transition">How to Buy</a></li>
                <li><a href="#" className="hover:text-gold transition">Downloads</a></li>
              </ul>
            </div>
            {/* Info */}
            <div className="flex-1">
              <h4 className="uppercase font-bold mb-3 tracking-widest text-base">Info</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li><a href="#" className="hover:text-gold transition">Delivery</a></li>
                <li><a href="#" className="hover:text-gold transition">Terms</a></li>
                <li><a href="#" className="hover:text-gold transition">Privacy</a></li>
              </ul>
            </div>
            {/* Follow */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h4 className="uppercase font-bold mb-3 tracking-widest text-base">Follow</h4>
              <div className="flex space-x-4 mb-2">
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f text-xl hover:text-gold transition"></i></a>
                <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter text-xl hover:text-gold transition"></i></a>
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram text-xl hover:text-gold transition"></i></a>
              </div>
            </div>
          </div>
          <hr className="w-full border-t border-white border-opacity-20 mb-6" />
          {/* Copyright */}
          <div className="text-xs text-white/60 mb-1">
            Copyright © Mike Home Kitchens 2019 - All rights reserved.<br />
            Responsive website design. Development & Hosting by mhs.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 