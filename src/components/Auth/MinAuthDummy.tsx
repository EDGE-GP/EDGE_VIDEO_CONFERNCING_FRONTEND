import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../../hooks/useForm";

import { AuthMethod } from "../../types/Auth";
import { RootState } from "../../store/index";
import { useSelector } from "react-redux";

const MinAuthDummy = () => {
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
  );
};

export default MinAuthDummy;
