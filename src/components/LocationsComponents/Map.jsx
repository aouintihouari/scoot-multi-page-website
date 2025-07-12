const Map = () => {
  return (
    <section className="relative mx-auto px-[5%] py-[15%] sm:px-[5%] sm:py-[8%] lg:w-full lg:px-[10%] lg:py-[5%]">
      <picture>
        <source
          srcSet="./assets/images/world-map-desktop.png"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="./assets/images/world-map-tablet.png"
          media="(min-width: 769px)"
        />
        <source
          srcSet="./assets/images/world-map-mobile.png"
          media="(max-width: 768px)"
        />
        <img
          className="mb-10 lg:w-full"
          src="./assets/images/world-map-mobile.png"
          alt="world map"
        />
      </picture>
      <div className="mono mb-3 bg-[rgba(252,183,43,0.3)] p-4 text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:absolute sm:top-[19%] sm:left-[19%] sm:flex sm:h-[40px] sm:w-[120px] sm:items-center sm:justify-center sm:bg-[#FCB72B] sm:text-[13px] sm:leading-[28px] sm:tracking-[-0.58px] sm:after:absolute sm:after:top-full sm:after:left-1/2 sm:after:-translate-x-1/2 sm:after:border-t-[8px] sm:after:border-r-[8px] sm:after:border-l-[8px] sm:after:border-t-[#FCB72B] sm:after:border-r-transparent sm:after:border-l-transparent sm:after:content-[''] lg:top-[21%] lg:left-[22.5%] lg:h-[88px] lg:w-[189px] lg:text-[24px] lg:leading-[28px] lg:tracking-[-1.07px] lg:after:border-t-[16px] lg:after:border-r-[16px] lg:after:border-l-[16px]">
        New York
      </div>
      <div className="mono mb-3 bg-[rgba(252,183,43,0.3)] p-4 text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:absolute sm:top-[15.2%] sm:left-[35.4%] sm:flex sm:h-[40px] sm:w-[120px] sm:items-center sm:justify-center sm:bg-[#FCB72B] sm:text-[13px] sm:leading-[28px] sm:tracking-[-0.58px] sm:after:absolute sm:after:top-full sm:after:left-1/2 sm:after:-translate-x-1/2 sm:after:border-t-[8px] sm:after:border-r-[8px] sm:after:border-l-[8px] sm:after:border-t-[#FCB72B] sm:after:border-r-transparent sm:after:border-l-transparent sm:after:content-[''] lg:top-[14%] lg:left-[41%] lg:h-[88px] lg:w-[189px] lg:text-[24px] lg:leading-[28px] lg:tracking-[-1.07px] lg:after:border-t-[16px] lg:after:border-r-[16px] lg:after:border-l-[16px]">
        London
      </div>
      <div className="mono mb-3 bg-[rgba(252,183,43,0.3)] p-4 text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:absolute sm:top-[44%] sm:left-[64%] sm:flex sm:h-[40px] sm:w-[120px] sm:items-center sm:justify-center sm:bg-[#FCB72B] sm:text-[13px] sm:leading-[28px] sm:tracking-[-0.58px] sm:after:absolute sm:after:top-full sm:after:left-1/2 sm:after:-translate-x-1/2 sm:after:border-t-[8px] sm:after:border-r-[8px] sm:after:border-l-[8px] sm:after:border-t-[#FCB72B] sm:after:border-r-transparent sm:after:border-l-transparent sm:after:content-[''] lg:top-[45.2%] lg:left-[67%] lg:h-[88px] lg:w-[189px] lg:text-[24px] lg:leading-[28px] lg:tracking-[-1.07px] lg:after:border-t-[16px] lg:after:border-r-[16px] lg:after:border-l-[16px]">
        Jakarta
      </div>
      <div className="mono mb-3 bg-[rgba(252,183,43,0.3)] p-4 text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:absolute sm:top-[23%] sm:left-[71%] sm:flex sm:h-[40px] sm:w-[120px] sm:items-center sm:justify-center sm:bg-[#FCB72B] sm:text-[13px] sm:leading-[28px] sm:tracking-[-0.58px] sm:after:absolute sm:after:top-full sm:after:left-1/2 sm:after:-translate-x-1/2 sm:after:border-t-[8px] sm:after:border-r-[8px] sm:after:border-l-[8px] sm:after:border-t-[#FCB72B] sm:after:border-r-transparent sm:after:border-l-transparent sm:after:content-[''] lg:top-[22.5%] lg:left-[74%] lg:h-[88px] lg:w-[189px] lg:text-[24px] lg:leading-[28px] lg:tracking-[-1.07px] lg:after:border-t-[16px] lg:after:border-r-[16px] lg:after:border-l-[16px]">
        Yokohama
      </div>
    </section>
  );
};
export default Map;
