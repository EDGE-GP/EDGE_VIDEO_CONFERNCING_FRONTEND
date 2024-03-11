import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/LandingPage/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { useDispatch } from "react-redux";
import { preloaderActions } from "../store/preloader/preloaderSlice";
import background from "../assets/header.svg";
import edgeLogo from "../assets/edge.png";
import { useInView } from "framer-motion";
import robotIcon from "../assets/robot.png";
import signLanguageIcon from "../assets/sign.png";
import repeatIcon from "../assets/repeat.png";
import communicationIcon from "../assets/communication.png";
import { motion } from "framer-motion";
import worldMap from "../assets/world-map_image.jpg";
import ambition from "../assets/ambition.svg";
// import landingUser1 from "../assets/landing-user-1.png";
// import landingUser2 from "../assets/landing-user-2.png";
// import landingUser3 from "../assets/landing-user-3.png";
// import landingUser4 from "../assets/landing-user-4.png";
// import landingUser5 from "../assets/landing-user-5.png";
// import landingUser6 from "../assets/landing-user-6.png";

const LandingPage = () => {
  const dispatch = useDispatch();
  // const { ref, inView, entry } = useInView({
  //   // threshold: 0.675,
  //   initialInView: true,
  // });
  const rootElement = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootElement, { amount: 0.88 });
  const [startOnHover, setStartOnHover] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      dispatch(preloaderActions.setPreloader(false));
    }, 1500);
  }, []);
  return (
    <div className="relative ">
      <Navbar intersected={!isInView} />
      <div
        ref={rootElement}
        className="pt-[4rem]  flex container bg-white   px-24  justify-between background-pattern w-screen h-screen  items-center"
      >
        <div className="flex flex-col w-1/2 h-full justify-center items-start">
          <h1 className="text-[4rem] abel h-[5.8rem]">
            <Typewriter
              words={["Uniting The World", "Where Every Hand Speaks"]}
              loop
              cursorBlinking={false}
              //   cursor
              typeSpeed={50}
              delaySpeed={1500}
              deleteSpeed={40}
            />
          </h1>
          <h1 className="text-[4rem] abel leading-[5.8rem]">
            Empowering Connections Amplifying Voices
          </h1>
          <div className="w-full flex justify-start gap-x-6 mt-4">
            <button
              onMouseEnter={() => {
                setStartOnHover(true);
              }}
              onMouseLeave={() => {
                setStartOnHover(false);
              }}
              className="flex gap-x-2 items-center abel h-[2.5rem] hover:text-gray-300 transition-all text-white black-gradient rounded-full card-shadow px-8"
            >
              <span>Start for free</span>
              <svg
                viewBox="-4.5 0 20 20"
                width={12}
                height={12}
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-305.000000, -6679.000000)"
                      fill={startOnHover ? "#d1d5db" : "#fff"}
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                          id="arrow_right-[#336]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <a
              href="#"
              className="abel flex gap-x-2 text-[#212121] underline-offset-[6px] font-semibold h-[2.5rem]  items-center"
            >
              <svg
                fill="#000000"
                height="16"
                width="16"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M498.095,198.122c0-25.763-9.68-50.313-27.257-69.131c-13.197-14.129-29.915-24.039-48.274-28.848 c0.253-2.749,0.397-5.521,0.397-8.313C422.962,41.194,381.768,0,331.133,0C300.099,0,272.631,15.49,256,39.129 C239.369,15.49,211.901,0,180.867,0c-50.635,0-91.828,41.194-91.828,91.828c0,2.794,0.145,5.565,0.397,8.313 c-18.359,4.808-35.075,14.719-48.274,28.848c-17.578,18.819-27.257,43.37-27.257,69.132c0,21.486,6.731,41.427,18.185,57.837 c-11.804,16.895-18.185,37.001-18.185,57.919c0,46.95,32.11,86.538,75.522,97.967c-0.249,2.761-0.39,5.537-0.39,8.327 c0,50.635,41.194,91.828,91.828,91.828c31.035,0,58.503-15.49,75.133-39.129C272.631,496.51,300.099,512,331.133,512 c50.635,0,91.828-41.194,91.828-91.828c0-2.788-0.14-5.565-0.39-8.327c43.412-11.429,75.522-51.016,75.522-97.967 c0-20.919-6.382-41.025-18.185-57.919C491.365,239.549,498.095,219.608,498.095,198.122z M239.304,343.088v77.084 c0,32.221-26.216,58.437-58.437,58.437c-32.223,0-58.437-26.216-58.437-58.437c0-1.771,0.088-3.532,0.245-5.284 c25.807-1.92,50.123-13.714,67.616-33.029l-24.749-22.417c-12.857,14.195-31.206,22.337-50.343,22.337 c-37.442,0-67.902-30.461-67.902-67.901c0-11.892,3.075-23.392,8.834-33.519c16.639,11.985,37.042,19.055,59.068,19.055v-33.391 c-37.442,0-67.902-30.461-67.902-67.901c0-31.399,21.722-58.325,51.228-65.815c10.151,20.567,27.843,37.177,50.093,45.523 l11.728-31.264c-22.678-8.507-37.916-30.504-37.916-54.737c0-32.223,26.216-58.437,58.437-58.437s58.437,26.216,58.437,58.437 v77.084v23.211h-13.79v-23.211h-33.391v23.211h-23.211v33.391h23.211v13.79h-23.211v33.391h23.211v13.789h-23.211v33.391h23.211 v23.211h33.391v-23.211h13.79V343.088z M225.516,286.485v-60.969h60.969v60.969H225.516z M455.869,280.359 c5.759,10.128,8.834,21.628,8.834,33.519c0,37.442-30.461,67.901-67.902,67.901c-19.137,0-37.486-8.141-50.343-22.337 L321.71,381.86c17.494,19.314,41.809,31.107,67.616,33.029c0.157,1.751,0.245,3.513,0.245,5.284 c0,32.223-26.216,58.437-58.437,58.437s-58.438-26.214-58.438-58.437v-77.084v-23.211h13.789v23.211h33.391v-23.211h23.211 v-33.391h-23.211v-13.789h23.211v-33.391h-23.211v-13.79h23.211v-33.391h-23.211v-23.211h-33.391v23.211h-13.789v-23.211V91.828 c0-32.223,26.216-58.437,58.437-58.437s58.437,26.214,58.437,58.437c0,24.232-15.238,46.229-37.916,54.737l11.728,31.264 c22.251-8.347,39.942-24.957,50.094-45.523c29.506,7.491,51.228,34.416,51.228,65.815c0,37.441-30.461,67.901-67.902,67.901 v33.391C418.827,299.414,439.23,292.343,455.869,280.359z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span>Discover our AI asistant</span>
            </a>
          </div>
          <div className="w-full px-2 flex justify-start  mt-4">
            <p className="abel">
              Start right away and head to the dashboard! Experience seamless
              video conferencing with integrated two-way sign language
              recognition and gesture avatar capabilites.
            </p>
          </div>
        </div>
        <div className="w-1/2  flex pl-8 h-full relative justify-center items-center ">
          {/* <div className="top-[64%] left-[40%] absolute">
            <img src={eSign} className=" w-[64px] h-[64px] " alt="" />
          </div> */}
          <img src={background} className="h-[40rem]" alt="" />
          {/* <div className="card-shadow h-[24.9rem] w-[34rem]  px-4 py-4    bg-white rounded-[14px]">
            <div className="w-full h-[80%] grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-3">
              <div className="col-span-1 row-span-1 bg-[#FF9C66] rounded-[14px]">
                <img src={landingUser1} alt="" className="w-full h-full" />
              </div>
              <div className="col-span-1 row-span-1 bg-[#D6BAFB] rounded-[14px]">
                <img src={landingUser2} alt="" className="w-full h-full" />
              </div>
              <div className="col-span-1 row-span-1 bg-[#ACDB79] rounded-[14px]">
                <img src={landingUser3} alt="" className="w-full h-full" />
              </div>
              <div className="col-span-1 row-span-1 bg-[#B3B8DC] rounded-[14px]">
                <img src={landingUser6} alt="" className="w-full h-full" />
              </div>
              <div className="col-span-1 row-span-1 bg-[#FECA4A] rounded-[14px]">
                <img src={landingUser5} alt="" className="w-full h-full" />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <motion.div
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        variants={{
          initial: {
            opacity: 0,
            y: 100,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        className="  pb-[3rem] w-screen px-24 relative"
      >
        {/*  */}
        <div className="w-full flex relative">
          <img
            src={edgeLogo}
            alt=""
            className="w-[15rem] brightness-0 invert-1"
          />
        </div>
        <div className="gap-x-20 flex justify-between items-center w-full ">
          <div className="h-full flex flex-col justify-center w-1/2 relative">
            <h1 className="text-[3rem] abel ">
              Empowerment Through Technology
            </h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-[3rem] gap-x-8  w-full mt-8">
              <div className="col-span-1 row-span-1 flex flex-col h-full w-full">
                <div className=" flex items-center justify-start gap-x-2 w-full ">
                  <img
                    src={signLanguageIcon}
                    className="brightness-0 w-6 h-6 invert-1"
                    alt=""
                  />
                  <h1 className="text-xl abel"> Sign Language Recognition</h1>
                </div>
                <div className="mt-2 w-full">
                  <p className="abel">
                    Experience flawless sign language translation through our
                    cutting-edge technology, ensuring clear communication for
                    all participants.
                  </p>
                </div>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col h-full w-full">
                <div className=" flex items-center justify-start gap-x-2 w-full ">
                  <img
                    src={robotIcon}
                    className="brightness-0 w-6 h-6 invert-1"
                    alt=""
                  />
                  <h1 className="text-xl abel">
                    {" "}
                    Avatar Assisted Conversations
                  </h1>
                </div>
                <div className="mt-2 w-full">
                  <p className="abel text-pretty">
                    Facilitating effortless conversations for the deaf community
                    worldwide through AI-assisted avatars, bridging language
                    barriers.
                  </p>
                </div>
              </div>
              <div className="col-span-1 row-span-1 flex flex-col h-full w-full">
                <div className=" flex items-center justify-start gap-x-2 w-full ">
                  <img
                    src={repeatIcon}
                    className="brightness-0 w-6 h-6 invert-1"
                    alt=""
                  />
                  <h1 className="text-xl abel"> Meeting Memory Lane</h1>
                </div>
                <div className="mt-2 w-full">
                  <p className="abel text-pretty">
                    Keep track of important details with our Meeting Minutes
                    feature, automatically saving and organizing every word said
                    during conversations.
                  </p>
                </div>
              </div>

              <div className="col-span-1 row-span-1 flex flex-col h-full w-full">
                <div className=" flex items-center justify-start gap-x-2 w-full ">
                  <img
                    src={communicationIcon}
                    className="brightness-0 w-6 h-6 invert-1"
                    alt=""
                  />
                  <h1 className="text-xl abel">Effortless Communication</h1>
                </div>
                <div className="mt-2 w-full">
                  <p className="abel text-">
                    Achieve unparalleled clarity and cohesion in meetings with
                    our seamlessly integrated two-way sign language recognition
                    conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30rem] flex flex-col justify-center items-center w-1/2  relative">
            <img src={worldMap} className="w-full" alt="" />
            <span className="top-0  right-[-4rem] absolute">
              <svg
                width="64"
                height="64"
                viewBox="0 0 542 547"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M264.882 1.00718C310.395 45.4619 337.13 109.041 336.371 171.265C336.027 206.192 326.881 240.642 310.963 271.383C345.185 302.082 366.691 347.12 365.798 392.447C364.429 455.805 318.943 514.058 257.762 530.503L253.035 515.017C307.652 500.302 348.314 448.202 349.641 391.392C350.416 351.891 332.252 312.619 303.115 285.201C291.577 303.82 277.477 320.619 261.102 334.85C236.358 356.208 196.278 373.909 164.278 353.962C142.412 340.217 131.626 310.429 139.309 284.624C146.21 261.783 166.513 243.28 192.211 236.216C219.881 228.833 246.658 235.51 264.145 242.29C276.137 247.089 287.356 253.214 297.803 260.666C311.852 232.964 319.691 201.696 320.052 170.403C320.704 112.368 295.91 53.3797 253.634 11.9715L264.882 1.00718ZM168.603 337.845C169.803 338.852 171.203 340.027 172.565 340.841C196.955 356.047 229.621 340.68 250.2 323.066C266.089 309.415 279.503 293.028 290.392 275.181C280.708 268.039 270.05 262.056 259.021 257.735C243.619 251.719 220.577 245.873 197.175 252.231C176.594 257.665 160.457 272.424 155.035 290.254C149.862 306.976 155.805 327.103 168.603 337.845Z"
                  fill="#212121"
                />
              </svg>
            </span>

            <span className="bottom-0 rotate-180 left-[-4rem] absolute">
              <svg
                width="64"
                height="64"
                viewBox="0 0 542 547"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M264.882 1.00718C310.395 45.4619 337.13 109.041 336.371 171.265C336.027 206.192 326.881 240.642 310.963 271.383C345.185 302.082 366.691 347.12 365.798 392.447C364.429 455.805 318.943 514.058 257.762 530.503L253.035 515.017C307.652 500.302 348.314 448.202 349.641 391.392C350.416 351.891 332.252 312.619 303.115 285.201C291.577 303.82 277.477 320.619 261.102 334.85C236.358 356.208 196.278 373.909 164.278 353.962C142.412 340.217 131.626 310.429 139.309 284.624C146.21 261.783 166.513 243.28 192.211 236.216C219.881 228.833 246.658 235.51 264.145 242.29C276.137 247.089 287.356 253.214 297.803 260.666C311.852 232.964 319.691 201.696 320.052 170.403C320.704 112.368 295.91 53.3797 253.634 11.9715L264.882 1.00718ZM168.603 337.845C169.803 338.852 171.203 340.027 172.565 340.841C196.955 356.047 229.621 340.68 250.2 323.066C266.089 309.415 279.503 293.028 290.392 275.181C280.708 268.039 270.05 262.056 259.021 257.735C243.619 251.719 220.577 245.873 197.175 252.231C176.594 257.665 160.457 272.424 155.035 290.254C149.862 306.976 155.805 327.103 168.603 337.845Z"
                  fill="#212121"
                />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
      <div className="px-24 py-[1rem] w-screen h-screen  justify-between relative">
        <h1 className="text-[3rem] abel max-w-[60%] leading-[4rem]">
          Edge Aims to Enhance Communication amoung communities
        </h1>
        <div className="flex w-full justify-between mt-8 items-center">
          <img src={ambition} className=" w-[38%]" alt="" />
          <div className="w-[45rem] h-[28rem] grid grid-cols-3 grid-rows-2">
            <div className="col-span-1 row-span-1 border-[#212121] "></div>
            <div className="col-span-1 row-span-1 border-[#212121] border-t-2 border-l-2 bg-[#] rounded-tl-[20px]"></div>
            <div className="col-span-1 row-span-1 border-[#212121] border-t-2 border-l-2 border-r-2 rounded-tr-[20px]"></div>
            <div className="col-span-1 row-span-1 border-[#212121] border-l-2 border-b-2 border-t-2 rounded-l-[20px] bg-[#]"></div>
            <div className="col-span-1 row-span-1 border-[#212121] border-l-2 border-t-2 border-b-2"></div>
            <div className="col-span-1 row-span-1 border-[#212121] border-2 rounded-br-[20px] bg-[#212121]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
