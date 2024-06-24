import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import Preloader from "./components/ui/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { preloaderActions } from "./store/preloader/preloaderSlice";
import axios from "axios";
import { authActions } from "./store/auth/authSlice";
import { useNavigate } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { notificationsActions } from "./store/notifications/notificationsSlice";
import { notify } from "./utils/Toaster/notify";
import { INotification } from "./types/User";
import useSocket from "./store/useSocket";
import Model from "./pages/Model";
import Conference from "./components/dashboard/Conference";

function App() {
  const queryClient = useQueryClient();
  const socket = useSocket();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const { preloader } = useSelector((state: RootState) => state.preloader);
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  const { isLoading, isError } = useQuery({
    queryKey: ["validateUser"],
    queryFn: async () => {
      // if (location.pathname.includes("activate")) return;
      const res = await axios.get(
        `${process.env.BACKEND_SERVER}/api/v1/users/validate/`,
        {
          withCredentials: true,
        }
      );
      dispatch(
        authActions.setUser({
          user: res.data.data.user,
        })
      );
      console.log(res);
      return res.data;
    },
    retry: false,
    staleTime: Infinity,
  });

  const { isFetching: notificationsFetchingTrigger } = useQuery({
    queryKey: ["fetchNotifications"],
    queryFn: async () => {
      const res = await axios(
        `${process.env.BACKEND_SERVER}/api/v1/users/notifications/`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(
        notificationsActions.setNotifications({
          notifications: res.data.data.notifications,
        })
      );
      dispatch(
        notificationsActions.setNotificationPanner(res.data.data.panner)
      );
      return res.data.data.notifications;
    },
    enabled: isLoggedIn,
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
    dispatch(
      notificationsActions.setIsNotificationFetching(
        notificationsFetchingTrigger
      )
    );
  }, [notificationsFetchingTrigger, dispatch]);
  useEffect(() => {
    if (location.pathname.includes("dashboard") && !isLoggedIn && !isLoading) {
      history("/auth/login");
    }
    if (location.pathname.includes("conference") && !isLoggedIn && !isLoading) {
      history("/auth/login");
    }
    if (isLoggedIn && location.pathname.includes("auth") && !isLoading) {
      history("/dashboard/meetings");
    }
  }, [isLoggedIn, location, history, dispatch, isLoading]);

  console.log({ preloader });
  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });
    console.log("connected");
    //TODO: establish notifications subscription in here based on the upcoming connection invalidate queries
    socket.on("notification", async (notification: INotification) => {
      console.log("Received notification:", notification);
      if (notification.type === "meetingInvitation") {
        await queryClient.invalidateQueries({
          queryKey: ["UserMeetingInvitations"],
        });
        notify(notification.message, "success", Infinity);
      }
      if (notification.type === "meetingInvitationAccepted") {
        await queryClient.invalidateQueries({
          queryKey: ["fetchMeetings"],
        });
        notify(notification.message, "success", Infinity);
      }
      if (notification.type === "friendshipAccepted") {
        await queryClient.invalidateQueries({
          queryKey: ["friendships"],
        });
        notify(notification.message, "success", Infinity);
      }
      if (notification.type === "friendshipRequest") {
        await queryClient.invalidateQueries({
          queryKey: ["friendshipRequests"],
        });
        notify(notification.message, "success", Infinity);
      }
      if (notification.type === "meetingInvitationRejected") {
        await queryClient.invalidateQueries({
          queryKey: ["friendshipRequests"],
        });
        notify(notification.message, "inform", Infinity);
      }
      dispatch(notificationsActions.pushNotification({ notification }));
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });

    return () => {
      socket.disconnect();
    };
  }, [isLoggedIn, user, queryClient, dispatch, socket]);
  return (
    <>
      <Toaster position="top-center" gutter={8} reverseOrder={true} />
      <Preloader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/:authParam" element={<Auth />} />
        <Route path="/auth/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* <Route path="/model" element={<Model />} /> */}
        <Route
          path="/dashboard/"
          element={<Navigate to="/dashboard/meetings" replace />}
        />
        <Route path="/conference/:conferenceId" element={<Conference />} />
        <Route path="/model" element={<Model />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
