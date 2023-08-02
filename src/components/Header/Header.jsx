import React, { useRef, useEffect } from "react";
import './Header.css'
export const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location-80,
      left:0,
    }); 
  };

  const toggleMenu=()=> menuRef.current.classList.toggle('show_menu')
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              D
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Deveshwar
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/* {=========== logo end} */}
          {/* menu start */}

          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a className=" text-smallTextColor font-[700]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className=" text-smallTextColor font-[700]"href="#portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          {/* menu end */}

          {/* menu right */}
          <div className="flex items-center gap-4 res">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700 res">
              <i class="ri-send-plane-line "></i> let's connect
            </button>
            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer ">
              <i class="ri-menu-line"></i>
            </span>
          </div>

          {/* menu end */}
        </div>
      </div>
    </header>
  );
};
