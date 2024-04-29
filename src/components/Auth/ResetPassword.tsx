import React, { useState } from "react";
import CircularLoading from "@/components/ui/CircularLoading";
import useForm from "@/hooks/useForm";
import axios, { AxiosError } from "axios";
import { notify } from "@/utils/Toaster/notify";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("reset-token"));

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
  const forgotPasswordHandler = async () => {
    try {
      if (error || passwordError || confirmPasswordError) return;
      setLoading(true);
      const res = await axios.post(
        `${
          process.env.BACKEND_SERVER
        }/api/v1/users/reset-password/${searchParams.get("reset-token")}`,
        {
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setLoading(false);
      toast.remove();
      notify("Password reset successfully", "success", Infinity);
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
        Reset Password
      </h1>
      <h3 className="text text-blackish Abel mb-2  tracking-wide">
        Enter your new password below to complete the process. assistance.
      </h3>
      <form className="flex flex-col gap-2 w-full">
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

export default ResetPassword;
