import React from "react";

const Main = () => {
  return (
    <div className="px-[13%] ">
      <div className=" mt-28 text-center pb-20 bg-slate-200">
        <div>
          <p className=" font-mona-sans text-[72px] font-bold leading-[90px]">
            Create <span className="gradient-text">Professional Videos</span> in
            Minutes with AI Avatars
          </p>
        </div>
        <div>
          <p className="font-inter text-[18px] font-medium leading-[28px] text-center">
            Transform your text into engaging video content instantly, while
            saving time and cutting costs.
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <div>
            <input
              className=" w-[259px] h-[43px] top-[280px] left-[293.25px] rounded-[6px] bg-white border-t border-transparent pl-4 "
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <button className=" w-[131px] h-[43px]  left-[557.75px] py-[12px] px-[20px]  rounded-[6px] text-center  border-transparent  bg-custom-gradient text-white">
              Get a Demo
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="./images/unscript_image.png" alt="img" />
      </div>
      <div>
        <div>
          <p className="font-mona-sans text-[48px] font-bold leading-[60px] text-center">
            Trusted by Over 10,000+ Customers Worldwide.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-1">
          {Array.from({ length: 18 }).map((_, index) => (
            <div key={index} className="bg-gray-200 p-4">
              Item {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
  );
};

export default Main;
