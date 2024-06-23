import React, { useEffect, useRef } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent(
  "../../src/static/avatar/build/new final build.json",
  "../../src/static/avatar/build/UnityLoader.js"
);

const Avatar: React.FC<{ words: string }> = ({ words }) => {
  const unityRef = useRef(null);
  console.log("Avatar words: ", words);
  useEffect(() => {
    // Ensure the Unity WebGL component is correctly targeted and styled
    const unityElement = document.getElementById("__ReactUnityWebGL");
    if (unityElement) {
      unityElement.style.pointerEvents = "none";
    }
  }, []);
  useEffect(() => {
    // Register Unity progress event
    unityContent.on("progress", (progress: number) => {
      console.log(`Unity progress: ${progress * 100}%`);
    });

    // Register Unity loaded event
    unityContent.on("loaded", () => {
      console.log("Unity loaded");
      setTimeout(() => {
        sendMessageToUnity(words);
      }, 2500);
    });
  }, [words]);

  useEffect(() => {
    console.log("should send to unity", words);
    sendMessageToUnity(words);
  }, [words]);

  const sendMessageToUnity = (message: string) => {
    unityContent.send("Avatar", "PlayAnimation", message);
  };
  useEffect(() => {
    console.log({ unityRef: unityRef.current });
  }, [unityRef]);

  return (
    <div
      onKeyDown={(e) => e.stopPropagation()}
      className="absolute z-[50] top-0 left-0"
      style={{ pointerEvents: "none" }}
    >
      <Unity ref={unityRef} unityContent={unityContent} />
    </div>
  );
};

export default Avatar;
