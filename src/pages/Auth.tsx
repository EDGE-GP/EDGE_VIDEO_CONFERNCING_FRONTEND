import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/edge.png";
import loginPattern from "../assets/pattern.png";
import axios from "axios";
import { AxiosError } from "axios";
import { motion, AnimatePresence } from "framer-motion";
import useForm from "../hooks/useForm";
import ForgotPassword from "../components/Auth/ForgotPassword";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";
import { AuthMethod } from "../types/Auth";
import ResetPassword from "../components/Auth/ResetPassword";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const Auth: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { authParam } = useParams();
  const [authMethod, setAuthMethod] = React.useState<AuthMethod>("login");

  const history = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      history("/");
    }
  }, [isLoggedIn]);
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
    }
  }, [authParam]);
  console.log({
    authMethod,
  });
  const {
    value: email,
    error: emailError,
    handleChange: setEmail,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (value.length !== 0 && !regex.test(value)) return false;
      return true;
    },
    error: "Please enter a valid email address",
  });
  const {
    value: emailLogin,
    error: emailLoginError,
    handleChange: setEmailLogin,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (value.length !== 0 && !regex.test(value)) return false;
      return true;
    },
    error: "Please enter a valid email address",
  });
  const {
    value: password,
    error: passwordError,
    handleChange: setPassword,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex = /^.{6,16}$/;

      if (value.length !== 0 && !regex.test(value)) return false;
      else return true;
    },
    error: "Password must be between 6 and 16 characters",
  });
  const {
    value: passwordLogin,
    error: passwordLoginError,
    handleChange: setPasswordLogin,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex = /^(?=.{6,16}$)/;
      if (value.length !== 0 && !regex.test(value)) return false;
      else return true;
    },
    error: "Password must be between 6 and 16 characters",
  });
  const {
    value: name,
    error: nameError,
    handleChange: setName,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      const regex = /^[a-zA-Z ]{2,30}$/;
      if (value.length !== 0 && !regex.test(value)) return false;
      else return true;
    },
    error: "Please enter a valid name",
  });
  const {
    value: confirmPassword,
    error: confirmPasswordError,
    handleChange: setConfirmPassword,
  } = useForm<string>({
    initialState: "",
    required: (value) => {
      if (!passwordError && value.length > 0 && value !== password)
        return false;
      else return true;
    },
    error: "Passwords do not match",
  });

  const loginHandler = async () => {
    // e.preventDefault();
    try {
      if (emailLoginError || passwordLoginError) return;
      setLoading(true);
      console.log(emailLogin, passwordLogin);
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/users/login/`,
        {
          email: emailLogin,
          password: passwordLogin,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setLoading(false);
      setSuccess("Login successful");
      //   setTimeout(() => {
      //     history("/");
      //   }, 1500);
    } catch (err: AxiosError | Error) {
      console.log(err);
      console.log(err.response?.data?.message || "Something went wrong");
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  const signupHandler = async () => {
    // e.preventDefault();
    setLoading(true);
    try {
      if (nameError || emailError || passwordError || confirmPasswordError)
        return;
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/users/register/`,
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );
      console.log(res);
      setLoading(false);
      setSuccess("Signup successful");
      //   setTimeout(() => {
      //     history("/");
      //     setLoading(true);
      //   }, 1500);
    } catch (err: AxiosError | any) {
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);
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
                  <img src={loginImg} alt="" className="w-[8rem] mb-2" />
                  <h3 className=" text-base text-start w-[80%] text-white tracking-[0.1rem]">
                    Connecting You to the World, anytime, anywhere!
                  </h3>
                </div>
                <div className="pt-32 z-10">
                  <div
                    className={`w-[9.4rem] ${
                      authMethod === "login" ||
                      authMethod === "forgot-password" ||
                      authMethod === "reset-password"
                        ? "bg-white text-black btn-effect font-semibold "
                        : " text-white bg-[#0E0B0E]"
                    } text-center  rounded-l-[2rem] py-4   z-100 mb-[2rem]`}
                  >
                    <span></span>
                    <span></span>
                    <button
                      className="block w-full bg-transparent border-none outline-none cursor-pointer"
                      onClick={() => {
                        setError("");
                        history("/auth/login");
                      }}
                    >
                      login
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
                      className="block w-full bg-transparent border-none outline-none cursor-pointer"
                      onClick={() => {
                        setError("");
                        history("/auth/signup");
                      }}
                    >
                      sign up
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
          </AnimatePresence>
        </div>
      </div>

      <section className="lg:hidden min-h-screen flex ">
        <form className="container max-w-sm sm:max-w-md mx-auto flex-1 flex flex-col justify-center items-center pb-12 px-2">
          {/* <h1 className=" text-4xl ">edge</h1> */}
          <div className=" px-6 py-2 text-black w-full ">
            <div className="flex justify-around mb-8">
              <Link
                to="/auth/signup"
                className={`mb-8 text-4xl text-center abel ${
                  authMethod === "signup"
                    ? "border-b-2 border-black text-black"
                    : "text-black/60 hover:text-black"
                } py-2 cursor-pointer`}
              >
                Sign up
              </Link>
              <Link
                to="/auth/login"
                className={`mb-8 text-4xl text-center abel ${
                  authMethod === "login"
                    ? "border-b-2 border-black text-black"
                    : "text-black/60 hover:text-black"
                } py-2 cursor-pointer`}
              >
                Login
              </Link>
            </div>
            {authMethod === "signup" ? (
              <>
                {error && (
                  <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
                    {error}
                  </p>
                )}
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-1 ${
                      nameError ? "border-red-600" : ""
                    }`}
                    required
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setName(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-1 mb-2">
                    {nameError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className={`block  border-b-2 border-blackish w-full outline-none py-1 px-3 mb-1 ${
                      emailError ? "border-red-600" : ""
                    }`}
                    required
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-1 mb-2">
                    {emailError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`block  border-b-2 border-blackish w-full outline-none py-1 px-3 mb-1 ${
                      passwordError ? "border-red-600" : ""
                    }`}
                    required
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-[0.7rem] text-red-600 font-semibold px-1 mb-2">
                    {passwordError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`block  border-b-2 border-blackish w-full outline-none py-1 px-3 mb-1 ${
                      confirmPasswordError ? "border-red-600" : ""
                    }`}
                    required
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-2">
                    {confirmPasswordError}
                  </h5>
                </div>

                <button
                  className={
                    "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
                  }
                  onClick={(e: React.FormEvent) => {
                    e.preventDefault();
                    signupHandler();
                  }}
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                {error && (
                  <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
                    {error}
                  </p>
                )}
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Email
                  </label>
                  <input
                    type="text"
                    className={`block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-1 ${
                      emailLoginError ? "border-red-600" : ""
                    }`}
                    required
                    value={emailLogin}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmailLogin(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-3">
                    {emailLoginError}
                  </h5>
                </div>
                <div>
                  <label className="text-black abel text-xl font-[500]">
                    Password
                  </label>
                  <input
                    className={`block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-1 ${
                      passwordLoginError ? "border-red-600" : ""
                    }`}
                    required
                    type="password"
                    value={passwordLogin}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPasswordLogin(e.target.value);
                    }}
                  />
                  <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
                    {passwordLoginError}
                  </h5>
                </div>
                <Link
                  to={"/auth/forgot-password"}
                  className="text-center block self-center mb-4 text-black hover:text-blackish text-[18px] abel"
                >
                  forgot password?
                </Link>
                <button
                  type="submit"
                  className={
                    "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
                  }
                  onClick={(e: React.FormEvent) => {
                    e.preventDefault();
                    loginHandler();
                  }}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Auth;
