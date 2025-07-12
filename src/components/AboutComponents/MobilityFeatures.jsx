const MobilityFeatures = () => {
  return (
    <section className="lg:px-[15%]">
      <article className="relative my-[10%] flex flex-col items-center lg:mt-[10%] lg:mb-[5%] lg:flex-row-reverse">
        <div>
          <img
            className="h-[311px] w-[311px] rounded-full sm:min-h-[445px] sm:min-w-[445px]"
            src="./assets/images/digital-era.jpg"
            alt="digital era"
          />
        </div>
        <div className="my-[10%] text-center sm:my-[2%]">
          <h2 className="mono mx-auto my-[5%] w-[80%] text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:my-[3%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:mx-0 lg:w-[60%] lg:text-left">
            Mobility for the digital era
          </h2>
          <p className="lexend mx-auto w-[80%] text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:text-left lg:mx-0 lg:w-[50%] lg:text-left">
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </p>
        </div>
        <img
          className="absolute top-[30%] right-[-30%] sm:top-[40%] sm:right-[-30%] lg:top-[60%] lg:right-[-22%]"
          src="./assets/patterns/left-upward-arrow.svg"
          alt="left upward arrow"
        />
        <img
          className="absolute right-[-40%] -z-2 hidden sm:block lg:right-[-45%]"
          src="./assets/patterns/circle.svg"
          alt="circle"
        />
      </article>
      <article className="relative my-[10%] flex flex-col items-center lg:my-[5%] lg:flex-row">
        <div className="lg:mr-[30%]">
          <img
            className="h-[311px] w-[311px] rounded-full sm:min-h-[445px] sm:min-w-[445px]"
            src="./assets/images/better-living.jpg"
            alt="better living"
          />
        </div>
        <div className="my-[10%] text-center sm:my-[2%]">
          <h2 className="mono mx-auto my-[5%] w-[80%] text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:my-[3%] sm:w-[60%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:mx-0 lg:w-full lg:text-left">
            Better urban living
          </h2>
          <p className="lexend mx-auto w-[80%] text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:text-left lg:mx-0 lg:w-full lg:text-left">
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </p>
        </div>
        <img
          className="absolute left-[-20%] sm:left-[-10%] lg:top-[0%] lg:left-[-22%]"
          src="./assets/patterns/right-arrow.svg"
          alt="left upward arrow"
        />
        <img
          className="absolute left-[-40%] -z-2 hidden sm:block lg:left-[-45%]"
          src="./assets/patterns/circle.svg"
          alt="circle"
        />
      </article>
    </section>
  );
};

export default MobilityFeatures;
