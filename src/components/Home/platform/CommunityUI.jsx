import React from "react";

const CommunityUI = ({ img, title, para }) => {
  return (
    <div>
      <img src={img} alt="Communit image" />
      <h5 className="text-2xl lg:text-[2rem] my-4 font-bold">{title}</h5>
      <p className="text-lg lg:text-xl opacity-80 mb-4">{para}</p>
    </div>
  );
};

export default CommunityUI;
