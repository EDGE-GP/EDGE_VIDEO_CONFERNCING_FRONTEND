import React, { useState } from "react";
import CircularLoading from "../UI/CircularLoading";
import useForm from "../../hooks/useForm";
import axios, { AxiosError } from "axios";
import { notify } from "../../utils/Toaster/notify";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [error, setError] = useState<boolean>(false);
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
  const forgotPasswordHandler = async () => {
    try {
      if (error || emailError) return;
      setLoading(true);
      console.log(email);
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/users/forgot-password/`,
        {
          email,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setLoading(false);
      toast.remove();
      notify(
        "An email has been sent to you with instructions on how to reset your password",
        "success",
        Infinity
      );
    } catch (err: AxiosError) {
      console.log(err);
      console.log(err.response?.data?.message || "Something went wrong");
      toast.remove();
      notify(
        err.response?.data?.message || "Something went wrong",
        "error",
        Infinity
      );
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 items-start text-start justify-center">
      <h1 className="text-3xl text-black font-bold tracking-[0.225rem] text-start mb-2 Abel ">
        Forgot Password
      </h1>
      <h3 className="text text-blackish Abel mb-2  tracking-wide">
        Forgot your password? Simply provide your email, and you will recieve a
        password reset link right away.
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
          <h5 className="h-3 text-red-600 font-semibold px-4 text-[13px] mb-1">
            {emailError}
          </h5>
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
            // loginHandler();
            forgotPasswordHandler();
          }}
          className={`w-full bg-black mt- hover:bg-mostlyblack transition rounded-lg h-[3.25rem] text-white font-[500] text-lg tracking-[0.15rem]  ${
            loading ? "bg-mostlyblack" : ""
          }`}
        >
          {!loading ? "Submit" : <CircularLoading button={true} />}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
