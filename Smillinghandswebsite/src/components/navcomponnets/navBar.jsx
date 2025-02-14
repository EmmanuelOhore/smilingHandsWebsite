import "../../styles/navBar.css";
import imgone from "../../assets/placeholder.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Initiatives from "./../navigationComponent/initiatives";
import Gallery from "./../navigationComponent/Gallery";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const navData = [
    { linkto: "/about", name: "About", icon: "fa-solid fa-user-group" },
    {
      linkto: "/Volunteer",
      name: "Volunteer",
      icon: "fa-solid fa-hand-holding-dollar",
    },
    {
      linkto: "/Intiatives",
      name: "Initiatives",
      icon: "fa-solid fa-briefcase",
    },
    { linkto: "/Gallery", name: "Gallery", icon: "fa-solid fa-blog" },
    { linkto: "/Contactus", name: "Contact ", icon: "fa-solid fa-phone" },
  ];

  return (
    <nav className="realtive z-40">
      <Link to="/">
        <header className="logo_container">
          <div className="img-container">
            <img src={imgone} alt="Placeholder Image" />
          </div>
          <h1>LOGO</h1>
        </header>
      </Link>

      <section className="nav_links_conatiner">
        <ul className="nav_links">
          {navData.map((data, index) => {
            return (
              <div key={index} className=" w-[20%] flex items-center gap-3">
                <li className=" text-[15px] leading-[27px] font-medium  laptop:text-[14px] tablet:text-[12px] phoneL:text-[13px] phoneP:text-[12px]">
                  <NavLink to={`${data.linkto}`}>{data.name}</NavLink>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
      <section className="nav_button">
        <button>Donate</button>
        <div className="search_container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
      </section>
      {/* hamburger meanu */}
      <i
        onClick={handleToggle}
        className={`fa-solid ${isOpen ? "fa-x " : "fa-bars"} bars`}
      ></i>
      {isOpen && (
        <div className="hidden z-10  absolute  translate-x-[-50%] left-[50%] top-[4rem]  w-full  tablet:!block phoneP:top-[3.8rem] bg-white border-b-2 shadow-md">
          <ul className=" flex flex-col justify-center items-center font-semibold  gap-2 phoneP:gap-0 ">
            {navData.map((data, index) => {
              return (
                <div
                  key={index}
                  className=" w-[20%] flex items-center gap-3 phoneL:gap-2"
                >
                  <i
                    className={` ${data.icon} text-[14px] phoneL:!text-[12px] phoneP:!text-[11px]`}
                  ></i>
                  <li className=" text-[15px] leading-[27px] font-medium  laptop:text-[14px] tablet:text-[12px] phoneL:text-[12px] phoneP:text-[11px]">
                    <NavLink to={`${data.linkto}`}>{data.name}</NavLink>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
