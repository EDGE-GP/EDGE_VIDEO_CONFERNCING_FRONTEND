import React, { useRef } from "react";
import edgeLogo from "../../assets/edge.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Navbar: React.FC<{ intersected: boolean }> = ({ intersected }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
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
          paddingLeft: intersected ? "4.5rem" : "2.5rem",
          paddingRight: intersected ? "4.5rem" : "2.5rem",
          height: intersected ? "4rem" : "3.5rem",
        }}
        transition={{
          duration: 0.1,
        }}
        className={`w-full ${
          intersected ? "card-shadow" : "card-shadow"
        }   black-gradient items-center   text-white flex justify-between px-6`}
      >
        <div className=" h-full flex items-center">
          <img src={edgeLogo} className="w-[4rem]" alt="" />
        </div>
        <div className="flex justify-between items-center gap-x-8">
          {/* <button className="abel hover:text-gray-300 card-shadow transition-all capitalize ">
            Main
          </button> */}
          <button className="abel hover:text-gray-300 card-shadow transition-all capitalize ">
            features
          </button>
          <button className="abel hover:text-gray-300 card-shadow transition-all capitalize ">
            Objectives
          </button>
          <button className="abel hover:text-gray-300 card-shadow transition-all capitalize ">
            Reviews
          </button>
        </div>
        {!isLoggedIn ? (
          <div className="flex justify-between items-center gap-x-4">
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
        ) : (
          <Link
            to={"/dashboard/meetings"}
            className="abel hover:text-gray-300 card-shadow transition-all capitalize "
          >
            Dashboard
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
