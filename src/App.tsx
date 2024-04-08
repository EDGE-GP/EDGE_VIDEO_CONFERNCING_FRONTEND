import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import Preloader from "./components/UI/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { preloaderActions } from "./store/preloader/preloaderSlice";
import axios from "axios";
import { authActions } from "./store/auth/authSlice";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { preloader } = useSelector((state: RootState) => state.preloader);
  console.log({ preloader });
  useEffect(() => {
    setTimeout(() => {
      dispatch(preloaderActions.setPreloader(false));
    }, 1500);
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
    // logoutUser();
  }, []);

  return (
    <>
      <Toaster position="top-center" gutter={8} reverseOrder={true} />
      <Preloader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/:authParam" element={<Auth />} />
        <Route path="/dashboard/:section" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
