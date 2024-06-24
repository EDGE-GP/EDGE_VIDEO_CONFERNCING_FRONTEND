import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";

import {
  InRoomMessageInfo,
  ZegoUIKitPrebuilt,
} from "@zegocloud/zego-uikit-prebuilt";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { getIdByArabicWord } from "./meetings/signs.js";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index.js";
import Avatar from "./meetings/Avatar.tsx";
import { useBeforeUnload, useSearchParams } from "react-router-dom";
import useSocket from "@/store/useSocket.tsx";
import axios from "axios";

const Conference = () => {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  const history = useNavigate();
  const socket = useSocket();
  console.log({ socket });
  const { conferenceId } = useParams();
  const [text, setText] = useState("");
  const [hasJoined, setHasJoined] = useState(false);
  const meetingRef = useRef(null);
  const [avatarWord, setAvatarWord] = useState("");
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();
  console.log({
    conferenceId,
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
    user,
    isLoggedIn,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "ar-SA" });

  const meetingUi = async (element: HTMLElement) => {
    if (!user) return;
    const appId = 581235946;
    const server = "3dc895a6e927e3730e0789526267b918";
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      server,
      conferenceId || "",
      user?.id,
      user?.name
    );
    const zp = ZegoUIKitPrebuilt.create(token);
    // zp.addPlugins({ ZIM });
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },

      sharedLinks: [
        {
          name: "Join as a signer",
          url: `${process.env.BASE_URL}/conference/${conferenceId}?signer=true`,
        },
        {
          name: "Join as a speeker",
          url: `${process.env.BASE_URL}/conference/${conferenceId}?signer=false`,
        },
      ],

      lowerLeftNotification: {
        showUserJoinAndLeave: false,
        showTextChat: false,
      },

      onJoinRoom: () => {
        console.log("sending off");
        console.log({ socket });
        // publishJoin();
        setHasJoined(true);
        startListening();
      },
      onLeaveRoom: () => {
        console.log("return to home screen clicked");

        setHasJoined(false);
      },
      showLeaveRoomConfirmDialog: true,

      showLeavingView: true,
      onReturnToHomeScreenClicked: () => {
        history(`/dashboard/meetings?rating=${conferenceId}`);
        history(0);
        console.log("return to home screen clicked");
      },
      onInRoomMessageReceived: (messageInfo: InRoomMessageInfo) => {
        console.warn("onInRoomMessageReceived", messageInfo);
      },
      onUserLeave: (user) => {
        console.warn("onUserLeave", user);
      },
    });

    // ui.on("messageSent", () => {});
  };
  useEffect(() => {
    if (meetingRef.current) {
      meetingUi(meetingRef.current);
    }
  }, [meetingRef.current, user, isLoggedIn, conferenceId, socket, meetingUi]);

  useEffect(() => {
    if (hasJoined) {
      console.log({ socket });
      socket?.emit("joinMeeting", {
        conferenceId,
        signer: searchParams.get("signer") === "true" ? true : false || false,
      });
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        setTimeout(() => {
          console.log("Number 1 was pressed!");
          socket?.emit("sendSigns", {
            conferenceId,
            message: "السلام عليكم",
          });
        }, 5000);
      }
      if (event.key === "2") {
        setTimeout(() => {
          console.log("Number 2 was pressed!");
          socket?.emit("sendSigns", {
            conferenceId,
            message: "اهلا و سهلا",
          });
        }, 5000);
      }
      if (event.key === "3") {
        setTimeout(() => {
          console.log("Number 3 was pressed!");
          socket?.emit("sendSigns", {
            conferenceId,
            message: "يمين",
          });
        }, 5000);
      }
      if (event.key === "4") {
        setTimeout(() => {
          console.log("Number 4 was pressed!");
          socket?.emit("sendSigns", {
            conferenceId,
            message: "يسار",
          });
        }, 5000);
      }
      if (event.key === "5") {
        console.log("Number 5 was pressed!");
      }
      if (event.key === "6") {
        console.log("Number 6 was pressed!");
      }
      if (event.key === "7") {
        console.log("Number 7 was pressed!");
      }
      if (event.key === "8") {
        console.log("Number 8 was pressed!");
      }
      if (event.key === "9") {
        console.log("Number 9 was pressed!");
      }
      if (event.key === "0") {
        console.log("Number 0 was pressed!");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [socket, hasJoined, transcript, searchParams, conferenceId]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message = "Are you sure you want to leave?";
      event.preventDefault();
      event.returnValue = message; // For legacy browsers
      return message; // For modern browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", (event) => {
      const message = "Are you sure you want to leave?";
      event.preventDefault();
      return message;
    });

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", (event) => {
        const message = "Are you sure you want to leave?";
        event.preventDefault();
        history(`/dashboard/meetings?rating=${conferenceId}`);
        history(0);
        return message;
      });
    };
  }, [history]);
  useBeforeUnload((e) => {
    //prevent user from leaving the page without confirmation
    e.preventDefault();
  });
  useEffect(() => {
    console.log({ text });
    if (searchParams.get("signer") !== "true") return;
    const WordArray: string[] = [];

    text.split(" ").forEach((word: string, index: number) => {
      WordArray.push(word);
      console.log({ text, WordArray, word });
      const idSingle = getIdByArabicWord(word);
      if (idSingle !== null && index === text.split(" ").length - 1) {
        console.log({ word: `0${idSingle}` });
        setAvatarWord(`0${idSingle}`);
      }

      if (WordArray.length >= 2) {
        const combinedTwoWords = WordArray.slice(-2).join(" ");
        const idTwo = getIdByArabicWord(combinedTwoWords);
        if (idTwo !== null && index === text.split(" ").length - 1) {
          console.log({ word: `0${idTwo}` });

          setAvatarWord(`0${idTwo}`);
        }
      }
      if (WordArray.length >= 3) {
        const combinedThreeWords = WordArray.slice(-3).join(" ");
        const idThree = getIdByArabicWord(combinedThreeWords);
        if (idThree !== null && index === text.split(" ").length - 1) {
          console.log({ word: `0${idThree}` });
          setAvatarWord(`0${idThree}`);
        }
      }
      if (WordArray.length > 3) {
        WordArray.shift();
      }
    });

    //should be moved to transcript push
    if (transcript.length > 30) {
      setTimeout(() => {
        console.log("resetting");
        resetTranscript();
      }, 1800);
    }
  }, [resetTranscript, text, transcript]);

  useEffect(() => {
    // should send to sockets
    console.log({ transcript });
    if (!socket || !transcript || searchParams.get("signer") === "true") return;

    socket?.emit("sendSpeech", {
      conferenceId,
      message: transcript,
    });
  }, [transcript, socket]);
  useEffect(() => {
    socket?.on("speechMessage", (payload: { message: string }) => {
      console.log(
        `recieve from sockets ${payload.message} as a speech message`
      );
      setText(payload.message);
      console.log({ message: payload.message });
    });
  }, [socket, text]);
  const pushMessage = async () => {
    try {
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/push-message`,
        {
          content: text,
          conferenceId,
          isInterpreted: true,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!socket || searchParams.get("signer") === "true") return;
    socket.on("signsMessage", (payload: { message: string }) => {
      console.log(`recieve from sockets ${payload.message} as a sign message`);
      // setText(payload.message);
      console.log({ message: payload.message });
      setText(text + " " + payload.message);
      if (text.split(" ").length > 10) {
        pushMessage();
        setText(payload.message);
      }
    });
  }, [socket, text]);
  return (
    <>
      <div
        ref={meetingRef}
        style={{ width: "100vw", height: "100vh", zIndex: "9999" }}
      ></div>
      {hasJoined && text && (
        <div className="absolute bottom-[8rem] w-full right-0 z-[9999] flex justify-center">
          <p className="text-white bg-[rgba(0,0,0,0.5)]  px-4 rounded-lg py-2 ">
            {text}
          </p>
        </div>
      )}
      {hasJoined && searchParams.get("signer") === "true" && (
        <Avatar words={avatarWord} />
      )}
    </>
  );
};

export default Conference;
