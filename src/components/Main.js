import React, { useState } from "react";
import CompanyLogo from "./CompanyLogo";
const Main = () => {
  return (
    <div className="px-[13%] ">
      <div className=" mt-28 text-center pb-20 bg-gradient-to-r from-yellow-50 to-blue-50">
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
          <p className="font-mona-sans text-[48px] font-bold leading-[60px] text-center mt-8">
            Trusted by Over 10,000+ Customers Worldwide.
          </p>
        </div>
        <div className="grid grid-cols-6 mt-8">
          {Array.from({ length: 18 }).map((_, index) => (
            <div key={index} className="border border-gray-300 p-2">
              <CompanyLogo src={`/images/companyLogos/logo${index + 1}.png`} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col gap-8">
          <div>
            <img src="./images/video.svg"></img>
          </div>
          <div>
            <p className="font-inter text-[36px] font-bold leading-[40px] text-left">
              Minutes, not Hours.
            </p>
          </div>
          <div>
            <p className="font-inter text-[20px] font-normal leading-[28px] text-left">
              No need for lengthy processes like filming, editing, or
              storyboarding, content can be created in minutes by simply
              providing a script.
            </p>
          </div>
          <div className="flex gap-4">
            <button className=" text-[#0158F7]">Discover More</button>
            <img src="./images/arrow.svg"></img>
          </div>
        </div>
        <div>
          <img src="./images/meeting_pic.png"></img>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src="./images/coinpic.png"></img>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <img src="./images/reduce_cost.svg"></img>
          </div>
          <div>
            <p className="font-inter text-[36px] font-bold leading-[40px] text-left">
              80% cost reduction
            </p>
          </div>
          <div>
            <p className="font-inter text-[20px] font-normal leading-[28px] text-left">
              Eliminate the need for expensive equipment, location rentals, and
              professional videographer, reducing overall production costs.
            </p>
          </div>
          <div className="flex gap-4">
            <button className=" text-[#0158F7]">Discover More</button>
            <img src="./images/arrow.svg"></img>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col gap-8">
          <div>
            <img src="./images/growth_arrow.svg"></img>
          </div>
          <div>
            <p className="font-inter text-[36px] font-bold leading-[40px] text-left">
              A Crew of 15 vs 1 AI tool
            </p>
          </div>
          <div>
            <p className="font-inter text-[20px] font-normal leading-[28px] text-left">
              Video production coordination involves managing schedules and
              equipment. AI videos streamline this, reducing labor and
              management efforts.
            </p>
          </div>
          <div className="flex gap-4">
            <button className=" text-[#0158F7]">Discover More</button>
            <img src="./images/arrow.svg"></img>
          </div>
        </div>
        <div>
          <img src="./images/3d_design.png"></img>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src="./images/Auto_Subtitle_Generator.png"></img>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <img src="./images/web.svg"></img>
          </div>
          <div>
            <p className="font-inter text-[36px] font-bold leading-[40px] text-left">
              <span className="text-[#0158F7]">140+</span> Languages
            </p>
          </div>
          <div>
            <p className="font-inter text-[20px] font-normal leading-[28px] text-left">
              Engage non-English speaking audiences by automating dubbing and
              translation to create and distribute multilingual videos quickly.
            </p>
          </div>
          <div className="flex gap-4">
            <button className=" text-[#0158F7]">Discover More</button>
            <img src="./images/arrow.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
