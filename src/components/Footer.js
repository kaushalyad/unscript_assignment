import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col  items-center">
      <div className="w-[70%] h-[300px] p-[81px]  gap-[10px] bg-gradient-to-r from-blue-300 to-red-300  rounded-tl-[21px] rounded-tr-[21px]">
        <div className=" flex justify-between">
          <div className=" w-1/2">
            <p className=" text-black font-mona-sans text-[72px] font-bold leading-[90px] text-left">Book a demo</p>
          </div>
          <div>
            <div>
              <p>
                Our video output beats the likes of Google Vlogger, and at par
                with Microsoft’s VASA-1 & Alibaba’s EMO
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
            <button className=" w-[131px] h-[43px]  left-[557.75px] py-[12px] px-[20px]  rounded-[6px] text-center  border-transparent  bg-black text-white">
              Subscribe
            </button>
          </div>
        </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0C111D] flex flex-col px-20 w-[100%]">
        <div className="flex justify-between items-center py-4 border-b-2">
          <div>
            <img src="/images/unscript_footer_logo.svg"></img>
          </div>
          <div className="flex gap-2">
            <div>
              <img src="/images/linkedin.svg"></img>
            </div>
            <div>
              <img src="/images/insta.svg"></img>
            </div>
          </div>
        </div>
        <div className="flex mt-4  justify-between gap-0 min-w-full">
          <div>
            <div className="border-b-2 py-2">
              <p className="text-lg font-semibold  text-white">Usecase</p>
            </div>
            <div className=" mt-2">
              <ul className=" text-white flex flex-col gap-2">
                <li>Learning and Development</li>
                <li>Marketing Teams</li>
                <li>Personalised videos</li>
                <li>Dubbing</li>
                <li>Customer service</li>
                <li>Enterprise</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="border-b-2 py-2">
              <p className="text-lg font-semibold  text-white">Feature</p>
            </div>
            <div>
              <ul className=" text-white flex flex-col gap-2">
                <li>AI Avatars</li>
                <li>Video Dubbing</li>
                <li>AI Face Swap</li>
                <li>Customised Virtual influencer</li>
                <li>video Personalisation</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="border-b-2 py-2">
              <p className="text-lg font-semibold  text-white">Resource</p>
            </div>
            <div>
              <ul className=" text-white flex flex-col gap-2">
                <li>Blogs</li>
                <li>Support</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div>
            <div className=" border-b-2 py-2">
              <p className="text-lg font-semibold  text-white">Company</p>
            </div>
            <div>
              <ul className=" text-white flex flex-col gap-2">
                <li>About us</li>
                <li>Contact</li>
                <li>Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
