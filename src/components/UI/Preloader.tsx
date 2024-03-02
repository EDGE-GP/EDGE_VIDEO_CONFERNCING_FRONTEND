import React, { useEffect, useState } from "react";
import classes from "./Preloader.module.css";
import preloaderImg from "../../assets/edge.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Preloader = () => {
  const preloader = useSelector(
    (state: RootState) => state.preloader.preloader
  );
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!preloader) {
      setTimeout(() => {
        setHide(true);
      }, 300);
    }
  }, [preloader]);
  return (
    <>
      <div
        className={`${classes["preloader--container"]} ${hide && "z-[-1]"} ${
          !preloader && `${classes["fade-out"]} `
        }`}
      >
        <img src={preloaderImg} className={classes.box} alt="" />
      </div>
    </>
  );
};

export default Preloader;
