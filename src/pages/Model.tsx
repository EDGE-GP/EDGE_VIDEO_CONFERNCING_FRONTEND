import React, { useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
const unityContent = new UnityContent(
  "src/static/avatar/build/new final build.json",
  "src/static/avatar/build/UnityLoader.js"
);
const Model = () => {
  useEffect(() => {
    unityContent.on("progress", (progress: number) => {
      console.log(`Unity progress: ${progress * 100}%`);
    });

    unityContent.on("loaded", () => {
      console.log("Unity loaded");
    });
  }, []);

  const sendMessageToUnity = () => {
    unityContent.send(
      "Avatar",
      "PlayAnimation",
      "0289,0290,0293"
    );
  };
  return (
    <div>
      <Unity unityContent={unityContent} />
      <button onClick={sendMessageToUnity}>Play Animation</button>
    </div>
  );
};

export default Model;
