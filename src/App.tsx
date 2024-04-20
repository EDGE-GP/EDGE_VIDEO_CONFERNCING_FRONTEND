import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const validateUser = async () => {
      try {
        dispatch(preloaderActions.setPreloader(true));
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
        }, 1500);
      } catch (err) {
        console.log(err);
        console.log("should redirect now");
        setTimeout(() => {
          dispatch(preloaderActions.setPreloader(false));
        }, 1500);
      }
    };
    validateUser();
  }, [dispatch]);
  const { preloader } = useSelector((state: RootState) => state.preloader);
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
