import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/* footer top */}

      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products ?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] ">
                {" "}
                <i class="ri-mail-line"></i> Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className=" text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              quisquam dolore veritatis hic nemo alias quasi ducimus soluta,
              repellat consequatur.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2b33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://github.com/Deveshwar01 " target="_blank" className="text-gray-300 font-[500] text-[18px] ">
                  <i class="ri-github-line"></i>{" "}
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2b33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.linkedin.com/feed/" target="_blank"
                  className="text-gray-300 font-[500] text-[18px] ">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2b33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="#" className="text-gray-300 font-[500] text-[18px] ">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              {" "}
              <a className=" text-gray-400 font-[700]" href="#about">
                About
              </a>
            </li>
            <li>
              {" "}
              <a className=" text-gray-400 font-[700]" href="#services">
                Services
              </a>
            </li>
            <li>
              {" "}
              <a className=" text-gray-400 font-[700]" href="#portfolio">
                {" "}
                Portfolio
              </a>
            </li>
            <li>
              {" "}
              <a className=" text-gray-400 font-[700]" href="#contact">
                {" "}
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* footer top end */}

      {/* footer bottom */}
      <div className="bg-[1b1e29] py-3 mt-14">
        <div className="conatiner">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <p className=" flex justify-center items-center text-gray-400 text-[14px]">
                  Copyright {year} developed by Deveshwar Zard - All right
                  reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
