import React from "react";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="w-[1321.67px] h-[300px] top-[4585.28px] left-[443.52px] p-[81px] gap-[10px]">
        <div className="">
          <div>
            <p>Book a demo</p>
          </div>
          <div>
            <div>
              <p>
                Our video output beats the likes of Google Vlogger, and at par
                with Microsoft’s VASA-1 & Alibaba’s EMO
              </p>
            </div>
            <div>
              <input type="text" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0C111D] flex flex-col px-20">
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
