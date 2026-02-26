import logoWhiteSmall from "../../assets/images/logos/meerkat-logo-white-300.png";
import logoWhiteLarge from "../../assets/images/logos/meerkat-logo-white-600.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-dark px-4 py-8 sm:px-12">
      <div className="flex flex-col gap-4 text-white">
        <div>
          {" "}
          <img
            src={logoWhiteLarge}
            srcSet={`${logoWhiteSmall} 300w, ${logoWhiteLarge} 600w`}
            sizes="(max-width: 767px) 85px, (min-width: 768px) 142px"
            alt="meerkat logo"
          />
        </div>

        <p className="text-xs sm:text-sm">Copyright © 2026 meerkat</p>
      </div>
    </footer>
  );
};

export default Footer;
