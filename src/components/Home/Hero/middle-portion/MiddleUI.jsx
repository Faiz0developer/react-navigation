import React from "react";
import "../../../../styles/Hero.css";
import { Link } from "react-router-dom";

const MiddleUI = () => {
  return (
    <div className="block relative text-center text-[#414360]">
      <h1 className="text-[3.5rem] font-black break-words mb-2">
        React Navigation
      </h1>
      <h3 className="text-xl font-semibold break-words mb-2">
        Routing and navigation for Expo and React Native apps.
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
        <Link to={"https://reactnavigation.org/docs/getting-started/"}>
          <button className="btn bg-[#f7f7ff] hover:text-white">
            Read Docs
          </button>
        </Link>
        <Link
          to={
            "https://github.com/react-navigation/react-navigation/tree/main/example"
          }
        >
          <button className="btn bg-[#414360] text-white">Try It</button>
        </Link>
      </div>
    </div>
  );
};

export default MiddleUI;
