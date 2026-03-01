import HeroImageMobile from "../../assets/images/hero-image-750.webp";
import HeroImageDesktop from "../../assets/images/hero-image-2000.webp";

const Hero = () => {
  return (
    <section className="relative h-100 w-full overflow-hidden bg-cover md:h-137">
      <picture>
        <source media="(min-width: 768px)" srcSet={HeroImageDesktop} />
        <img
          src={HeroImageMobile}
          alt="Young woman with fashionable clothing and accessories in front of a pink wall."
          className="absolute inset-0 h-full w-full object-cover sm:rounded"
        />
      </picture>
      <div className="relative flex h-full w-[50%] flex-col justify-center gap-4 px-4 text-white md:px-12">
        <div>
          <p className="text-xl font-light uppercase md:text-3xl">New Season</p>
          <h1 className="text-5xl font-black uppercase md:text-[96px]">
            Favourites
          </h1>
        </div>
        <p className="text-lg font-light md:text-2xl">
          Discover this season’s favourites from top brands all across the
          world.
        </p>
        <a
          href="#products-section"
          className="group flex items-center gap-2 text-lg font-semibold transition duration-500 ease-in-out hover:font-bold md:text-2xl"
        >
          Shop Now
          <span className="iconify-[material-symbols--arrow-right-alt] transition-transform duration-500 ease-in-out group-hover:rotate-90"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
