// Navbar.jsx

import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import UpperNav from "../UperNav/UpperNav";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [isHamburgerVisible, setisHamburgerVisible] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(window.scrollY > 100);

  const toggleMenu = () => {
    setIsMenuToggle(!isMenuToggle);
  };

  const toggleHamburger = () => {
    setisHamburgerVisible(!isHamburgerVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldExpand = window.scrollY > 100;
      setIsFullWidth(shouldExpand);
      
    };

    // Attach scroll event listener directly
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div  className={`nav-container ${
          isFullWidth ? "w-[100%] px-[15%] left-[0] top-1 m-auto bg-gradient-to-b from-[#00000080] to-transparent" : "w-9/12 left-[10%] top-10 px-10"
        }  fixed max-lg:absolute top-[5%]  z-50 h-20 flex items-center justify-between  max-lg:px-2`} onMouseLeave={() => setIsDropdownVisible(false)}>
        <div className="left-nav">
          <Link to="/">
            <img src={Logo} alt="" className="w-24" />
          </Link>
        </div>

        <div className="right-nav text-white flex items-center gap-10  justify-between">
          <ul className="flex items-center gap-4 text-sm font-bold max-lg:hidden relative">
            {/* <div className={`pagination w-10 h-1 bg-[#DC2D13] z-50 absolute left-[0%] top-[-150%]`}></div> */}
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/"
            >
              <li>HOME</li>
            </Link>
            <Link 
              onMouseEnter={() => setIsDropdownVisible(true)}
              className="group relative transition-all duration-1000 ease-in-out "
              to="/vechileListing"
            >
              <li className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out" >
                OUR CARS <i className="ri-arrow-down-s-line"></i>
              </li>
              <Dropdown setIsDropdownVisible={setIsDropdownVisible} isDropdownVisible={isDropdownVisible} />
            </Link>
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/getApp"
            >
              <li>GET APP</li>
            </Link>
            {/* <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/ourNews"
            >
              <li>OUR NEWS</li>
            </Link> */}
            <Link
              className="hover:text-[#DC2D13] transition-all duration-150 ease-in-out"
              to="/contact"
            >
              <li>CONTACT</li>
            </Link>
          </ul>

          <div className="profile flex justify-center items-center gap-2 max-[440px]:hidden">
            <Link>
              <i className="ri-user-line bg-white text-black p-3 text-2xl rounded-full hover:bg-[#DC2D13] hover:text-white transition-all duration-150 ease-in-out"></i>
            </Link>

            <div className="profile-dets ">
              <p className="text-white font-bold">
                HI, USER
              </p>
              <Link to="/loginUser">
                <div className="log-in font-bold text-white text-xs flex gap-1 hover:text-[#DC2D13] transition-all duration-150 ease-in-out">
                  <i className="ri-login-box-line"></i>
                 <p className="">LOG IN</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="menu-icon hidden max-lg:block w-7  " onClick={toggleHamburger}>
          {isMenuToggle ? (
            <i className="ri-menu-2-line text-xl cursor-pointer" onClick={toggleMenu}></i>
          ) : (
            <i className="ri-menu-line text-xl cursor-pointer max-lg:mr-[-40px]" onClick={toggleMenu}></i>
          )}
          </div>

        </div>
      </div>
          <Hamburger setisHamburgerVisible={setisHamburgerVisible} isHamburgerVisible={isHamburgerVisible} />
    </>
  );
}

export default Navbar;
