import React, { useRef } from "react";
import edgeLogo from "../../assets/edge.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar: React.FC<{ intersected: boolean }> = ({ intersected }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  console.log({ intersected });
  return (
    <motion.div
      initial={false}
      animate={{
        paddingTop: intersected ? 0 : "1.2rem",
        paddingRight: intersected ? 0 : "3rem",
        paddingLeft: intersected ? 0 : "3rem",
        borderTopLeftRadius: intersected ? 0 : "0.875rem",
        borderTopRightRadius: intersected ? 0 : "0.875rem",
        opacity: intersected ? 0.99 : 1,
      }}
      transition={{
        duration: 0.1,
      }}
      className="fixed z-[200] w-full"
    >
      <motion.div
        initial={false}
        animate={{
          borderTopLeftRadius: intersected ? 0 : "9999px",
          borderBottomLeftRadius: intersected ? 0 : "9999px",
          borderTopRightRadius: intersected ? 0 : "9999px",
          borderBottomRightRadius: intersected ? 0 : "9999px",
          paddingLeft: intersected ? "4.5rem" : "1.5rem",
          paddingRight: intersected ? "4.5rem" : "1.5rem",
          height: intersected ? "4rem" : "3.5rem",
        }}
        transition={{
          duration: 0.1,
        }}
        className={`w-full ${
          intersected ? "card-shadow" : "card-shadow"
        }   black-gradient items-center   text-white flex justify-between px-6`}
      >
   <div className=" h-full flex items-center ">
          <img src={edgeLogo} className="w-[4rem]" alt="" />
        </div>
        <div className=" hidden md:flex justify-between items-center gap-x-8  ">
          <button className="abel hover:text-gray-300 card-shadow transition-all capitalize ">
            features
          </button>
          <button className="abel hover:text-gray-300 card-shadow transition-all capitalize ">
            Objectives
          </button>
          <button className="abel hover:text-gray-300 card-shadow transition-all capitalize ">
            Reviews
          </button>

          <Link
            to="/dashboard"
            className="abel hover:text-gray-300 card-shadow transition-all capitalize "
          >
            Dashboard
          </Link>
        </div>
        <div className="hidden md:flex flex justify-between items-center gap-x-4">
          <Link
            to="/auth/login"
            className="abel hover:text-gray-300 card-shadow transition-all "
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="abel hover:text-gray-300 card-shadow transition-all "
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
          initial={false}
          animate={{
            borderTopLeftRadius: intersected ? 0 : "20px",
            borderBottomLeftRadius: intersected ? 0 : "20px",
            borderTopRightRadius: intersected ? 0 : "20px",
            borderBottomRightRadius: intersected ? 0 : "20px",
            paddingLeft: "0",
            paddingRight: "0",
            height: "16rem",
            width: intersected ? "100%" : "calc(100% - 6.4rem)", // Assuming the navbar is centered similarly
            marginLeft: intersected ? "0" : "3.2rem",
            marginTop: intersected ? "0" : "1.2rem",
          }}
          transition={{
            duration: 0.1,
          }}
          className="md:hidden flex flex-col items-center gap-y-4 text-white absolute top-16 left-0 w-full bg-black py-4 px-6">
            <Link
              to="/features"
              className="abel hover:text-gray-300 card-shadow transition-all capitalize "
            >
              Features
            </Link>
            <Link
              to="/objectives"
              className="abel hover:text-gray-300 card-shadow transition-all capitalize "
            >
              Objectives
            </Link>
            <Link
              to="/reviews"
              className="abel hover:text-gray-300 card-shadow transition-all capitalize "
            >
              Reviews
            </Link>
            <Link
              to="/dashboard"
              className="abel hover:text-gray-300 card-shadow transition-all capitalize "
            >
              Dashboard
            </Link>
            <Link
              to="/auth/login"
              className="abel hover:text-gray-300 card-shadow transition-all capitalize "
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="abel hover:text-gray-300 card-shadow transition-all capitalize "
            >
           signup
            </Link>
            

     
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
