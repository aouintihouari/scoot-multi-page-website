const OurValues = ({ content }) => {
  return (
    <section className="my-[10%] flex w-full flex-col items-center sm:mt-[15%] sm:mb-[5%] lg:my-[8%]">
      <h3 className="mono mb-[5%] text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:mb-[10%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:mb-[5%]">
        {content}
      </h3>
      <div className="lg:flex">
        <article className="flex flex-col items-center">
          <div className="relative">
            <img
              className="h-[240px] w-[240px] rounded-full"
              src="./assets/images/our-tech.jpg"
              alt="our tech"
            />
            <span className="mono absolute bottom-[-18%] left-[30%] flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#FCB72B] text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567]">
              01
            </span>
          </div>
          <div className="my-[17%] sm:my-[10%]">
            <h4 className="mono mx-auto mb-[5%] w-[80%] text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:mb-[2%]">
              Our tech
            </h4>
            <p className="lexend mx-auto w-[78%] text-center text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:w-[60%] lg:w-[60%]">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center">
          <div className="relative">
            <img
              className="h-[240px] w-[240px] rounded-full"
              src="./assets/images/our-integrity.jpg"
              alt="our integrity"
            />
            <span className="mono absolute bottom-[-18%] left-[30%] flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#FCB72B] text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567]">
              02
            </span>
          </div>
          <div className="my-[17%] sm:my-[10%]">
            <h4 className="mono mx-auto mb-[5%] w-[80%] text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:mb-[2%]">
              Our integrity
            </h4>
            <p className="lexend mx-auto w-[78%] text-center text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:w-[60%] lg:w-[60%]">
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center">
          <div className="relative">
            <img
              className="h-[240px] w-[240px] rounded-full"
              src="./assets/images/our-community.jpg"
              alt="our community"
            />
            <span className="mono absolute bottom-[-18%] left-[30%] flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#FCB72B] text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567]">
              03
            </span>
          </div>
          <div className="my-[17%] sm:my-[10%]">
            <h4 className="mono mx-auto mb-[5%] w-[80%] text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:mb-[2%]">
              Our community
            </h4>
            <p className="lexend mx-auto w-[78%] text-center text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:w-[60%] lg:w-[60%]">
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurValues;
