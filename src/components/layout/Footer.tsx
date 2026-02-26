import logoWhiteSmall from "../../assets/images/logos/meerkat-logo-white-300.png";
import logoWhiteLarge from "../../assets/images/logos/meerkat-logo-white-600.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-dark px-4 py-8 sm:px-12">
      <div className="flex flex-col text-white"></div>
      <img
        src={logoWhiteLarge}
        srcSet={`${logoWhiteSmall} 300w, ${logoWhiteLarge} 600w`}
        sizes="(max-width: 768px) 300px, 
             (max-width: 1280px) 600px"
        alt="meerkat logo"
      />
      <p className="text-sm">Copyright © 2026 meerkat</p>
    </footer>
  );
};

export default Footer;
