const Banner = () => {
  return (
    <div className="relative bg-ffPurple -mt-[78px] pt-20 h-[700px] overflow-hidden -z-50 rounded-bl-[10%] rounded-br-[10%]">
      <div className="grid grid-cols-2 gap-2">
        <div className="p-20 text-white">
          <img className="w-32 text-white" src="./img/nikeIcon.svg" />
          <p className="text-[8rem] font-bold">Nike</p>
          <p className="text-[2rem] font-bold">Air Max 96' Summer White</p>
        </div>
        <div className="overflow-visible">
          <img className="w-[100%]" src="./img/nikeBanner.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
