import React from "react";
import { Link } from "react-router-dom";

const BottomBanner = () => {
  return (
    <section className="flex justify-center text-xl py-16 px-6 bg-[#25292e] text-[#f7f7ff]">
      <div className="text-center">
        Black Lives Matter
        <Link
          to={"https://support.eji.org/give/153413/#!/donation/checkout"}
          target="_blank"
          className="text-[#8c90e0] font-bold hover:underline"
        >
          . Support the Equal Justice Initiative.
        </Link>
      </div>
    </section>
  );
};

export default BottomBanner;
