import React from "react";
import "../../../styles/community.css";
import img1 from "../../../assets/community1.png";
import img2 from "../../../assets/community2.png";
import img3 from "../../../assets/community3.png";
import img4 from "../../../assets/community4.png";
import CommunityUI from "./CommunityUI";

const NavogationPlatorm = () => {
  return (
    <section className="flex py-24 justify-center items-center bg-[#25292e] text-[#f7f7ff]">
      <div className="container px-8 sm:px-0">
        <CommunityUI
          img={img1}
          title="Easy to use"
          para="Start quickly with built-in navigators that deliver a seamless
        out-of-the-box experience."
        />
        <CommunityUI
          img={img2}
          title="Components built for iOS and Android"
          para="Platform-specific look-and-feel with smooth animations and gestures."
        />
        <CommunityUI
          img={img3}
          title="Completely customizable"
          para="If you know how to write apps using JavaScript you can customize any part of React Navigation."
        />
        <CommunityUI
          img={img4}
          title="Extensible platform"
          para="React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API."
        />
      </div>
    </section>
  );
};

export default NavogationPlatorm;
