import Button from "../UI/Button";

const Hero = () => {
  return (
    <section className="relative">
      <picture className="absolute top-0 left-0 w-screen">
        <source
          srcSet="./assets/images/home-hero-desktop.jpg"
          media="(min-width:1024px)"
        />
        <source
          srcSet="./assets/images/home-hero-tablet.jpg"
          media="(min-width:769px)"
        />
        <source
          srcSet="./assets/images/home-hero-mobile.jpg"
          media="(max-width:768px)"
        />
        <img
          className="absolute top-0 left-0 w-screen"
          src="./assets/images/home-hero-mobile.jpg"
          alt="hero"
        />
      </picture>
      <article className="relative flex h-full flex-col items-center px-[10%] py-[24%] text-center sm:py-[15%] lg:items-start lg:px-[15%] lg:py-[10%] lg:text-left">
        <h1 className="mono mb-[10%] w-[80%] text-[40px] leading-[40px] font-bold tracking-[-1.79px] text-white sm:text-[56px] sm:leading-[56px] sm:tracking-[-2.5px] lg:mb-10 lg:w-[50%]">
          Scooter sharing made simple
        </h1>
        <p className="lexend mb-[10%] w-[80%] text-[15px] leading-[25px] tracking-[0] text-white lg:ml-[5%] lg:w-[30%]">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <div className="lg:mt-[-5rem] lg:ml-[5%]">
          <Button content="Get Scootin" />
        </div>
        <img
          className="absolute top-[40vh] left-0 hidden lg:block"
          src="./assets/patterns/line.svg"
          alt="line"
        />
        <img
          className="absolute bottom-[-5vh] left-[-65%] sm:-bottom-[3vh] sm:left-[-10%] lg:top-[40vh] lg:left-[44%]"
          src="./assets/patterns/right-arrow.svg"
          alt="right arrow"
        />
        <img
          className="absolute right-[-4%] bottom-[10%] hidden sm:-bottom-[3vh] sm:block lg:right-[-2%] lg:bottom-[25vh]"
          src="./assets/patterns/white-circles.svg"
          alt="white circles"
        />
      </article>
    </section>
  );
};

export default Hero;
