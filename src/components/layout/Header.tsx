import { useState } from "react";
import logoBlackSmall from "../../assets/images/logos/meerkat-logo-black-300.png";
import logoBlackLarge from "../../assets/images/logos/meerkat-logo-black-600.png";
import CartButton from "../cart/CartButton";
import FavouriteButton from "../favourites/FavouriteButton";
import CartModal from "../cart/CartModal";
import FavouritesModal from "../favourites/FavouritesModal";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);

  return (
    <header className="justify-between bg-white p-4 sm:px-12">
      <div className="flex"></div>
      <img
        src={logoBlackLarge}
        srcSet={`${logoBlackSmall} 300w, ${logoBlackLarge} 600w`}
        sizes="(max-width: 768px) 300px, 600px"
        alt="meerkat logo"
      />
      <div className="flex items-center gap-2 sm:gap-4">
        <nav>
          {" "}
          <a
            href="#"
            className="hover:bg-secondary-ultra-light rounded-sm bg-white p-2 font-medium transition duration-300 ease-in-out hover:font-semibold"
          >
            Contact
          </a>
        </nav>
        <CartButton onClick={() => setIsCartOpen(true)} />
        {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}

        <FavouriteButton onClick={() => setIsFavouritesOpen(true)} />
        {isFavouritesOpen && (
          <FavouritesModal onClose={() => setIsFavouritesOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
