import React, { useState } from "react";
import CircularLoading from "../UI/CircularLoading";
import useForm from "../../hooks/useForm";
import axios, { AxiosError, isAxiosError } from "axios";
import { notify } from "../../utils/Toaster/notify";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
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

  const signupHandler = async () => {
    if (disabled || error) return;

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
      toast.remove();
      notify("Signup successful", "success", Infinity);
      setDisabled(true);
      setTimeout(() => {
        toast.remove();
        dispatch(
          authActions.setUser({
            user: res.data.user,
          })
        );
      }, 2000);
      //   setTimeout(() => {
      //     history("/");
      //     setLoading(true);
      //   }, 1500);
    } catch (err) {
      if (isAxiosError(err)) {
        notify(
          err.response?.data?.message || "Something went wrong",
          "error",
          Infinity
        );
      } else {
        notify("Something went wrong", "error", Infinity);
      }
      setLoading(false);

      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-0 items-start justify-center text-start">
      <h1 className="text-3xl text-black font-bold tracking-[0.2rem] text-start mb-2 Abel ">
        Sign up
      </h1>
      <h3 className="text-lg text-blackish Abel mb-2  tracking-wide">
        Join us today! Fill in your details to create an account.
      </h3>
      <form className="flex flex-col gap-1 w-full">
        <label htmlFor="name" className="text-md text-black font-semibold ">
          Name
        </label>
        <div>
          <input
            className={` ${
              nameError ? "border-red-600" : "border-black"
            } border-b-2  w-full py-1 px-4 mb-1 text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) setError(false);
              setName(e.target.value);
            }}
          />
          <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
            {nameError}
          </h5>
        </div>
        <label htmlFor="email" className="text-md text-black font-semibold ">
          Email
        </label>
        <div>
          <input
            className={`${
              emailError ? "border-red-600" : "border-black"
            } border-b-2  w-full py-1 px-4 mb-1 text-md outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) setError(false);
              setEmail(e.target.value);
            }}
          />
          <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
            {emailError}
          </h5>
        </div>
        <label htmlFor="password" className="text-md text-black font-semibold ">
          Password
        </label>
        <div>
          <input
            className={`  ${
              passwordError ? "border-red-600" : "border-black"
            } border-b-2 border-black w-full py-1 px-4 text-md mb-1 text-md outline-none placeholder:text-gray-400 tracking-widest placeholder: placeholder:text-sm `}
            type="password"
            placeholder="********"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) setError(false);
              setPassword(e.target.value);
            }}
          />
          <h5 className="h-3 text-sm text-red-600 font-semibold px-4 mb-1">
            {passwordError}
          </h5>
        </div>
        <label htmlFor="email" className="text-md text-black font-semibold ">
          Confirm Password
        </label>
        <div>
          <input
            className={`  ${
              confirmPasswordError ? "border-red-600" : "border-black"
            } border-b-2 border-black w-full py-1 px-4 text-md mb-1 text-md outline-none placeholder:text-gray-400 tracking-widest placeholder: placeholder:text-sm `}
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (error) setError(false);
              setConfirmPassword(e.target.value);
            }}
          />
          <h5 className={`h-3 text-sm text-red-600 font-semibold px-4 mb-3`}>
            {confirmPasswordError}
          </h5>
        </div>
        {/* {error && (
                    <div className="flex justify-center items-center w-full">
                      <h5 className="text-md text-center text-red-600 font-bold px-4 mb-1">
                        {error}
                      </h5>
                    </div>
                  )} */}
        <button
          onClick={(e: React.FormEvent) => {
            e.preventDefault();
            signupHandler();
          }}
          className={`w-full bg-black hover:bg-mostlyblack transition rounded-lg h-[3.25rem] text-white font-[500] text-lg tracking-[0.15rem] mb-1 ${
            loading ? "bg-mostlyblack" : ""
          }  `}
        >
          {loading ? <CircularLoading button={true} /> : "sign up"}
        </button>
      </form>

      {/* <h3 className="text-[#707785] flex w-full justify-center gap-1 text-lg">
                  Already has an account?
                  <span>
                    <Link
                      to={"/auth/login"}
                      className="text-black font-[600] hover:text-blackish"
                    >
                      sign in
                    </Link>
                  </span>
                </h3> */}
    </div>
  );
};

export default Signup;
