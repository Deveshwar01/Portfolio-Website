import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import { Modal } from "./Modal";
import '../../App.css'

export const Portfolio = () => {
  const [nextItems, setNextItmes] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItmes((prev) => prev + 3);
  };

  const ShowModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-5 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Recent projects
            </h3>
          </div>
          
        </div>
        <div className=" flex items-center gap-4 flex-warp mt-12 rohan " >
          {portfolios?.slice(0, nextItems)?.map((Portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className=" group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
              <figure >
                <img className="rounded-[8px]" src={Portfolio.imgUrl} alt="" />
              </figure>
              <div
                className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block" >
                <div className="w-full h-full flex items-center justify-center">
                  <button onClick={() => ShowModalHandler(Portfolio.id)}
                    className=" text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                    See details
                  </button> 
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};
