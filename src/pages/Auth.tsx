import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/edge.png";
import loginPattern from "../assets/pattern.png";
import { motion, AnimatePresence } from "framer-motion";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import Signup from "@/components/Auth/Signup";
import Login from "@/components/Auth/Login";
import { AuthMethod } from "@/types/Auth";
import ResetPassword from "@/components/Auth/ResetPassword";
import Activate from "@/components/Auth/Activate";

const Auth: React.FC = () => {
  const history = useNavigate();
  const { authParam } = useParams();
  const [authMethod, setAuthMethod] = React.useState<AuthMethod>("login");

  useEffect(() => {
    console.log({ authParam });
    if (authParam === "login") {
      setAuthMethod("login");
    } else if (authParam === "signup") {
      setAuthMethod("signup");
    } else if (authParam === "forgot-password") {
      setAuthMethod("forgot-password");
    } else if (authParam === "reset-password") {
      setAuthMethod("reset-password");
    } else if (authParam === "activate") {
      setAuthMethod("activate");
    }
  }, [authParam, history]);
  console.log({
    authMethod,
  });

  return (
    <>
      <div className="hidden lg:flex h-screen w-full justify-center items-center overflow-y-hidden  Abel">
        <div className="mx-auto rounded-lg lg:max-w-[980px] xl:max-w-[1024px] flex justify-center items-center card-shadow">
          <div className="min-w-[50%] max-w-[50%] bg-[#0E0B0E] h-[40rem] rounded-l-lg relative flex flex-col items-center justify-between z-10 ">
            <div className="w-full h-[40rem] absolute rounded-l-lg  z-1  grayscale opacity-[0.3] ">
              <img
                src={loginPattern}
                alt=""
                className="h-full w-full rounded-l-lg"
              />
            </div>
            <div className="text-white  w-full flex flex-col  text-3xl ">
              <div className="flex justify-between items-start">
                <div className="flex flex-col px-8 py-[3.8rem]">
                  {/* <h1 className="Poiret text-5xl mb-6">edge.</h1> */}
                  <div className=" z-10">
                    <img
                      onClick={() => {
                        history("/");
                      }}
                      src={loginImg}
                      alt=""
                      className="w-[8rem] cursor-pointer mb-2"
                    />
                  </div>
                  <h3 className=" text-base text-start w-[80%] text-white tracking-[0.1rem]">
                    Connecting You to the World, anytime, anywhere!
                  </h3>
                </div>
                <div className="pt-[8rem] z-10">
                  <div
                    className={`w-[9.4rem] ${
                      authMethod === "login" ||
                      authMethod === "forgot-password" ||
                      authMethod === "reset-password" ||
                      authMethod === "activate"
                        ? "bg-white text-black btn-effect font-semibold "
                        : " text-white bg-[#0E0B0E]"
                    } text-center  rounded-l-[2rem] py-4   z-100 mb-[2rem]`}
                  >
                    <span></span>
                    <span></span>
                    <button
                      className="block w-full bg-transparent border-none abel outline-none cursor-pointer"
                      onClick={() => {
                        history("/auth/login");
                      }}
                    >
                      Login
                    </button>
                  </div>
                  <div
                    className={`w-[9.4rem] ${
                      authMethod === "signup"
                        ? "bg-white text-black btn-effect font-semibold"
                        : " text-white bg-[#0E0B0E]"
                    } text-center rounded-l-[2rem] py-4 z-100 tracking-[10rem]`}
                  >
                    <span></span>
                    <span></span>
                    <button
                      className="block w-full bg-transparent abel border-none outline-none cursor-pointer"
                      onClick={() => {
                        history("/auth/signup");
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="w-[64%] absolute bottom-[8%] text-[13px] capitalize left-1/2 translate-x-[-50%] opacity-100 text-white text-center tracking-wider">
              Join Edge for effortless communication with intuitive two way sign
              language support and seamless video calls
            </h3>
          </div>
          <AnimatePresence mode="wait">
            {authMethod === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[50%] lg:px-[4.25rem] xl:px-[4.5rem] bg-white h-[40rem] rounded-r-lg "
              >
                <Login />
              </motion.div>
            )}

            {authMethod === "signup" && (
              <motion.div
                key="signup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[50%] lg:px-[4.25rem] xl:px-[4.5rem] bg-white h-[40rem] rounded-r-lg "
              >
                <Signup />
              </motion.div>
            )}
            {authMethod === "forgot-password" && (
              <motion.div
                key="forgot-password"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[50%] lg:px-[4.25rem] xl:px-[4.5rem] bg-white h-[40rem] rounded-r-lg "
              >
                <ForgotPassword />
              </motion.div>
            )}
            {authMethod === "reset-password" && (
              <motion.div
                key="reset-password"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[50%] lg:px-[4.25rem] xl:px-[4.5rem] bg-white h-[40rem] rounded-r-lg "
              >
                <ResetPassword />
              </motion.div>
            )}
            {authMethod === "activate" && (
              <motion.div
                key="activate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[50%] lg:px-[4.25rem] xl:px-[4.5rem] bg-white h-[40rem] rounded-r-lg "
              >
                <Activate />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Auth;
