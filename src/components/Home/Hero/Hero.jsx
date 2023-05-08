import React from "react";
import MiddleSvg from "./middle-portion/MiddleSvg";
import MiddleUI from "./middle-portion/MiddleUI";
import leftSvg from "../../../assets/svg1.png";
import rightSvg from "../../../assets/svg2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:pt-28  pb-10 sm:pb-32">
      <div className="Herocontainer gap-16 content-center">
        <img src={leftSvg} alt="Left svg" className="img1" />
        <div className="content flex flex-col justify-center items-center sm:rounded-2xl sm:border-8 sm:border-solid sm:border-[#414360] py-16 bg-[#f7f7ff] px-8 relative">
          <div className="absolute z-0 text-[#d5d6f5]">
            <MiddleSvg />
          </div>
          <MiddleUI />
          <div className="bottom-line"></div>
        </div>
        <img src={rightSvg} alt="Rigth svg" className="img2" />
      </div>
      <div className="bg-[#f7f7ff] text-[#414360] my-10 sm:my-16 mx-4 opacity-80 py-4 px-6 rounded shadow-md text-center">
        💡 Coming from an older version? Check out our
        <Link
          to={"https://reactnavigation.org/docs/migration-guides"}
          target="_blank"
          className="font-bold hover:underline"
        >
          {" "}
          migration guides
        </Link>
        .
      </div>
    </section>
  );
};

export default Hero;
