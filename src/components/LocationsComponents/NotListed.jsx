import { Button } from "../UI";

const NotListed = () => {
  return (
    <article className="flex flex-col text-center lg:flex-row lg:gap-1 lg:px-[10%]">
      <h4 className="mono mx-auto mb-5 w-[80%] text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:w-[70%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:w-[30%] lg:text-left">
        Your City Not Listed?
      </h4>
      <p className="lexend mx-auto mb-8 w-[80%] text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:my-5 lg:w-[40%] lg:text-left">
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </p>
      <div className="flex justify-center sm:mt-4">
        <Button content="Message Us" />
      </div>
    </article>
  );
};

export default NotListed;
