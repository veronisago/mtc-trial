import heroImage from "../assets/heroImage2x.png";
import logo from "../assets/logo.svg";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = ({ data }) => {
  return (
    <footer
      className="relative w-full text-white pt-12 pb-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center w-full mb-8">
            <div className="flex-1 border-t border-white border-opacity-20"></div>
            <img src={logo} alt="Logo" className="h-8 mx-6" />
            <div className="flex-1 border-t border-white border-opacity-20"></div>
          </div>
          <div className="w-[70%] flex flex-col md:flex-row justify-center text-center md:text-left mb-8 gap-8">
          {data.columns.map((col, i) => (
            <div key={i} className="flex-1">
              <h4 className="font-bold mb-5 text-base">{col.heading}</h4>

              {col.links && (
                <ul className="space-y-1 text-sm text-white/80">
                  {col.links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-gold transition uppercase font-light tracking-widest text-xs"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {col.social && (
                <div className="flex space-x-4 justify-center md:justify-start">
                  {col.social.map(name => {
                    let src;
                    if (name === 'facebook')  src = facebookIcon;
                    else if (name === 'twitter')   src = twitterIcon;
                    else if (name === 'instagram') src = instagramIcon;

                    return (
                      <a
                        key={name}
                        href="#"
                        aria-label={name}
                        className="transition hover:opacity-75"
                      >
                        <img src={src} alt={name} className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
          <div className="text-xs text-white/40 mb-8 leading-loose text-center">
            {data.copyright.first}
            <br />
            {data.copyright.second}
          </div>
          <hr className="border-t border-white border-opacity-20 mb-6 w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
