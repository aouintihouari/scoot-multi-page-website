import { Button } from "../UI";

const BoxesContainer = () => {
  const content = [
    { role: "General Manager", location: "Jakarta, Indonesia" },
    { role: "UI/UX Designer", location: "Yokohama, Japan" },
    { role: "Blog Content Copywriter", location: "New York, United States" },
    { role: "Graphic Designer", location: "New York, United States" },
    { role: "Fleet Supervisor", location: "Jakarta, Indonesia" },
    { role: "UX Analyst", location: "London, United Kingdom" },
  ];
  return (
    <section className="px-4 lg:mx-auto lg:w-[90%]">
      {content.map((c) => (
        <div className="my-4 flex flex-col items-center bg-[#F2F5F9] p-8 text-center sm:flex-row sm:items-start sm:justify-between sm:p-4 lg:px-10 lg:py-5">
          <div className="flex flex-col">
            <h4 className="mono text-[18px] leading-[24px] font-bold tracking-[-0.8px] text-[#495567] sm:text-left sm:text-[24px] sm:leading-[28px] sm:tracking-[-1.07px] lg:-mb-3">
              {c.role}
            </h4>
            <p className="lexend my-4 text-[15px] leading-[25px] tracking-[0px] text-[#495567] sm:text-left">
              {c.location}
            </p>
          </div>
          <Button content="Apply" classes="w-full sm:w-[40%]" />
        </div>
      ))}
    </section>
  );
};

export default BoxesContainer;
