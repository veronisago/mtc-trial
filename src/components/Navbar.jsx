import { useState } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/shopping-cart.png";

const Navbar = ({ data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { socialLinks, menuItems, orderButton } = data;

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 md:px-40 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/25 py-5 pb-7">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-white opacity-80">
           {socialLinks.map(link => (
              <a key={link.name} href={link.url} aria-label={link.name}>
                <i className={`fa-brands fa-${link.name} w-4 h-4 text-white`}></i>
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-6 uppercase text-xs tracking-widest font-light text-white">
          {menuItems.slice(0,2).map(item => (
              <a key={item.label} href={item.url} className="hover:text-gold transition">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6 uppercase font-light text-xs tracking-widest text-white">
          {menuItems.slice(2,4).map(item => (
              <a key={item.label} href={item.url} className="hover:text-gold transition">
                {item.label}
              </a>
            ))}
          </div>
          <button className="hidden md:flex ml-2 px-5 py-2 rounded-full border border-white text-white uppercase text-xs tracking-widest font-light hover:bg-gold/30 transition flex items-center">
            {orderButton.label} <img src={cart} alt="Shopping Cart" className="inline h-[13px] w-[14px] ml-2" />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark text-2xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl"></i>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="flex flex-col items-center space-y-6 py-6">
            <a href="#" className="uppercase text-white text-lg tracking-widest font-light hover:text-gold transition">
              Shop
            </a>
            <a href="#" className="uppercase text-white text-lg tracking-widest font-light hover:text-gold transition">
              Plan My Kitchen
            </a>
            <a href="#" className="uppercase text-white text-lg tracking-widest font-light hover:text-gold transition">
              About Us
            </a>
            <a href="#" className="uppercase text-white text-lg tracking-widest font-light hover:text-gold transition">
              Gallery
            </a>
            <button className="mt-4 px-6 py-3 rounded-full border border-white text-white uppercase text-sm tracking-widest font-light hover:bg-gold/30 transition flex items-center">
              My Order
              <img src={cart} alt="Shopping Cart" className="inline h-[13px] w-[14px] ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
