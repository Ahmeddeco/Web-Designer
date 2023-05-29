import { React, useEffect, useState } from "react";
import { nav } from "../data";
import { Link } from "react-scroll";
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";
import logo from "../assets/img/logo.svg";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  //window scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-white shadow-lg py-5" : "py-9"
      } fixed left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <Link to='home' className='cursor-pointer'>
            <img src={logo} alt='logo' />
          </Link>
          {/* nav */}
          <ul
            className={`${
              showNav ? "left-0" : "left-full"
            } flex flex-col justify-center items-center bg-accent fixed top-0 text-white text-xl capitalize w-80 h-full gap-y-8 duration-200 transition-all`}
          >
            {nav.map((item, index) => {
              return (
                <li className='cursor-pointer' key={index}>
                  {item.name}
                </li>
              );
            })}
          </ul>
          {/* nav trigger */}
          <div onClick={() => setShowNav(!showNav)} className='cursor-pointer'>
            {showNav ? (
              <RiCloseFill className='w-8 h-8' />
            ) : (
              <RiBarChartHorizontalLine className='w-8 h-8' />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
