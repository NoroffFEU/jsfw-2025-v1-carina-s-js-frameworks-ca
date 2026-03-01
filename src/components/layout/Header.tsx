import { useState } from "react";
import logoBlackSmall from "../../assets/images/logos/meerkat-logo-black-300.png";
import logoBlackLarge from "../../assets/images/logos/meerkat-logo-black-600.png";
import CartButton from "../cart/CartButton";
import FavouriteButton from "../favourites/FavouriteButton";
import CartModal from "../cart/CartModal";
import FavouritesModal from "../favourites/FavouritesModal";
import SearchBar from "../search/SearchBar";
import SearchResultsModal from "../search/SearchResults";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto mt-0 flex w-full max-w-7xl flex-col justify-center gap-2 bg-white p-4 sm:px-12 xl:px-0">
      <div className="flex items-center justify-between">
        <a href="/" aria-label="Home">
          <img
            src={logoBlackLarge}
            srcSet={`${logoBlackSmall} 300w, ${logoBlackLarge} 600w`}
            sizes="(max-width: 767px) 85px, (min-width: 768px) 142px"
            alt="meerkat"
          />
        </a>
        <div className="hidden flex-1 sm:flex">
          <SearchBar onClick={() => setIsSearchResultsOpen(true)} />
          {isSearchResultsOpen && (
            <SearchResultsModal onClose={() => setIsSearchResultsOpen(false)} />
          )}
        </div>
        <div className="flex items-center">
          <nav>
            <a
              href="/contact"
              className="sm:hover:bg-secondary-ultra-light rounded-sm bg-white p-2 text-sm font-medium transition duration-500 ease-in-out sm:text-base"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <CartButton onClick={() => setIsCartOpen(true)} />
            {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}

            <FavouriteButton onClick={() => setIsFavouritesOpen(true)} />
            {isFavouritesOpen && (
              <FavouritesModal onClose={() => setIsFavouritesOpen(false)} />
            )}
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <SearchBar onClick={() => setIsSearchResultsOpen(true)} />
        {isSearchResultsOpen && (
          <SearchResultsModal onClose={() => setIsSearchResultsOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
