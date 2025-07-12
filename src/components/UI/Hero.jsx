const Hero = ({ title, mobile, tablet, desktop }) => {
  return (
    <section className="relative">
      <picture>
        <source srcSet={desktop} media="(min-width:1024px)" />
        <source srcSet={tablet} media="(min-width:769px)" />
        <source srcSet={mobile} media="(max-width:768px)" />
        <img className="h-auto w-full" src={mobile} alt="hero" />
      </picture>
      <div className="absolute inset-0 flex items-center justify-center text-white sm:justify-start sm:pl-[15%]">
        <h1 className="mono text-[40px] leading-[40px] font-bold tracking-[-1.79px] sm:text-[56px] sm:leading-[56px] sm:tracking-[-2.5px]">
          {title}
        </h1>
        <img
          className="hidden sm:absolute sm:top-[40%] sm:right-[-4%] sm:block lg:right-[-2%]"
          src="./assets/patterns/white-circles.svg"
          alt="white circles"
        />
      </div>
    </section>
  );
};

export default Hero;
