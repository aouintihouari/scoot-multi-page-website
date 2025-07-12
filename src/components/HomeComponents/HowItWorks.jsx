const HowItWorks = () => {
  return (
    <section className="relative mt-[50%] flex flex-col items-center text-center sm:mx-[10%] sm:mt-[30%] sm:justify-center lg:mt-[5%] lg:flex-row lg:gap-[5%]">
      <div className="absolute top-[-30%] left-[5vw] -z-2 hidden h-[110%] w-4 bg-[#E5ECF4] sm:block lg:top-[21vh] lg:left-[-20%] lg:h-4 lg:w-[90%]"></div>
      <article className="flex flex-col sm:flex-row sm:gap-[10%] sm:text-left lg:mt-[10%] lg:flex-col">
        <img
          className="mx-auto h-[56px] w-[56px] sm:h-[96px] sm:w-[96px] sm:self-center lg:mx-0 lg:self-start"
          src="./assets/icons/locate.svg"
          alt="locate"
        />
        <div>
          <h2 className="mono my-5 text-[20px] font-bold text-[#495567]">
            Locate with app
          </h2>
          <p className="lexend mx-auto w-[80%] text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:w-full lg:mx-0 lg:w-[80%]">
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
      </article>
      <article className="mt-[10%] flex flex-col sm:flex-row sm:gap-[10%] sm:text-left lg:flex-col">
        <img
          className="mx-auto h-[56px] w-[56px] sm:h-[96px] sm:w-[96px] sm:self-center lg:mx-0 lg:self-start"
          src="./assets/icons/scooter.svg"
          alt="scooter"
        />
        <div>
          <h2 className="mono my-5 text-[20px] font-bold text-[#495567]">
            Pick your scooter
          </h2>
          <p className="lexend mx-auto w-[80%] text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:w-full lg:mx-0 lg:w-[80%]">
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </div>
      </article>
      <article className="mt-[10%] flex flex-col sm:flex-row sm:gap-[10%] sm:text-left lg:flex-col">
        <img
          className="mx-auto h-[56px] w-[56px] sm:h-[96px] sm:w-[96px] sm:self-center lg:mx-0 lg:self-start"
          src="./assets/icons/ride.svg"
          alt="ride"
        />
        <div>
          <h2 className="mono my-5 text-[20px] font-bold text-[#495567]">
            Enjoy the ride
          </h2>
          <p className="lexend mx-auto w-[80%] text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:w-full lg:mx-0 lg:w-[80%]">
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </div>
      </article>
    </section>
  );
};

export default HowItWorks;
