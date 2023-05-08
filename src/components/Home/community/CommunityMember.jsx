import React from "react";
import { Link } from "react-router-dom";

const CommunityMember = () => {
  const memberData = [
    {
      img: "https://avatars.githubusercontent.com/u/306134?v=4",
      link: "https://github.com/wcandillon",
    },
    {
      img: "https://avatars.githubusercontent.com/u/476779?v=4",
      link: "https://github.com/Expensify",
    },
    {
      img: "https://avatars.githubusercontent.com/u/1057756?u=15c3cdff1c715ac27bbc63ccb8f0a1c27eeb3784&v=4",
      link: "https://github.com/zhigang1992",
    },
    {
      img: "https://avatars.githubusercontent.com/u/1257695?u=e142a0ae6314aa8b462e664db429d926b31bf978&v=4",
      link: "https://github.com/karszawa",
    },
    {
      img: "https://avatars.githubusercontent.com/u/1396951?v=4",
      link: "https://github.com/getsentry",
    },
    {
      img: "https://avatars.githubusercontent.com/u/1629785?u=5b5d80ddcda83e4780e2391b2d0b475f442289bd&v=4",
      link: "https://github.com/JonnyBurger",
    },
    {
      img: "https://avatars.githubusercontent.com/u/1764217?u=f36737d852ffcc50b87e809474faa27eb2ce130a&v=4",
      link: "https://github.com/markholland",
    },
    {
      img: "https://avatars.githubusercontent.com/u/2443340?v=4",
      link: "https://github.com/toyokumo",
    },
    {
      img: "https://avatars.githubusercontent.com/u/4328772?u=c4e0fd72bd7cdb3751166c8ade8ef253e6f5ba67&v=4",
      link: "https://github.com/itsrifat",
    },
    {
      img: "https://avatars.githubusercontent.com/u/5216601?u=33277f486965d5cbb390b76bf8b2cea89e20dec0&v=4",
      link: "https://github.com/btk",
    },
    {
      img: "https://avatars.githubusercontent.com/u/5967956?u=f7f5ed6b6b399c2953fd0e3be0512c378e9f76c4&v=4",
      link: "https://github.com/codinsonn",
    },
    {
      img: "https://avatars.githubusercontent.com/u/6457344?u=47e100289441b7f4681a7809202ff683886e4f5e&v=4",
      link: "https://github.com/ryo-rm",
    },
    {
      img: "https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4",
      link: "https://github.com/Naturalclar",
    },
    {
      img: "https://avatars.githubusercontent.com/u/7029942?u=5eb1fed31f05fe97bcb07227268165c4028cc662&v=4",
      link: "https://github.com/radko93",
    },
    {
      img: "https://avatars.githubusercontent.com/u/9664363?u=46ba6d5fbd29729df2950b845c9ca2cd085a1c2b&v=4",
      link: "https://github.com/EvanBacon",
    },
    {
      img: "https://avatars.githubusercontent.com/u/12868063?u=bd60f0dc2fade84162e3e78fc6ddff01e6c04dbe&v=4",
      link: "https://github.com/monkey0722",
    },
    {
      img: "https://avatars.githubusercontent.com/u/13172299?u=ec499b3d93c1fc422749842a957d22376355b949&v=4",
      link: "https://github.com/nandorojo",
    },
    {
      img: "https://avatars.githubusercontent.com/u/13601619?v=4",
      link: "https://github.com/itiden",
    },
    {
      img: "https://avatars.githubusercontent.com/u/15199031?u=46da50e88594eb284cf249485f202d5d43d474d1&v=4",
      link: "https://github.com/mrousavy",
    },
    {
      img: "https://avatars.githubusercontent.com/u/22625371?v=4",
      link: "https://github.com/amer8",
    },
    {
      img: "https://avatars.githubusercontent.com/u/26287153?u=3f522febbb0879510ecaa6bba12102f937467fdc&v=4",
      link: "https://github.com/johnhaup",
    },
    {
      img: "https://avatars.githubusercontent.com/u/27461460?u=594bf0d192c7d1bdffa89f17b4cf868d7e237ae9&v=4",
      link: "https://github.com/hyochan",
    },
    {
      img: "https://avatars.githubusercontent.com/u/46625943?u=63c9ed9017c34900df8b5ae2ed455ec4c82ef8aa&v=4",
      link: "https://github.com/bowen9284",
    },
    {
      img: "https://avatars.githubusercontent.com/u/49492517?u=dfcff5b478f1cc94c24c1d57367fe928c4445367&v=4",
      link: "https://github.com/xulww",
    },
    {
      img: "https://avatars.githubusercontent.com/u/49920282?v=4",
      link: "https://github.com/reactrondev",
    },
    {
      img: "https://avatars.githubusercontent.com/u/66008143?u=df20807f45e886661c2f73e1647e3d5b6a712de5&v=4",
      link: "https://github.com/kim-jiha95",
    },
    {
      img: "https://avatars.githubusercontent.com/u/81703263?u=c184298ee203c84546224b4397a9a68235caf1db&v=4",
      link: "https://github.com/EnricoVacondio",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-wrap mt-10">
      {memberData.map((member) => {
        return (
          <Link to={member.link} key={member.link}>
            <img
              src={member.img}
              alt="image"
              className="bg-[#fff] h-10 mb-4 ml-4 w-10 rounded shadow-lg"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CommunityMember;
