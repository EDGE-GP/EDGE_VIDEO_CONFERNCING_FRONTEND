import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster, useToaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import Preloader from "./components/UI/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { preloaderActions } from "./store/preloader/preloaderSlice";
import axios from "axios";
import { authActions } from "./store/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { preloader } = useSelector((state: RootState) => state.preloader);
  console.log({ preloader });
  useEffect(() => {
    const validateUser = async () => {
      try {
        const res = await axios(
          `${process.env.BACKEND_SERVER}/api/v1/users/validate/`,
          {
            withCredentials: true,
          }
        );
        console.log(res);
        dispatch(
          authActions.setUser({
            user: res.data.user,
          })
        );
        setTimeout(() => {
          dispatch(preloaderActions.setPreloader(false));
        }, 1000);
      } catch (err) {
        console.log(err);
        history("/auth/login");
        setTimeout(() => {
          dispatch(preloaderActions.setPreloader(false));
        }, 1000);
      }
    };
    const logoutUser = async () => {
      try {
        const res = await axios(
          `${process.env.BACKEND_SERVER}/api/v1/users/logout/`,
          {
            withCredentials: true,
          }
        );
        console.log(res);
        dispatch(authActions.logout());
        setTimeout(() => {
          dispatch(preloaderActions.setPreloader(false));
        }, 1000);
      } catch (err) {
        console.log(err);
        history("/auth/login");
        setTimeout(() => {
          dispatch(preloaderActions.setPreloader(false));
        }, 1000);
      }
    };
    validateUser();
  }, []);

  return (
    <>
      <Toaster position="top-center" gutter={8} reverseOrder={true} />
      <Preloader loading={preloader} />
      <Routes>
        <Route path="/" element={<Preloader loading={preloader} />} />
        <Route path="/auth/:authParam" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
