import React from "react";
import heroImg from "../../assets/images/devesh.jpg";
// import CountUp from "react-countup/build/CountUp";

export const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-5">
        <div className="md:flex items-center gap-40  sm:flex-col md:flex-row">

          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
              
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px]  sm:leading-[46px] mt-5"
            >
              I'm Deveshwar Zard <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button  className=" bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] animate-bounce w-17 h-10 ">
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
            <p data-aos="fade-left"
              data-aos-duration="1500"
              className=" flex gap-2 text-headingColor font-[500] mt-6 text-[15px] leading-7 sm:pl-14 sm:pr-10">
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Engineering enthusiast pursuing a Bachelor of Engineering degree with a flair for coding in C++, C, Java, and Python. He has a keen interest in web development and Javascript, showcasing his skill with React Js, Bootstrap, Tailwind CSS, HTML5, CSS, SQL, and DBMS.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600] ">
                Follow me :
              </span>

              <span>
                <a href="https://www.linkedin.com/feed/" target="_blank"
                  className="text-smallTextColor text-[35px] font-[600] ">  
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Deveshwar01 " target="_blank"
                  className="text-smallTextColor text-[35px] font-[600]"
                >
                  {" "}
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-smallTextColor text-[35px] font-[600]"
                >
                  {" "}
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>

          {/* hero left end */}

          {/* hero img */}

          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className=" flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* hero img end */}

          {/* hero content right */}
        
          {/* hero content right end */}
        </div>
      </div>
    </section>
  );
};
