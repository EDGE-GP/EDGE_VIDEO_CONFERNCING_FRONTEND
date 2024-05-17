import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import Preloader from "./components/ui/Preloader";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import io from "socket.io-client";

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

function App() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const { preloader } = useSelector((state: RootState) => state.preloader);
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

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
          user: res.data.data.user,
        })
      );
      console.log(res);
      return res.data;
    },
    retry: false,
    staleTime: Infinity,
  });

  const {
    isFetching: notificationsFetchingTrigger,
  } = useQuery({
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
    if (isLoggedIn && location.pathname.includes("auth") && !isLoading) {
      history("/dashboard/meetings");
    }
  }, [isLoggedIn, location, history, dispatch, isLoading]);

  console.log({ preloader });
  useEffect(() => {
    if (!isLoggedIn) return;

    const socket = io(`${process.env.BACKEND_SERVER}`, {
      query: {
        id: user?.id,
      },
    });

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });
    //TODO: establish notifications subscription in here based on the upcoming connection invalidate queries
    socket.on("notification", async (notification: INotification) => {
      console.log("Received notification:", notification);
      if (notification.type === "meetingInvitation") {
        await queryClient.invalidateQueries({
          queryKey: ["UserMeetingInvitations"],
        });
        notify(notification.message, "success", 3000);
      }
      if (notification.type === "meetingInvitationAccepted") {
        await queryClient.invalidateQueries({
          queryKey: ["fetchMeetings"],
        });
        notify(notification.message, "success", 3000);
      }
      if (notification.type === "friendshipAccepted") {
        await queryClient.invalidateQueries({
          queryKey: ["friendships"],
        });
        notify(notification.message, "success", 3000);
      }
      if (notification.type === "friendshipRequest") {
        await queryClient.invalidateQueries({
          queryKey: ["friendshipRequests"],
        });
        notify(notification.message, "success", 3000);
      }
      if (notification.type === "meetingInvitationRejected") {
        await queryClient.invalidateQueries({
          queryKey: ["friendshipRequests"],
        });
        notify(notification.message, "inform", 3000);
      }
      dispatch(notificationsActions.pushNotification({ notification }));
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });

    return () => {
      socket.disconnect();
    };
  }, [isLoggedIn, user, queryClient, dispatch]);
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
