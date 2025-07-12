import Button from "../UI/Button";

const FeatureHighlights = () => {
  return (
    <section className="my-[30%] lg:my-[10%]">
      <article className="relative lg:mx-[10%] lg:flex lg:flex-row-reverse">
        <div>
          <img
            className="mx-auto h-[311px] w-[311px] rounded-full sm:min-h-[445px] sm:min-w-[445px]"
            src="./assets/images/telemetry.jpg"
            alt="telemetry"
          />
        </div>
        <div>
          <h3 className="mono my-[10%] text-center text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:mx-auto sm:my-[5%] sm:w-[60%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:mx-0 lg:w-[45%] lg:text-left">
            Easy to use riding telemetry
          </h3>
          <p className="lexend mx-auto my-[10%] w-[80%] text-center text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:my-[5%] lg:mx-0 lg:w-[45%] lg:text-left">
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </p>
          <Button
            content="Learn More"
            classes="mx-auto block mb-[25%] sm:mb-[10%] lg:mx-0"
          />
        </div>
        <img
          className="absolute top-[25%] right-[-30%] sm:top-[40%] sm:right-0 lg:top-[60%] lg:right-[-13%]"
          src="./assets/patterns/left-downward-arrow.svg"
          alt="left-downward-arrow"
        />
        <img
          className="absolute top-[0%] right-[-40%] -z-2 hidden sm:block lg:right-[-35%]"
          src="./assets/patterns/circle.svg"
          alt="circle"
        />
      </article>
      <article className="relative lg:mx-[10%] lg:my-[5%] lg:flex lg:flex-row lg:justify-between">
        <div className="lg:mr-[30vw]">
          <img
            className="mx-auto h-[311px] w-[311px] rounded-full sm:min-h-[445px] sm:min-w-[445px]"
            src="./assets/images/near-you.jpg"
            alt="near-you"
          />
        </div>
        <div>
          <h3 className="mono my-[10%] text-center text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:mx-auto sm:my-[5%] sm:w-[60%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:mx-0 lg:w-[100%] lg:text-left">
            Coming to a city near you
          </h3>
          <p className="lexend mx-auto my-[10%] w-[80%] text-center text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:my-[5%] lg:mx-0 lg:w-[100%] lg:text-left">
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>
          <Button
            content="Learn More"
            classes="mx-auto block mb-[25%] lg:mx-0 sm:mb-[10%]"
          />
        </div>
        <img
          className="absolute top-[3%] left-[-36%] sm:top-[1%] sm:left-[-10%] lg:left-[-13%]"
          src="./assets/patterns/right-arrow.svg"
          alt="left-downward-arrow"
        />
        <img
          className="absolute top-[0%] left-[-40%] -z-2 hidden sm:block lg:left-[-35%]"
          src="./assets/patterns/circle.svg"
          alt="circle"
        />
      </article>
      <article className="relative lg:mx-[10%] lg:flex lg:flex-row-reverse">
        <div>
          <img
            className="mx-auto h-[311px] w-[311px] rounded-full sm:min-h-[445px] sm:min-w-[445px]"
            src="./assets/images/payments.jpg"
            alt="payments"
          />
        </div>
        <div>
          <h3 className="mono my-[10%] text-center text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:mx-auto sm:my-[5%] sm:w-[60%] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px] lg:mx-0 lg:w-[45%] lg:text-left">
            Zero hassle payments
          </h3>
          <p className="lexend mx-auto my-[10%] w-[80%] text-center text-[15px] leading-[25px] tracking-[0px] text-[#939CAA] sm:my-[5%] lg:mx-0 lg:w-[45%] lg:text-left">
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>
          <Button
            content="Learn More"
            classes="mx-auto block mb-[25%] sm:mb-[10%] lg:mx-0"
          />
        </div>
        <img
          className="absolute top-[5%] right-[-55%] sm:top-[10%] sm:right-[-45%] lg:right-[-35%]"
          src="./assets/patterns/left-downward-arrow.svg"
          alt="left-downward-arrow"
        />
        <img
          className="absolute top-[0%] right-[-40%] -z-2 hidden sm:block lg:right-[-35%]"
          src="./assets/patterns/circle.svg"
          alt=""
        />
      </article>
    </section>
  );
};

export default FeatureHighlights;
