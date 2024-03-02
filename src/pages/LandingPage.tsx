import React from "react";
import Navbar from "../components/LandingPage/Navbar";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen bg-white  py-8 px-12 background-pattern">
      <Navbar />
      <div className="py-[10rem] px-8 flex container w-full justify-between items-center">
        <div className="flex flex-col w-1/2">
          <h1 className="text-[4rem] abel">
            Uniting the world Empowering Connections Amplifying Voices
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
