import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import Preloader from "./components/UI/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "./store";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { preloaderActions } from "./store/preloader/preloaderSlice";
import axios from "axios";
import { authActions } from "./store/auth/authSlice";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

import Template from "./pages/Template";
import MinAuthDummy from "./components/Auth/MinAuthDummy";


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const { preloader } = useSelector((state: RootState) => state.preloader);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const { isLoading, isError } = useQuery({
    queryKey: ["validateUser"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.BACKEND_SERVER}/api/v1/users/validate/`,
        {
          withCredentials: true,
        }
      );
      dispatch(
        authActions.setUser({
          user: res.data.user,
        })
      );
      return res.data;
    },
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(preloaderActions.setPreloader(true));
    } else {
      setTimeout(() => {
        dispatch(preloaderActions.setPreloader(false));
      }, 1500);
    }
  }, [isLoading, isError, history, dispatch]);
  useEffect(() => {
    if (location.pathname.includes("dashboard") && !isLoggedIn && !isLoading) {
      history("/auth/login");
    }
    if (isLoggedIn && location.pathname.includes("auth") && !isLoading) {
      history("/dashboard/meetings");
    }
  }, [isLoggedIn, location, history, dispatch, isLoading]);

  console.log({ preloader });

  return (
    <>
      <Toaster position="top-center" gutter={8} reverseOrder={true} />
      <Preloader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/:authParam" element={<Auth />} />
        <Route path="/auth/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/dashboard/:section" element={<Dashboard />} />
        <Route
          path="/dashboard/"
          element={<Navigate to="/dashboard/meetings" replace />}
        />
  

      </Routes>
    </>
  );
}

export default App;
