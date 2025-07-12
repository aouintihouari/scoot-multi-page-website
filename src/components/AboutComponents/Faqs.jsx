import { useState } from "react";

const Faqs = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = [
    {
      category: "How it works",
      items: [
        {
          id: "download",
          question: "How do I download the app?",
          answer:
            "To download the Scoot app, you can search 'Scoot' in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you'll be re-directed to the correct page.",
        },
        {
          id: "nearby",
          question: "Can I find a nearby Scoot?",
          answer:
            "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
        },
        {
          id: "license",
          question: "Do I need a license to ride?",
          answer:
            "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.",
        },
      ],
    },
    {
      category: "Safe driving",
      items: [
        {
          id: "helmet",
          question: "Should I wear a helmet?",
          answer:
            "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
        },
        {
          id: "rules",
          question: "How about the rules & regulations?",
          answer:
            "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
        },
        {
          id: "damage",
          question: "What if I damage my Scoot?",
          answer:
            "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
        },
      ],
    },
  ];

  return (
    <section className="w-full">
      <h5 className="mono text-center text-[32px] leading-[32px] font-bold tracking-[-1.43px] text-[#495567] sm:text-[48px] sm:leading-[48px] sm:tracking-[-2.14px]">
        FAQs
      </h5>
      <div className="mx-auto p-4 sm:p-6 lg:my-10 lg:px-[8%]">
        {faqData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="mb-16 lg:mb-20 lg:flex lg:items-start lg:gap-12"
          >
            <div className="lg:mb-10 lg:w-1/3">
              <h6 className="mono my-[10%] text-center text-[24px] leading-[28px] font-bold tracking-[-1.07px] text-[#495567] sm:my-[5%] sm:text-[40px] sm:leading-[40px] sm:tracking-[-1.79px] lg:mb-10 lg:text-left lg:text-[48px] lg:leading-[48px]">
                {section.category}
              </h6>
            </div>
            <div className="lg:w-2/3">
              <div className="cursor-pointer space-y-2 lg:space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="mx-auto my-[3%] overflow-hidden rounded-lg bg-[#F2F5F9] duration-300 hover:bg-[#FFF4DF] lg:my-2 lg:max-w-none"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors duration-200 hover:bg-gray-50 sm:px-6 sm:py-5"
                    >
                      <span className="w-[60%] cursor-pointer pr-4 text-[18px] leading-[24px] font-bold tracking-[-0.8px] text-[#495567] sm:text-[24px] sm:leading-[28px] sm:tracking-[-1.07px] lg:w-[85%]">
                        {item.question}
                      </span>
                      <div className="flex-shrink-0 text-orange-500">
                        <img
                          src="./assets/icons/chevron.svg"
                          alt="chevron"
                          className={`h-[8px] w-[18px] transition-transform duration-200 ${
                            openItems[item.id] ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    {openItems[item.id] && (
                      <div className="border-t border-gray-100 px-4 pb-4 sm:px-6 sm:pb-5">
                        <p className="lexend pt-3 text-[15px] leading-[25px] tracking-[0px] text-[#495567]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
