import React from "react";
import NavIndex from "./components/Navbar/NavIndex";
import FooterIndex from "./components/Footer/FooterIndex";
import HomeIndex from "./components/Home/HomeIndex";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavIndex />
        <main className="bg-[#E0E7FF] ">
          <HomeIndex />
        </main>
        <FooterIndex />
      </div>
    </BrowserRouter>
  );
};

export default App;
