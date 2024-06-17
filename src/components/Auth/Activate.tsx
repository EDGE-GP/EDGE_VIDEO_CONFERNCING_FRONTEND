import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import CircularLoading from "../ui/CircularLoading";
import { notify } from "@/utils/Toaster/notify";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth/authSlice";

const Activate = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();

  const { isLoading, error, isSuccess, data } = useQuery({
    queryKey: ["activateEmail"],
    queryFn: async () => {
      // if (location.pathname.includes("activate")) return;
      const token = params.get("token");
      console.log({ token });
      if (!token) return;
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/users/activate`,
        {
          token,
        }
      );
      console.log({ res });
      dispatch(authActions.setUser({ user: res.data.data.user }));
      notify("Your email was activated successfully", "success", Infinity);

      return res.data;
    },
    retry: false,
  });

  console.log({ data, error });
  return (
    <>
      {isLoading ? (
        <div className="w-[23rem] h-full flex flex-col gap-3 items-start text-start justify-center">
          <div className="w-full h-full">
            <CircularLoading button={false} />
          </div>
        </div>
      ) : isSuccess ? (
        <Navigate to={"/dashboard/meetings"} />
      ) : (
        <div className="w-[23rem] h-full flex flex-col gap-3 items-start text-start justify-center">
          <div className="w-full abel text-center">{error?.message}</div>
        </div>
      )}
    </>
  );
};

export default Activate;
