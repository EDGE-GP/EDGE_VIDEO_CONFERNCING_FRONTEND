import React, { useState } from "react";
import CircularLoading from "../UI/CircularLoading";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import axios, { isAxiosError } from "axios";
import { notify } from "../../utils/Toaster/notify";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const loginHandler = async () => {
    if (disabled || error) return;
    // e.preventDefault();
    try {
      if (emailError || passwordError) return;
      setLoading(true);
      console.log(email, password);
      toast.remove();
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/users/login/`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setLoading(false);
      notify("Login successful", "success", Infinity);
      setDisabled(true);
      setTimeout(() => {
        dispatch(
          authActions.setUser({
            user: res.data.user,
          })
        );
        toast.remove();
      }, 2000);
    } catch (err: unknown) {
      console.log(err);
      if (isAxiosError(err)) {
        notify(
          err.response?.data?.message || "Something went wrong",
          "error",
          Infinity
        );
      }
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };
  const [loading, setLoading] = useState<boolean>(false);
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
  return (
    <div className="w-full h-full  flex flex-col gap-3 items-start justify-center text-start ">
    <div className="flex justify-center md:justify-start w-full"> {/* Wrapper div for centering */}
        <h1 className="text-3xl text-black font-bold tracking-[0.225rem] md:text-start  mb-2 Abel">
            Login
        </h1>
    </div>
      <h3 className="text-lg text-blackish Abel mb-2  tracking-wide">
        Welcome back! please fill in your credentials!
      </h3>
      <form className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-md text-black font-semibold ">
          Email
        </label>
        <div>
          <input
            className={` ${
              emailError ? "border-red-600" : "border-black"
            } border-b-2 w-full py-1 px-4 mb-1  text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) setError(false);
              setEmail(e.target.value);
            }}
          />
          <h5 className="h-3 text-red-600 font-semibold px-4 mb-1">
            {emailError}
          </h5>
        </div>
        <label htmlFor="password" className="text-md text-black font-semibold ">
          Password
        </label>
        <div>
          <input
            className={` ${
              passwordError ? "border-red-600" : "border-black"
            } border-b-2 w-full py-1 px-4 text-md mb-1 text-md outline-none placeholder:text-gray-400 tracking-widest placeholder: placeholder:text-sm `}
            type="password"
            placeholder="********"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) setError(false);
              setPassword(e.target.value);
            }}
          />
          <h5 className="h-3 text-red-600 text-md font-semibold px-4 mb-1">
            {passwordError}
          </h5>
        </div>
        <div className="w-full flex justify-end items-center mb-2">
          <div className=" ">
            <Link
              to={"/auth/forgot-password"}
              className="justify-self-center text-center pb-2 text-black text-md font-semibold hover:text-blackish"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        {/* {error && (
                            <div className="flex justify-center items-center w-full">
                            <h5 className=" text-md text-center text-red-600 font-bold px-4 mb-1">
                                {error}
                            </h5>
                            </div>
                        )} */}
        <button
          onClick={(e: React.FormEvent) => {
            e.preventDefault();
            loginHandler();
          }}
          className={`w-full bg-black hover:bg-mostlyblack transition rounded-lg h-[3.25rem] text-white font-[500] text-lg tracking-[0.15rem] mb-2 ${
            loading ? "bg-mostlyblack" : ""
          }`}
        >
          {!loading ? "sign in" : <CircularLoading button={true} />}
        </button>
      </form>
    </div>
  );
};

export default Login;
