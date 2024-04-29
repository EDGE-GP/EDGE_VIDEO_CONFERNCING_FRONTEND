import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const CircularLoading: React.FC<{ button: boolean }> = ({ button }) => {
  return (
    <div
      className={`flex items-center justify-center font-[400] flex-col w-full h-full`}
    >
      <CircularProgress
        color="inherit"
        size={`${button ? "22px" : "44px"}`}
        className=""
      />
      {/* <p>{panner}...</p> */}
    </div>
  );
};
export default CircularLoading;
