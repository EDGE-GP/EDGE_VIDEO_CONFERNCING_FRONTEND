import React from "react";
import edgeLogo from "../../assets/edge.png";

const Navbar = () => {
  return (
    <div className="w-full navbar-shadow  rounded-full  h-[3.5rem] black-gradient items-center text-white flex justify-between px-6">
      <div className=" h-full flex items-center">
        <img src={edgeLogo} className="w-[4rem]" alt="" />
      </div>
      <div className="flex justify-between items-center gap-x-8">
        <button className="abel hover:text-slate-200 card-shadow transition-all ">
          Products
        </button>
        <button className="abel hover:text-slate-200 card-shadow transition-all ">
          Solutions
        </button>
        <button className="abel hover:text-slate-200 card-shadow transition-all ">
          Resources
        </button>
        <button className="abel hover:text-slate-200 card-shadow transition-all ">
          Dashboard
        </button>
      </div>
      <div className="flex justify-between items-center gap-x-4">
        <button className="abel hover:text-slate-200 card-shadow transition-all ">
          Login
        </button>
        <button className="abel hover:text-slate-200 card-shadow transition-all ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
