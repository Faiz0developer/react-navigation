import React, { useState } from "react";
import { BsBrightnessHigh, BsGithub, BsSearch } from "react-icons/bs";
import "../../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const navData = ["Docs", "Blog", "  <BsGithub />", "Help", "Versions"];

  return (
    <div>
      <ul className={open ? "navMenu" : "navMenu active"}>
        <div className="flex gap-8 items-center shadow-md lg:shadow-none py-1 w-full justify-between">
          {open ? (
            <div className="content flex gap-8 items-center">
              <div className="flex items-center gap-2 ">
                <img
                  src="https://reactnavigation.org/img/spiro.svg"
                  alt="Navbar Image"
                  height={20}
                  width={30}
                />
                <b>React Navigation</b>
              </div>
              <Link
                to={"https://reactnavigation.org/docs/getting-started"}
                className="hover:text-[#6b52ae] cursor-pointer"
              >
                <li>Docs</li>
              </Link>
              <Link
                to={"https://reactnavigation.org/blog"}
                className="hover:text-[#6b52ae] cursor-pointer"
              >
                <li>Blog</li>
              </Link>
              <Link
                to={"https://reactnavigation.org/help cursor-pointer"}
                className="hover:text-[#6b52ae]"
              >
                <li>Help</li>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex gap-4 items-center">
                <li className="flex gap-2 items-center">
                  <img
                    src="https://reactnavigation.org/img/spiro.svg"
                    alt="Navbar Image"
                    height={20}
                    width={30}
                  />
                  <b>React Navigation</b>
                </li>
                <BsBrightnessHigh size={20} />
              </div>
              <FaTimes onClick={() => setOpen(true)} size={25} />
            </>
          )}
        </div>
        {open ? (
          ""
        ) : (
          <div className="navList flex flex-col gap-3 w-full text-lg">
            <Link to={"https://reactnavigation.org/docs/getting-started"}>
              <li className="docs">Docs</li>
            </Link>
            <Link to={"https://reactnavigation.org/blog"}>
              <li className="blog">Blog</li>
            </Link>
            <Link to={"https://github.com/react-navigation"} target="_blank">
              <li className="github">
                <BsGithub />
              </li>
            </Link>
            <Link to={"https://reactnavigation.org/help"}>
              <li className="help">Help</li>
            </Link>
            <li className="version">Versions</li>
          </div>
        )}
        {open && (
          <div className="flex gap-4 mt-1 items-center">
            <Link
              to={"https://github.com/react-navigation"}
              className="hover:text-[#6b52ae]"
              target="_blank"
            >
              <li>
                <BsGithub size={20} />
              </li>
            </Link>
            <li className="hover:bg-[#E0E7FF] rounded-3xl p-1.5 cursor-pointer">
              <BsBrightnessHigh size={20} />
            </li>
            <li>
              <div className="bg-[#E0E7FF] flex items-center rounded-3xl px-2 mx-2 gap-1 py-2 hover:border-[#3b0764] hover:border-2">
                <BsSearch />
                <input
                  type="search"
                  className="bg-[#E0E7FF]"
                  placeholder="Search"
                />
              </div>
            </li>
          </div>
        )}
      </ul>
      <div className="hamburger  duration-500" onClick={() => setOpen(false)}>
        {open && (
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <FaBars size={25} />
              <img
                src="https://reactnavigation.org/img/spiro.svg"
                alt="Navbar Image"
                height={20}
                width={30}
              />
              <b>React Navigation</b>
            </div>
            <div className="bg-[#E0E7FF] p-2 rounded-3xl mt-2">
              <BsSearch />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
