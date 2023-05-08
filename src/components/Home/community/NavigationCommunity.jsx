import React from "react";
import "../../../styles/community.css";
import { Link } from "react-router-dom";
import CommunityMember from "./CommunityMember";

const NavigationCommunity = () => {
  return (
    <section className="flex justify-center text-center items-center bg-[#f7f7ff] py-24 px-6">
      <div className="navCom">
        <p className="p-content block mb-6 text-[#414360]">
          <span>React Navigation is built by </span>
          <Link to={"https://expo.dev/"}>
            <b>Expo</b>
          </Link>
          ,
          <Link to={"https://swmansion.com/"}>
            <b> Software Mansion</b>
          </Link>
          <span>, and </span>
          <Link to={"https://www.callstack.com/"}>
            <b>Callstack</b>
          </Link>
          <span>, with contributions from the </span>
          <Link
            to={
              "https://github.com/react-navigation/react-navigation/graphs/contributors"
            }
          >
            <b>Community</b>
          </Link>
          <span> and </span>
          <Link to={"https://github.com/sponsors/react-navigation"}>
            <b>Sponsors</b>
          </Link>
          :
        </p>
        <CommunityMember />
        <div className="text-[#414360] mt-6">
          If React Navigation is helpful to you, consider
          <Link
            to={"https://github.com/sponsors/react-navigation"}
            className="font-bold hover:underline"
          >
            {" "}
            supporting the project by sponsoring it 💜
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavigationCommunity;
