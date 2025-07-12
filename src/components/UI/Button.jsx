const Button = ({ content, classes }) => {
  return (
    <button
      className={`mono h-[53px] w-[180px] cursor-pointer border-2 border-[#FCB72B] bg-[#FCB72B] text-[15px] leading-[25px] font-bold tracking-[0] text-white duration-300 hover:border-[#FCB72B] hover:bg-white hover:text-[#FCB72B] ${classes}`}
    >
      {content}
    </button>
  );
};

export default Button;
