import { useRef, useState } from "react";
import Navbar from "../components/LandingPage/Navbar";
import { Typewriter } from "react-simple-typewriter";
import background from "../assets/header.svg";
import edgeLogo from "../assets/edge.png";
import { useInView } from "framer-motion";
import robotIcon from "../assets/robot.png";
import signLanguageIcon from "../assets/sign.png";
import voiceRecognitionIcon from "../assets/voice-recognition.png";
import { motion } from "framer-motion";
import startUp from "../assets/startup_2.svg";
import ambition from "../assets/ambition.svg";
import measure from "../assets/airmeasure.jpg";
import csort from "../assets/csort.svg";
import dummyAccount1 from "../assets/account4.png";
import dummyAccount2 from "../assets/account6.png";
import dummyAccount3 from "../assets/account7.jpg";
import dummyAccount4 from "../assets/account5.png";
import dummyAccount5 from "../assets/account3.png";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const history = useNavigate();
  const rootElement = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootElement, { amount: 0.88 });
  const [startOnHover, setStartOnHover] = useState<boolean>(false);

  return (
    <div className="relative overflow-hidden md:overflow-auto">
      <Navbar intersected={!isInView} />
      <div
        ref={rootElement}
        className="md:pt-[4rem] pt-[8rem]  flex container flex-col md:flex-row  md:px-24 px-4 bg-white    justify-between background-pattern  border-[#212121] relative w-screen h-screen  items-center"
      >
        <div className="flex flex-col md:w-1/2  w-full h-full justify-center items-center md:items-start  pt-12 md:text-start text-center ">
          <h1 className="text-[2rem] md:text-[4rem] abel leading-[5.8rem]] md:w-auto h-[2rem] md:h-[5.8rem] ">
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
          <h1 className="text-[2rem] md:text-[4rem] abel md:leading-[5.8rem] leading-[3.3rem] pt-2">
            Empowering Connections Amplifying Voices
          </h1>
          <div className="w-full flex justify-start md:gap-x-6 gap-x-4 md:mt-4 mt-8">
            <button
              onClick={() => {
                history("/dashboard");
              }}
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
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
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
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          <div className="w-full px-2 flex justify-start  md:mt-4 mt-6">
            <p className="abel">
              Start right away and head to the dashboard! Experience seamless
              video conferencing with integrated two-way sign language
              recognition and gesture avatar capabilites.
            </p>
          </div>
        </div>
        <motion.div className="md:w-1/2 w-3/4 mt-2 flex pl-2 h-full relative justify-center items-center  ">
          <span className="bottom-[3rem] rotate-180 right-[6.8rem] absolute">
            <svg
              width="60"
              height="60"
              viewBox="0 0 75 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.324 6.65704C11.324 9.10904 9.33599 11.097 6.88299 11.097C4.43099 11.097 2.44299 9.10904 2.44299 6.65704C2.44299 4.20604 4.43099 2.21704 6.88299 2.21704C9.33599 2.21704 11.324 4.20604 11.324 6.65704Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.725 6.65704C31.725 9.10904 29.736 11.097 27.285 11.097C24.83 11.097 22.843 9.10904 22.843 6.65704C22.843 4.20604 24.83 2.21704 27.285 2.21704C29.736 2.21704 31.725 4.20604 31.725 6.65704Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.127 6.65704C52.127 9.10904 50.138 11.097 47.686 11.097C45.233 11.097 43.244 9.10904 43.244 6.65704C43.244 4.20604 45.233 2.21704 47.686 2.21704C50.138 2.21704 52.127 4.20604 52.127 6.65704Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68.086 3.75996C66.489 3.75996 65.189 5.05897 65.189 6.65797C65.189 8.25497 66.489 9.55397 68.086 9.55397C69.685 9.55397 70.985 8.25497 70.985 6.65797C70.985 5.05897 69.685 3.75996 68.086 3.75996ZM68.086 12.64C64.787 12.64 62.102 9.95697 62.102 6.65797C62.102 3.35697 64.787 0.672974 68.086 0.672974C71.386 0.672974 74.071 3.35697 74.071 6.65797C74.071 9.95697 71.386 12.64 68.086 12.64Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.88299 24.658C5.28499 24.658 3.98598 25.957 3.98598 27.555C3.98598 29.154 5.28499 30.453 6.88299 30.453C8.48099 30.453 9.77999 29.154 9.77999 27.555C9.77999 25.957 8.48099 24.658 6.88299 24.658ZM6.88299 33.541C3.58299 33.541 0.899994 30.857 0.899994 27.555C0.899994 24.257 3.58299 21.572 6.88299 21.572C10.184 21.572 12.867 24.257 12.867 27.555C12.867 30.857 10.184 33.541 6.88299 33.541Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.285 24.658C25.686 24.658 24.387 25.957 24.387 27.555C24.387 29.154 25.686 30.453 27.285 30.453C28.882 30.453 30.182 29.154 30.182 27.555C30.182 25.957 28.882 24.658 27.285 24.658ZM27.285 33.541C23.986 33.541 21.3 30.857 21.3 27.555C21.3 24.257 23.986 21.572 27.285 21.572C30.584 21.572 33.268 24.257 33.268 27.555C33.268 30.857 30.584 33.541 27.285 33.541Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.127 27.555C52.127 30.008 50.138 31.997 47.686 31.997C45.233 31.997 43.244 30.008 43.244 27.555C43.244 25.104 45.233 23.115 47.686 23.115C50.138 23.115 52.127 25.104 52.127 27.555Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72.528 27.555C72.528 30.008 70.54 31.997 68.086 31.997C65.635 31.997 63.645 30.008 63.645 27.555C63.645 25.104 65.635 23.115 68.086 23.115C70.54 23.115 72.528 25.104 72.528 27.555Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.324 48.453C11.324 50.907 9.33599 52.895 6.88299 52.895C4.43099 52.895 2.44299 50.907 2.44299 48.453C2.44299 46.001 4.43099 44.014 6.88299 44.014C9.33599 44.014 11.324 46.001 11.324 48.453Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.285 45.557C25.686 45.557 24.387 46.856 24.387 48.453C24.387 50.051 25.686 51.352 27.285 51.352C28.882 51.352 30.182 50.051 30.182 48.453C30.182 46.856 28.882 45.557 27.285 45.557ZM27.285 54.438C23.986 54.438 21.3 51.755 21.3 48.453C21.3 45.154 23.986 42.47 27.285 42.47C30.584 42.47 33.268 45.154 33.268 48.453C33.268 51.755 30.584 54.438 27.285 54.438Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.127 48.453C52.127 50.907 50.138 52.895 47.686 52.895C45.233 52.895 43.244 50.907 43.244 48.453C43.244 46.001 45.233 44.014 47.686 44.014C50.138 44.014 52.127 46.001 52.127 48.453Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68.086 45.557C66.489 45.557 65.189 46.856 65.189 48.453C65.189 50.051 66.489 51.352 68.086 51.352C69.685 51.352 70.985 50.051 70.985 48.453C70.985 46.856 69.685 45.557 68.086 45.557ZM68.086 54.438C64.787 54.438 62.102 51.755 62.102 48.453C62.102 45.154 64.787 42.47 68.086 42.47C71.386 42.47 74.071 45.154 74.071 48.453C74.071 51.755 71.386 54.438 68.086 54.438Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.88299 66.454C5.28499 66.454 3.98598 67.753 3.98598 69.353C3.98598 70.952 5.28499 72.2511 6.88299 72.2511C8.48099 72.2511 9.77999 70.952 9.77999 69.353C9.77999 67.753 8.48099 66.454 6.88299 66.454ZM6.88299 75.3371C3.58299 75.3371 0.899994 72.654 0.899994 69.353C0.899994 66.053 3.58299 63.368 6.88299 63.368C10.184 63.368 12.867 66.053 12.867 69.353C12.867 72.654 10.184 75.3371 6.88299 75.3371Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.285 66.454C25.686 66.454 24.387 67.753 24.387 69.353C24.387 70.952 25.686 72.2511 27.285 72.2511C28.882 72.2511 30.182 70.952 30.182 69.353C30.182 67.753 28.882 66.454 27.285 66.454ZM27.285 75.3371C23.986 75.3371 21.3 72.654 21.3 69.353C21.3 66.053 23.986 63.368 27.285 63.368C30.584 63.368 33.268 66.053 33.268 69.353C33.268 72.654 30.584 75.3371 27.285 75.3371Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.686 66.454C46.087 66.454 44.787 67.753 44.787 69.353C44.787 70.952 46.087 72.2511 47.686 72.2511C49.285 72.2511 50.584 70.952 50.584 69.353C50.584 67.753 49.285 66.454 47.686 66.454ZM47.686 75.3371C44.386 75.3371 41.701 72.654 41.701 69.353C41.701 66.053 44.386 63.368 47.686 63.368C50.985 63.368 53.67 66.053 53.67 69.353C53.67 72.654 50.985 75.3371 47.686 75.3371Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72.528 69.353C72.528 71.805 70.54 73.794 68.086 73.794C65.635 73.794 63.645 71.805 63.645 69.353C63.645 66.9 65.635 64.911 68.086 64.911C70.54 64.911 72.528 66.9 72.528 69.353Z"
                fill="#1B1A19"
              />
            </svg>
          </span>
          <img src={background} className="h-full w-full" alt="" />
        </motion.div>
      </div>
      <motion.div
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        variants={{
          initial: {
            opacity: 0,
            y: 50,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        className="md:px-24 px-4 pt-[3rem]  border-[#212121] relative w-screen  justify-between "
      >
        <h1 className="md:text-[3rem] text-[2rem] abel md:max-w-[60%] w-full md:leading-[4rem]">
          Building Bridges Aiming to Advance Community Communication
        </h1>
        <div className="flex w-full md:flex-row flex-col-reverse justify-between gap-x- mt-8 items-center">
          <motion.div
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            variants={{
              initial: {
                opacity: 0,
                y: 50,
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            className="relative  md:w-[40%] w-[90%] mt-6"
          >
            <span className="bottom-3 rotate-180 right-0 absolute">
              <svg
                width="60"
                height="60"
                viewBox="0 0 75 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.324 6.65704C11.324 9.10904 9.33599 11.097 6.88299 11.097C4.43099 11.097 2.44299 9.10904 2.44299 6.65704C2.44299 4.20604 4.43099 2.21704 6.88299 2.21704C9.33599 2.21704 11.324 4.20604 11.324 6.65704Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.725 6.65704C31.725 9.10904 29.736 11.097 27.285 11.097C24.83 11.097 22.843 9.10904 22.843 6.65704C22.843 4.20604 24.83 2.21704 27.285 2.21704C29.736 2.21704 31.725 4.20604 31.725 6.65704Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.127 6.65704C52.127 9.10904 50.138 11.097 47.686 11.097C45.233 11.097 43.244 9.10904 43.244 6.65704C43.244 4.20604 45.233 2.21704 47.686 2.21704C50.138 2.21704 52.127 4.20604 52.127 6.65704Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68.086 3.75996C66.489 3.75996 65.189 5.05897 65.189 6.65797C65.189 8.25497 66.489 9.55397 68.086 9.55397C69.685 9.55397 70.985 8.25497 70.985 6.65797C70.985 5.05897 69.685 3.75996 68.086 3.75996ZM68.086 12.64C64.787 12.64 62.102 9.95697 62.102 6.65797C62.102 3.35697 64.787 0.672974 68.086 0.672974C71.386 0.672974 74.071 3.35697 74.071 6.65797C74.071 9.95697 71.386 12.64 68.086 12.64Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.88299 24.658C5.28499 24.658 3.98598 25.957 3.98598 27.555C3.98598 29.154 5.28499 30.453 6.88299 30.453C8.48099 30.453 9.77999 29.154 9.77999 27.555C9.77999 25.957 8.48099 24.658 6.88299 24.658ZM6.88299 33.541C3.58299 33.541 0.899994 30.857 0.899994 27.555C0.899994 24.257 3.58299 21.572 6.88299 21.572C10.184 21.572 12.867 24.257 12.867 27.555C12.867 30.857 10.184 33.541 6.88299 33.541Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.285 24.658C25.686 24.658 24.387 25.957 24.387 27.555C24.387 29.154 25.686 30.453 27.285 30.453C28.882 30.453 30.182 29.154 30.182 27.555C30.182 25.957 28.882 24.658 27.285 24.658ZM27.285 33.541C23.986 33.541 21.3 30.857 21.3 27.555C21.3 24.257 23.986 21.572 27.285 21.572C30.584 21.572 33.268 24.257 33.268 27.555C33.268 30.857 30.584 33.541 27.285 33.541Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.127 27.555C52.127 30.008 50.138 31.997 47.686 31.997C45.233 31.997 43.244 30.008 43.244 27.555C43.244 25.104 45.233 23.115 47.686 23.115C50.138 23.115 52.127 25.104 52.127 27.555Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.528 27.555C72.528 30.008 70.54 31.997 68.086 31.997C65.635 31.997 63.645 30.008 63.645 27.555C63.645 25.104 65.635 23.115 68.086 23.115C70.54 23.115 72.528 25.104 72.528 27.555Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.324 48.453C11.324 50.907 9.33599 52.895 6.88299 52.895C4.43099 52.895 2.44299 50.907 2.44299 48.453C2.44299 46.001 4.43099 44.014 6.88299 44.014C9.33599 44.014 11.324 46.001 11.324 48.453Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.285 45.557C25.686 45.557 24.387 46.856 24.387 48.453C24.387 50.051 25.686 51.352 27.285 51.352C28.882 51.352 30.182 50.051 30.182 48.453C30.182 46.856 28.882 45.557 27.285 45.557ZM27.285 54.438C23.986 54.438 21.3 51.755 21.3 48.453C21.3 45.154 23.986 42.47 27.285 42.47C30.584 42.47 33.268 45.154 33.268 48.453C33.268 51.755 30.584 54.438 27.285 54.438Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.127 48.453C52.127 50.907 50.138 52.895 47.686 52.895C45.233 52.895 43.244 50.907 43.244 48.453C43.244 46.001 45.233 44.014 47.686 44.014C50.138 44.014 52.127 46.001 52.127 48.453Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M68.086 45.557C66.489 45.557 65.189 46.856 65.189 48.453C65.189 50.051 66.489 51.352 68.086 51.352C69.685 51.352 70.985 50.051 70.985 48.453C70.985 46.856 69.685 45.557 68.086 45.557ZM68.086 54.438C64.787 54.438 62.102 51.755 62.102 48.453C62.102 45.154 64.787 42.47 68.086 42.47C71.386 42.47 74.071 45.154 74.071 48.453C74.071 51.755 71.386 54.438 68.086 54.438Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.88299 66.454C5.28499 66.454 3.98598 67.753 3.98598 69.353C3.98598 70.952 5.28499 72.2511 6.88299 72.2511C8.48099 72.2511 9.77999 70.952 9.77999 69.353C9.77999 67.753 8.48099 66.454 6.88299 66.454ZM6.88299 75.3371C3.58299 75.3371 0.899994 72.654 0.899994 69.353C0.899994 66.053 3.58299 63.368 6.88299 63.368C10.184 63.368 12.867 66.053 12.867 69.353C12.867 72.654 10.184 75.3371 6.88299 75.3371Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.285 66.454C25.686 66.454 24.387 67.753 24.387 69.353C24.387 70.952 25.686 72.2511 27.285 72.2511C28.882 72.2511 30.182 70.952 30.182 69.353C30.182 67.753 28.882 66.454 27.285 66.454ZM27.285 75.3371C23.986 75.3371 21.3 72.654 21.3 69.353C21.3 66.053 23.986 63.368 27.285 63.368C30.584 63.368 33.268 66.053 33.268 69.353C33.268 72.654 30.584 75.3371 27.285 75.3371Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.686 66.454C46.087 66.454 44.787 67.753 44.787 69.353C44.787 70.952 46.087 72.2511 47.686 72.2511C49.285 72.2511 50.584 70.952 50.584 69.353C50.584 67.753 49.285 66.454 47.686 66.454ZM47.686 75.3371C44.386 75.3371 41.701 72.654 41.701 69.353C41.701 66.053 44.386 63.368 47.686 63.368C50.985 63.368 53.67 66.053 53.67 69.353C53.67 72.654 50.985 75.3371 47.686 75.3371Z"
                  fill="#1B1A19"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.528 69.353C72.528 71.805 70.54 73.794 68.086 73.794C65.635 73.794 63.645 71.805 63.645 69.353C63.645 66.9 65.635 64.911 68.086 64.911C70.54 64.911 72.528 66.9 72.528 69.353Z"
                  fill="#1B1A19"
                />
              </svg>
            </span>
            <img src={ambition} className="w-full" alt="" />
          </motion.div>
          <div className="md:w-[45rem] md:h-[28rem] grid md:grid-cols-3 md:grid-rows-2 ">
            <motion.div
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="col-span-1 flex items-center md:px-6 px-4 row-span-1 border-[#212121] "
            >
              <img
                src={edgeLogo}
                alt=""
                className="w-full  brightness-0 invert-1"
              />
            </motion.div>
            <motion.div
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className={`md:px-4 md:py-5 px-5 py-6 m-2 md:m-0 col-span-1 row-span-1 border-[#212121] bg-[#212121] text-white bg-[#] md:border-t-2 md:border-l-2 md:rounded-tl-[20px]  roundedbox  h-[12rem] md:h-auto  flex flex-col`}
            >
              <h1 className="text-xl abel font-semibold">
                Clear Communication Channels
              </h1>
              <div className="mt-4 w-full">
                <p className="abel text-pretty">
                  Clear channels ensure everyone's message gets across, making
                  communication effortless and inclusive.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className={`col-span-1 md:px-4 md:py-5 px-5 py-6 m-2 md:m-0 flex flex-col row-span-1 border-[#212121] relative  md:border-t-2 md:border-l-2 md:border-r-2 md:rounded-tr-[20px]  roundedbox  h-[12rem] md:h-auto `}
            >
              <span className="absolute top-[-3rem] rotate- right-[-3rem] ">
                <svg
                  width="61"
                  height="59"
                  viewBox="0 0 61 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5543 10.7784L48.4258 10.6141L48.59 34.4851L60.185 45.9218L59.8737 0.68438L14.6368 0.995669L24.5543 10.7784Z"
                    fill="#231F20"
                  />
                  <path
                    d="M49.7078 9.3142L50.0495 58.9669L0.0550232 9.65587L49.7078 9.3142ZM47.4247 52.749L47.1437 11.914L6.30864 12.195L47.4247 52.749Z"
                    fill="#231F20"
                  />
                </svg>
              </span>
              <h1 className="text-xl abel font-semibold">
                Visual Communication Support
              </h1>
              <div className="mt-4 w-full">
                <p className="abel text-pretty">
                  Visual tools support sign language, empowering the deaf
                  community to communicate effectively and comfortably.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className={`col-span-1 md:px-4 md:py-5 px-5 py-6 m-2 md:m-0 flex flex-col row-span-1 border-[#212121]  md:border-l-2 md:border-b-2 md:border-t-2 md:rounded-l-[20px] bg-[#] roundedbox   h-[12rem] md:h-auto `}
            >
              <h1 className="text-xl abel font-semibold">
                Seamless Interaction Design
              </h1>
              <div className="mt-4 w-full">
                <p className="abel text-pretty">
                  User-friendly interface ensures smooth communication,
                  effortlessly catering to diverse needs and preferences.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className={`col-span-1 md:px-4 md:py-5 px-5 py-6 m-2 md:m-0 flex flex-col  row-span-1 border-[#212121]  md:border-l-2 md:order-t-2 md:border-b-2 roundedbox   h-[12rem] md:h-auto `}
            >
              <h1 className="text-xl abel font-semibold">
                Conversation Archives on Demand
              </h1>
              <div className="mt-4 w-full">
                <p className="abel text-pretty">
                  Easily access past discussions, ensuring important details are
                  always at your fingertips for quick reference.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className={`col-span-1 md:px-4 md:py-5 px-5 py-6 m-2 md:m-0 flex flex-col row-span-1  border-[#212121] bg-[#212121] text-white md:border-2 md:rounded-br-[20px] roundedbox  h-[12rem] md:h-auto `}
            >
              <h1 className="text-xl abel font-semibold">
                Everyone Can Join In
              </h1>
              <div className="mt-4 w-full">
                <p className="abel text-pretty">
                  Clear channels ensure everyone's message gets across, making
                  communication effortless and inclusive.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        variants={{
          initial: {
            opacity: 0,
            y: 50,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        className="  pt-[3rem] w-screen  relative"
      >
        {/*  */}

        <div className=" w-full ">
          <div className="flex md:h-[70vh] md:px-24 px-4 gap-x-20 justify-between items-center md:w-full flex-col md:flex-row">
            <div className="h-full flex flex-col justify-center md:w-1/2 w-full relative mb-4">
              <div className="relative">
                <span className="absolute top-[-2.5rem]  left-[-2.5rem] ">
                  <svg
                    width="60"
                    height="61"
                    viewBox="0 0 60 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8293 36.266L11.051 12.395L34.9216 12.6167L46.5442 1.2081L1.30768 0.788007L0.8876 46.0241L10.8293 36.266Z"
                      fill="#231F20"
                    />
                    <path
                      d="M9.77207 11.0921L59.4238 11.5532L9.31098 60.7439L9.77207 11.0921ZM53.1643 14.0771L12.3301 13.6979L11.9509 54.5322L53.1643 14.0771Z"
                      fill="#231F20"
                    />
                  </svg>
                </span>
                <h1 className="text-[3rem] abel ">
                  Empowerment Through Technology
                </h1>
              </div>
              {/* <h3 className="text-xl abel capitalize">
              Experience the world through our innovative tech features.
            </h3> */}
              <div className="grid md:grid-cols-2 md:grid-rows-2 gap-y-[rem] gap-x-8  w-full mt-8">
                <motion.div
                  initial="initial"
                  viewport={{ once: true }}
                  whileInView="animate"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 50,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  className="col-span-1 row-span-1 flex flex-col h-full w-full  mt-5 mb-5 P  "
                >
                  <div className=" flex items-center justify-start gap-x-2 w-full ">
                    <img
                      src={signLanguageIcon}
                      className="brightness-0 w-6 h-6 invert-1"
                      alt=""
                    />
                    <h1 className="\ abel w-full md:text-xl text-[1.5rem]">
                      {" "}
                      Sign Language Recognition
                    </h1>
                  </div>
                  <div className="mt-2 w-full">
                    <p className="abel  text-[1.2rem] md:text-[1rem]">
                      Experience flawless sign language translation through our
                      cutting-edge technology, ensuring clear communication for
                      all participants.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial="initial"
                  viewport={{ once: true }}
                  whileInView="animate"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 50,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  className="col-span-1 row-span-1 flex flex-col h-full w-full  mt-5 mb-5  "
                >
                  <div className=" flex items-center justify-start gap-x-2 w-full ">
                    <img
                      src={voiceRecognitionIcon}
                      className="brightness-0 w-6 h-6 invert-1"
                      alt=""
                    />
                    <h1 className="md:text-xl text-[1.5rem] abel  ">
                      Voice Recognition Capabilities
                    </h1>
                  </div>
                  <div className="mt-2 w-full">
                    <p className="abel text-pretty  text-[1.2rem] md:text-[1rem]">
                      Experience flawless voice recognition for crystal-clear
                      communication, ensuring effortless understanding for
                      everyone involved.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial="initial"
                  viewport={{ once: true }}
                  whileInView="animate"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 50,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  className="col-span-1 row-span-1 flex flex-col h-full w-full mt-5 mb-5  "
                >
                  <div className=" flex items-center justify-start gap-x-2 w-full ">
                    <img
                      src={robotIcon}
                      className="brightness-0 w-6 h-6 invert-1"
                      alt=""
                    />
                    <h1 className=" abel w-[20rem] md:text-xl text-[1.5rem] ">
                      {" "}
                      Avatar Assisted Conversations
                    </h1>
                  </div>
                  <div className="mt-2 w-full">
                    <p className="abel text-pretty  text-[1.2rem] md:text-[1rem]">
                      Facilitating effortless conversations for the deaf
                      community worldwide through AI-assisted avatars, bridging
                      language barriers.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial="initial"
                  viewport={{ once: true }}
                  whileInView="animate"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 50,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  className="col-span-1 row-span-1 flex flex-col h-full w-full  mt-5 mb-5  "
                >
                  <div className=" flex items-center justify-start gap-x-2 w-full ">
                    <svg
                      className="rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 50 50"
                      stroke="#000"
                      strokeWidth={1}
                    >
                      <path d="M 20 4 C 15.054688 4 11 8.054688 11 13 L 11 35.5625 L 5.71875 30.28125 L 4.28125 31.71875 L 11.28125 38.71875 L 12 39.40625 L 12.71875 38.71875 L 19.71875 31.71875 L 18.28125 30.28125 L 13 35.5625 L 13 13 C 13 9.144531 16.144531 6 20 6 L 31 6 L 31 4 Z M 38 10.59375 L 37.28125 11.28125 L 30.28125 18.28125 L 31.71875 19.71875 L 37 14.4375 L 37 37 C 37 40.855469 33.855469 44 30 44 L 19 44 L 19 46 L 30 46 C 34.945313 46 39 41.945313 39 37 L 39 14.4375 L 44.28125 19.71875 L 45.71875 18.28125 L 38.71875 11.28125 Z"></path>
                    </svg>
                    <h1 className="md:text-xl text-[1.5rem] abel">
                      {" "}
                      Meeting Memory Lane
                    </h1>
                  </div>
                  <div className="mt-2 w-full">
                    <p className="abel text-pretty text-[1.2rem] md:text-[1rem]">
                      Keep track of important details with our Meeting Minutes
                      feature, automatically saving and organizing every word
                      said during conversations.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="md:h-[30rem] w-full flex flex-col justify-center md:block none items-center md:w-1/2  relative"
            >
              <img src={startUp} className="md:w-full w-auto" alt="" />

              <span className="bottom-3 rotate-180 right-[1rem] absolute">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 75 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.324 6.65704C11.324 9.10904 9.33599 11.097 6.88299 11.097C4.43099 11.097 2.44299 9.10904 2.44299 6.65704C2.44299 4.20604 4.43099 2.21704 6.88299 2.21704C9.33599 2.21704 11.324 4.20604 11.324 6.65704Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.725 6.65704C31.725 9.10904 29.736 11.097 27.285 11.097C24.83 11.097 22.843 9.10904 22.843 6.65704C22.843 4.20604 24.83 2.21704 27.285 2.21704C29.736 2.21704 31.725 4.20604 31.725 6.65704Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.127 6.65704C52.127 9.10904 50.138 11.097 47.686 11.097C45.233 11.097 43.244 9.10904 43.244 6.65704C43.244 4.20604 45.233 2.21704 47.686 2.21704C50.138 2.21704 52.127 4.20604 52.127 6.65704Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.086 3.75996C66.489 3.75996 65.189 5.05897 65.189 6.65797C65.189 8.25497 66.489 9.55397 68.086 9.55397C69.685 9.55397 70.985 8.25497 70.985 6.65797C70.985 5.05897 69.685 3.75996 68.086 3.75996ZM68.086 12.64C64.787 12.64 62.102 9.95697 62.102 6.65797C62.102 3.35697 64.787 0.672974 68.086 0.672974C71.386 0.672974 74.071 3.35697 74.071 6.65797C74.071 9.95697 71.386 12.64 68.086 12.64Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.88299 24.658C5.28499 24.658 3.98598 25.957 3.98598 27.555C3.98598 29.154 5.28499 30.453 6.88299 30.453C8.48099 30.453 9.77999 29.154 9.77999 27.555C9.77999 25.957 8.48099 24.658 6.88299 24.658ZM6.88299 33.541C3.58299 33.541 0.899994 30.857 0.899994 27.555C0.899994 24.257 3.58299 21.572 6.88299 21.572C10.184 21.572 12.867 24.257 12.867 27.555C12.867 30.857 10.184 33.541 6.88299 33.541Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.285 24.658C25.686 24.658 24.387 25.957 24.387 27.555C24.387 29.154 25.686 30.453 27.285 30.453C28.882 30.453 30.182 29.154 30.182 27.555C30.182 25.957 28.882 24.658 27.285 24.658ZM27.285 33.541C23.986 33.541 21.3 30.857 21.3 27.555C21.3 24.257 23.986 21.572 27.285 21.572C30.584 21.572 33.268 24.257 33.268 27.555C33.268 30.857 30.584 33.541 27.285 33.541Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.127 27.555C52.127 30.008 50.138 31.997 47.686 31.997C45.233 31.997 43.244 30.008 43.244 27.555C43.244 25.104 45.233 23.115 47.686 23.115C50.138 23.115 52.127 25.104 52.127 27.555Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.528 27.555C72.528 30.008 70.54 31.997 68.086 31.997C65.635 31.997 63.645 30.008 63.645 27.555C63.645 25.104 65.635 23.115 68.086 23.115C70.54 23.115 72.528 25.104 72.528 27.555Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.324 48.453C11.324 50.907 9.33599 52.895 6.88299 52.895C4.43099 52.895 2.44299 50.907 2.44299 48.453C2.44299 46.001 4.43099 44.014 6.88299 44.014C9.33599 44.014 11.324 46.001 11.324 48.453Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.285 45.557C25.686 45.557 24.387 46.856 24.387 48.453C24.387 50.051 25.686 51.352 27.285 51.352C28.882 51.352 30.182 50.051 30.182 48.453C30.182 46.856 28.882 45.557 27.285 45.557ZM27.285 54.438C23.986 54.438 21.3 51.755 21.3 48.453C21.3 45.154 23.986 42.47 27.285 42.47C30.584 42.47 33.268 45.154 33.268 48.453C33.268 51.755 30.584 54.438 27.285 54.438Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.127 48.453C52.127 50.907 50.138 52.895 47.686 52.895C45.233 52.895 43.244 50.907 43.244 48.453C43.244 46.001 45.233 44.014 47.686 44.014C50.138 44.014 52.127 46.001 52.127 48.453Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.086 45.557C66.489 45.557 65.189 46.856 65.189 48.453C65.189 50.051 66.489 51.352 68.086 51.352C69.685 51.352 70.985 50.051 70.985 48.453C70.985 46.856 69.685 45.557 68.086 45.557ZM68.086 54.438C64.787 54.438 62.102 51.755 62.102 48.453C62.102 45.154 64.787 42.47 68.086 42.47C71.386 42.47 74.071 45.154 74.071 48.453C74.071 51.755 71.386 54.438 68.086 54.438Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.88299 66.454C5.28499 66.454 3.98598 67.753 3.98598 69.353C3.98598 70.952 5.28499 72.2511 6.88299 72.2511C8.48099 72.2511 9.77999 70.952 9.77999 69.353C9.77999 67.753 8.48099 66.454 6.88299 66.454ZM6.88299 75.3371C3.58299 75.3371 0.899994 72.654 0.899994 69.353C0.899994 66.053 3.58299 63.368 6.88299 63.368C10.184 63.368 12.867 66.053 12.867 69.353C12.867 72.654 10.184 75.3371 6.88299 75.3371Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.285 66.454C25.686 66.454 24.387 67.753 24.387 69.353C24.387 70.952 25.686 72.2511 27.285 72.2511C28.882 72.2511 30.182 70.952 30.182 69.353C30.182 67.753 28.882 66.454 27.285 66.454ZM27.285 75.3371C23.986 75.3371 21.3 72.654 21.3 69.353C21.3 66.053 23.986 63.368 27.285 63.368C30.584 63.368 33.268 66.053 33.268 69.353C33.268 72.654 30.584 75.3371 27.285 75.3371Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.686 66.454C46.087 66.454 44.787 67.753 44.787 69.353C44.787 70.952 46.087 72.2511 47.686 72.2511C49.285 72.2511 50.584 70.952 50.584 69.353C50.584 67.753 49.285 66.454 47.686 66.454ZM47.686 75.3371C44.386 75.3371 41.701 72.654 41.701 69.353C41.701 66.053 44.386 63.368 47.686 63.368C50.985 63.368 53.67 66.053 53.67 69.353C53.67 72.654 50.985 75.3371 47.686 75.3371Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.528 69.353C72.528 71.805 70.54 73.794 68.086 73.794C65.635 73.794 63.645 71.805 63.645 69.353C63.645 66.9 65.635 64.911 68.086 64.911C70.54 64.911 72.528 66.9 72.528 69.353Z"
                    fill="#1B1A19"
                  />
                </svg>
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        variants={{
          initial: {
            opacity: 0,
            y: 50,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        className="  pb-[rem] w-screen  relative"
      >
        {/*  */}

        <div className="w-full md:px-24 px-4">
          <div className="gap-x-20 flex justify-between items-start  w-full md:flex-row flex-col ">
            <motion.div
              className="relative w-full "
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                  y: 50,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
            >
              <h1 className="text-[3rem] md:text-[4rem]  abel max-w-[80%] leading-[5.5rem]">
                User Feedback
              </h1>
              <h3 className="abel text-xl md:max-w-[70%]  text-[#212121] marginCards">
                Positioned as the forefront in cutting-edge technology our
                two-way sign language video conferencing platform stands out as
                the best solution available.
              </h3>
              <motion.div
                initial="initial"
                viewport={{ once: true }}
                whileInView="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 50,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="flex w-full justify-between gap-x- mt-8 items-center md:flex-row flex-col-reverse"
              >
                <div className="relative  md:w-[40%]">
                  <span className="top-[-4rem] md:bottom-3 md:top-0  rotate-180 md:right-0 right-8 absolute">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 75 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.324 6.65704C11.324 9.10904 9.33599 11.097 6.88299 11.097C4.43099 11.097 2.44299 9.10904 2.44299 6.65704C2.44299 4.20604 4.43099 2.21704 6.88299 2.21704C9.33599 2.21704 11.324 4.20604 11.324 6.65704Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.725 6.65704C31.725 9.10904 29.736 11.097 27.285 11.097C24.83 11.097 22.843 9.10904 22.843 6.65704C22.843 4.20604 24.83 2.21704 27.285 2.21704C29.736 2.21704 31.725 4.20604 31.725 6.65704Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.127 6.65704C52.127 9.10904 50.138 11.097 47.686 11.097C45.233 11.097 43.244 9.10904 43.244 6.65704C43.244 4.20604 45.233 2.21704 47.686 2.21704C50.138 2.21704 52.127 4.20604 52.127 6.65704Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M68.086 3.75996C66.489 3.75996 65.189 5.05897 65.189 6.65797C65.189 8.25497 66.489 9.55397 68.086 9.55397C69.685 9.55397 70.985 8.25497 70.985 6.65797C70.985 5.05897 69.685 3.75996 68.086 3.75996ZM68.086 12.64C64.787 12.64 62.102 9.95697 62.102 6.65797C62.102 3.35697 64.787 0.672974 68.086 0.672974C71.386 0.672974 74.071 3.35697 74.071 6.65797C74.071 9.95697 71.386 12.64 68.086 12.64Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.88299 24.658C5.28499 24.658 3.98598 25.957 3.98598 27.555C3.98598 29.154 5.28499 30.453 6.88299 30.453C8.48099 30.453 9.77999 29.154 9.77999 27.555C9.77999 25.957 8.48099 24.658 6.88299 24.658ZM6.88299 33.541C3.58299 33.541 0.899994 30.857 0.899994 27.555C0.899994 24.257 3.58299 21.572 6.88299 21.572C10.184 21.572 12.867 24.257 12.867 27.555C12.867 30.857 10.184 33.541 6.88299 33.541Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.285 24.658C25.686 24.658 24.387 25.957 24.387 27.555C24.387 29.154 25.686 30.453 27.285 30.453C28.882 30.453 30.182 29.154 30.182 27.555C30.182 25.957 28.882 24.658 27.285 24.658ZM27.285 33.541C23.986 33.541 21.3 30.857 21.3 27.555C21.3 24.257 23.986 21.572 27.285 21.572C30.584 21.572 33.268 24.257 33.268 27.555C33.268 30.857 30.584 33.541 27.285 33.541Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.127 27.555C52.127 30.008 50.138 31.997 47.686 31.997C45.233 31.997 43.244 30.008 43.244 27.555C43.244 25.104 45.233 23.115 47.686 23.115C50.138 23.115 52.127 25.104 52.127 27.555Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M72.528 27.555C72.528 30.008 70.54 31.997 68.086 31.997C65.635 31.997 63.645 30.008 63.645 27.555C63.645 25.104 65.635 23.115 68.086 23.115C70.54 23.115 72.528 25.104 72.528 27.555Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.324 48.453C11.324 50.907 9.33599 52.895 6.88299 52.895C4.43099 52.895 2.44299 50.907 2.44299 48.453C2.44299 46.001 4.43099 44.014 6.88299 44.014C9.33599 44.014 11.324 46.001 11.324 48.453Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.285 45.557C25.686 45.557 24.387 46.856 24.387 48.453C24.387 50.051 25.686 51.352 27.285 51.352C28.882 51.352 30.182 50.051 30.182 48.453C30.182 46.856 28.882 45.557 27.285 45.557ZM27.285 54.438C23.986 54.438 21.3 51.755 21.3 48.453C21.3 45.154 23.986 42.47 27.285 42.47C30.584 42.47 33.268 45.154 33.268 48.453C33.268 51.755 30.584 54.438 27.285 54.438Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.127 48.453C52.127 50.907 50.138 52.895 47.686 52.895C45.233 52.895 43.244 50.907 43.244 48.453C43.244 46.001 45.233 44.014 47.686 44.014C50.138 44.014 52.127 46.001 52.127 48.453Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M68.086 45.557C66.489 45.557 65.189 46.856 65.189 48.453C65.189 50.051 66.489 51.352 68.086 51.352C69.685 51.352 70.985 50.051 70.985 48.453C70.985 46.856 69.685 45.557 68.086 45.557ZM68.086 54.438C64.787 54.438 62.102 51.755 62.102 48.453C62.102 45.154 64.787 42.47 68.086 42.47C71.386 42.47 74.071 45.154 74.071 48.453C74.071 51.755 71.386 54.438 68.086 54.438Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.88299 66.454C5.28499 66.454 3.98598 67.753 3.98598 69.353C3.98598 70.952 5.28499 72.2511 6.88299 72.2511C8.48099 72.2511 9.77999 70.952 9.77999 69.353C9.77999 67.753 8.48099 66.454 6.88299 66.454ZM6.88299 75.3371C3.58299 75.3371 0.899994 72.654 0.899994 69.353C0.899994 66.053 3.58299 63.368 6.88299 63.368C10.184 63.368 12.867 66.053 12.867 69.353C12.867 72.654 10.184 75.3371 6.88299 75.3371Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.285 66.454C25.686 66.454 24.387 67.753 24.387 69.353C24.387 70.952 25.686 72.2511 27.285 72.2511C28.882 72.2511 30.182 70.952 30.182 69.353C30.182 67.753 28.882 66.454 27.285 66.454ZM27.285 75.3371C23.986 75.3371 21.3 72.654 21.3 69.353C21.3 66.053 23.986 63.368 27.285 63.368C30.584 63.368 33.268 66.053 33.268 69.353C33.268 72.654 30.584 75.3371 27.285 75.3371Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M47.686 66.454C46.087 66.454 44.787 67.753 44.787 69.353C44.787 70.952 46.087 72.2511 47.686 72.2511C49.285 72.2511 50.584 70.952 50.584 69.353C50.584 67.753 49.285 66.454 47.686 66.454ZM47.686 75.3371C44.386 75.3371 41.701 72.654 41.701 69.353C41.701 66.053 44.386 63.368 47.686 63.368C50.985 63.368 53.67 66.053 53.67 69.353C53.67 72.654 50.985 75.3371 47.686 75.3371Z"
                        fill="#1B1A19"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M72.528 69.353C72.528 71.805 70.54 73.794 68.086 73.794C65.635 73.794 63.645 71.805 63.645 69.353C63.645 66.9 65.635 64.911 68.086 64.911C70.54 64.911 72.528 66.9 72.528 69.353Z"
                        fill="#1B1A19"
                      />
                    </svg>
                  </span>
                  <img src={csort} className="w-full" alt="" />
                </div>
                <div className="md:w-[45rem] md:h-[28rem] grid md:grid-cols-3 grid-rows-2 grid-cols-1">
                  <motion.div
                    initial="initial"
                    viewport={{ once: true }}
                    whileInView="animate"
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 50,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                    className="col-span-1 flex items-start flex-col px-4 py-5 row-span-1 border-[#212121] border-l-2 border-t-2 rounded-tl-[20px] md:w-[auto] w-[18rem] marginCards roundedbox md:h-auto h-12[rem]"
                  >
                    <div className="flex items-center gap-x-2">
                      <div className="w-8 h-8 rounded-full">
                        <img
                          src={dummyAccount5}
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="text-xl abel font-semibold capitalize">
                          David Martinez
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col w-full">
                      {/* <div className="flex mb-1 justify-start gap-x-1 ">
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#212121"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                              stroke="#212121"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="#212121"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#212121"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                              stroke="#212121"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="#212121"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#212121"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                              stroke="#212121"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="#212121"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#212121"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                              stroke="#212121"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="#212121"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#212121"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                              stroke="#212121"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="#212121"
                            ></path>{" "}
                          </g>
                        </svg>
                      </span>
                    </div> */}
                      <p className="abel text-pretty">
                        Amazing! The sign language recognition is spot on. It
                        feels like the future of communication. applause to the
                        team behind this innovation!
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="initial"
                    viewport={{ once: true }}
                    whileInView="animate"
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 50,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                    className={`px-4 py-5 col-span-1 row-span-1 border-[#212121] border-t-2  border-l-2 border-t-2items-start  flex flex-col roundedbox md:h-auto h-12[rem] md:w-[auto] w-[18rem] marginCards`}
                  >
                    <div className="flex  items-center gap-x-2 ">
                      <div className="w-8 h-8 rounded-full ">
                        <img
                          src={dummyAccount3}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-xl abel font-semibold capitalize">
                          Emily Thompson
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 w-full">
                      <p className="abel text-pretty">
                        Incredible! Finally, a platform that bridges
                        communication barriers effortlessly. The sign language
                        translation is remarkably accurate. A game-changer!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial="initial"
                    viewport={{ once: true }}
                    whileInView="animate"
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 50,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                    className={`col-span-1 px-4 py-5 flex flex-col row-span-1 border-[#212121] bg-[#212121] text-white relative  border-t-2 border-l-2 border-r-2 rounded-tr-[20px] roundedbox md:w-[auto] w-[18rem] marginCards md:h-auto h-12[rem]`}
                  >
                    <span className="absolute top-[-3rem] rotate- right-[-3rem] ">
                      <svg
                        width="61"
                        height="59"
                        viewBox="0 0 61 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.5543 10.7784L48.4258 10.6141L48.59 34.4851L60.185 45.9218L59.8737 0.68438L14.6368 0.995669L24.5543 10.7784Z"
                          fill="#231F20"
                        />
                        <path
                          d="M49.7078 9.3142L50.0495 58.9669L0.0550232 9.65587L49.7078 9.3142ZM47.4247 52.749L47.1437 11.914L6.30864 12.195L47.4247 52.749Z"
                          fill="#231F20"
                        />
                      </svg>
                    </span>
                    <div className="flex  items-center gap-x-2">
                      <div className="w-8 h-8 rounded-full">
                        <img
                          src={dummyAccount2}
                          alt=""
                          className="w-8 h-8 object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="text-xl abel font- capitalize">
                          Feyd Rautha
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 w-full">
                      <p className="abel text-pretty">
                        Impressive integration! Seamless transition between sign
                        and spoken language. The avatar adds a personal touch.
                        Highly recommend!
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="initial"
                    viewport={{ once: true }}
                    whileInView="animate"
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 50,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                    className={`col-span-1 px-4 py-5 flex flex-col row-span-1 border-[#212121]  border-l-2 border-b-2 border-t-2 rounded-bl-[20px] bg-[#] roundedbox md:h-auto h-12[rem] md:w-[auto] w-[18rem] marginCards`}
                  >
                    <div className="flex  items-center gap-x-2">
                      <div className="w-8 h-8 rounded-full">
                        <img
                          src={dummyAccount4}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-xl abel font-semibold capitalize">
                          David Miller
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 w-full">
                      <p className="abel text-pretty">
                        Exceptional tool! As a sign language user, I'm thrilled
                        with the accuracy and ease of use. The avatar is a
                        cherry on top.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="initial"
                    viewport={{ once: true }}
                    whileInView="animate"
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 50,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                    className={`col-span-1 px-4 py-5 flex flex-col  row-span-1 border-[#212121] bg-[#212121] text-white border-l-2 border-t-2 border-b-2 roundedbox md:h-auto h-12[rem] md:w-[auto] w-[18rem] marginCards`}
                  >
                    <div className="flex  items-center gap-x-2">
                      <div className="w-8 h-8 rounded-full">
                        <img
                          src={dummyAccount1}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-xl abel font- capitalize">
                          paul atreides
                        </h1>
                      </div>
                    </div>
                    <div className="mt-4 w-full">
                      <p className="abel text-pretty">
                        Outstanding! This platform exceeds expectations. The
                        synergy between sign and spoken language is remarkable.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial="initial"
                    viewport={{ once: true }}
                    whileInView="animate"
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 50,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                    className={`col-span-1 px-4 py-5 flex flex-col row-span-1  border-[#212121] border-l-2 rounded-br-[20px]  md:h-auto h-12[rem] noborder h-12[rem] md:w-[auto] w-[18rem] marginCards `}
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <h1 className="abel font-semibold text-[4rem] leading-[4rem]">
                        +181
                      </h1>
                      <div className="w-full flex justify-center pl-8">
                        <h1 className="abel font-semibold text-[2rem] ">
                          Reviews
                        </h1>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* <div className="w-[85%] h-[5rem] mt-[5rem] bg-[#212121] "></div> */}
      </motion.div>
      <motion.div
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        variants={{
          initial: {
            opacity: 0,
            y: 50,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        className="  pt-[3rem] flex flex-col justify-center w-screen  relative overflow-hidden  "
      >
        <div className="md:px-24 pb-[3rem] px-4">
          {/*  */}
          <div className="w-full flex items-center relative ">
            {/* <img
          src={edgeLogo}
          alt=""
          className="w-[15rem] brightness-0 invert-1"
        /> */}
          </div>
          <motion.div
            className="gap-x-20 flex justify-between items-center  w-full "
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            variants={{
              initial: {
                opacity: 0,
                y: 50,
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <div className="relative w-1/2 ">
              {/* <span className="absolute inset-0">
            <svg
              width="266"
              height="374"
              viewBox="0 0 266 374"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M137.448 19.9084C137.448 8.9133 146.362 0 157.357 0C168.352 0 177.265 8.91332 177.265 19.9085V354.04C177.265 365.035 168.352 373.948 157.357 373.948C146.362 373.948 137.448 365.035 137.448 354.04V19.9084ZM201.724 0C190.729 0 181.816 8.9133 181.816 19.9084V354.04C181.816 365.035 190.729 373.948 201.724 373.948C212.719 373.948 221.633 365.035 221.633 354.04V19.9085C221.633 8.91332 212.719 0 201.724 0ZM246.092 0C235.096 0 226.183 8.9133 226.183 19.9084V354.04C226.183 365.035 235.096 373.948 246.092 373.948C257.087 373.948 266 365.035 266 354.04V19.9085C266 8.91332 257.087 0 246.092 0ZM114.118 4.92369C103.498 2.07812 92.5822 8.38039 89.7367 19.0002L1.43131 348.56C-1.41426 359.18 4.888 370.096 15.5078 372.941C26.1276 375.787 37.0434 369.485 39.889 358.865L128.194 29.3049C131.04 18.6851 124.738 7.76926 114.118 4.92369Z"
                fill="#212121"
              />
            </svg>
          </span> */}
              <h3 className="md:text-[1rem] text-[2rem] font-semibold abel md:max-w-[40%]">
                Get Started
              </h3>
              <h1 className="md:text-[4rem]  text-[2.5rem] abel w-[30rem]  md:max-w-[80%] md:leading-[5.5rem] ">
                Let's Start The First Conversation.
              </h1>
              <h1 className="md:text-[3rem] text-[2rem]  w-[30rem]  md:max-w-[80%] abel  ">
                You are only one sign away
              </h1>
              <button className="flex gap-x-2 items-center mt-6 abel h-[2.5rem] hover:text-gray-300 transition-all text-white black-gradient rounded-full card-shadow px-12">
                <span>Join now</span>
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
                      fillRule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-305.000000, -6679.000000)"
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
              {/* <h1 className="text-[4rem] abel h-[5.8rem]">
            You Are Only One{" "}
            <Typewriter
              words={["Sign", "Word"]}
              loop
              cursorBlinking={false}
              //   cursor
              typeSpeed={50}
              delaySpeed={1500}
              deleteSpeed={40}
            />{" "}
            Away
          </h1> */}
            </div>
            <div className="w-1/2 relative md:flex hidden">
              <span className="bottom-3 rotate-180 left-[1rem] absolute">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 75 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.324 6.65704C11.324 9.10904 9.33599 11.097 6.88299 11.097C4.43099 11.097 2.44299 9.10904 2.44299 6.65704C2.44299 4.20604 4.43099 2.21704 6.88299 2.21704C9.33599 2.21704 11.324 4.20604 11.324 6.65704Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.725 6.65704C31.725 9.10904 29.736 11.097 27.285 11.097C24.83 11.097 22.843 9.10904 22.843 6.65704C22.843 4.20604 24.83 2.21704 27.285 2.21704C29.736 2.21704 31.725 4.20604 31.725 6.65704Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.127 6.65704C52.127 9.10904 50.138 11.097 47.686 11.097C45.233 11.097 43.244 9.10904 43.244 6.65704C43.244 4.20604 45.233 2.21704 47.686 2.21704C50.138 2.21704 52.127 4.20604 52.127 6.65704Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.086 3.75996C66.489 3.75996 65.189 5.05897 65.189 6.65797C65.189 8.25497 66.489 9.55397 68.086 9.55397C69.685 9.55397 70.985 8.25497 70.985 6.65797C70.985 5.05897 69.685 3.75996 68.086 3.75996ZM68.086 12.64C64.787 12.64 62.102 9.95697 62.102 6.65797C62.102 3.35697 64.787 0.672974 68.086 0.672974C71.386 0.672974 74.071 3.35697 74.071 6.65797C74.071 9.95697 71.386 12.64 68.086 12.64Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.88299 24.658C5.28499 24.658 3.98598 25.957 3.98598 27.555C3.98598 29.154 5.28499 30.453 6.88299 30.453C8.48099 30.453 9.77999 29.154 9.77999 27.555C9.77999 25.957 8.48099 24.658 6.88299 24.658ZM6.88299 33.541C3.58299 33.541 0.899994 30.857 0.899994 27.555C0.899994 24.257 3.58299 21.572 6.88299 21.572C10.184 21.572 12.867 24.257 12.867 27.555C12.867 30.857 10.184 33.541 6.88299 33.541Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.285 24.658C25.686 24.658 24.387 25.957 24.387 27.555C24.387 29.154 25.686 30.453 27.285 30.453C28.882 30.453 30.182 29.154 30.182 27.555C30.182 25.957 28.882 24.658 27.285 24.658ZM27.285 33.541C23.986 33.541 21.3 30.857 21.3 27.555C21.3 24.257 23.986 21.572 27.285 21.572C30.584 21.572 33.268 24.257 33.268 27.555C33.268 30.857 30.584 33.541 27.285 33.541Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.127 27.555C52.127 30.008 50.138 31.997 47.686 31.997C45.233 31.997 43.244 30.008 43.244 27.555C43.244 25.104 45.233 23.115 47.686 23.115C50.138 23.115 52.127 25.104 52.127 27.555Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.528 27.555C72.528 30.008 70.54 31.997 68.086 31.997C65.635 31.997 63.645 30.008 63.645 27.555C63.645 25.104 65.635 23.115 68.086 23.115C70.54 23.115 72.528 25.104 72.528 27.555Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.324 48.453C11.324 50.907 9.33599 52.895 6.88299 52.895C4.43099 52.895 2.44299 50.907 2.44299 48.453C2.44299 46.001 4.43099 44.014 6.88299 44.014C9.33599 44.014 11.324 46.001 11.324 48.453Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.285 45.557C25.686 45.557 24.387 46.856 24.387 48.453C24.387 50.051 25.686 51.352 27.285 51.352C28.882 51.352 30.182 50.051 30.182 48.453C30.182 46.856 28.882 45.557 27.285 45.557ZM27.285 54.438C23.986 54.438 21.3 51.755 21.3 48.453C21.3 45.154 23.986 42.47 27.285 42.47C30.584 42.47 33.268 45.154 33.268 48.453C33.268 51.755 30.584 54.438 27.285 54.438Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.127 48.453C52.127 50.907 50.138 52.895 47.686 52.895C45.233 52.895 43.244 50.907 43.244 48.453C43.244 46.001 45.233 44.014 47.686 44.014C50.138 44.014 52.127 46.001 52.127 48.453Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.086 45.557C66.489 45.557 65.189 46.856 65.189 48.453C65.189 50.051 66.489 51.352 68.086 51.352C69.685 51.352 70.985 50.051 70.985 48.453C70.985 46.856 69.685 45.557 68.086 45.557ZM68.086 54.438C64.787 54.438 62.102 51.755 62.102 48.453C62.102 45.154 64.787 42.47 68.086 42.47C71.386 42.47 74.071 45.154 74.071 48.453C74.071 51.755 71.386 54.438 68.086 54.438Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.88299 66.454C5.28499 66.454 3.98598 67.753 3.98598 69.353C3.98598 70.952 5.28499 72.2511 6.88299 72.2511C8.48099 72.2511 9.77999 70.952 9.77999 69.353C9.77999 67.753 8.48099 66.454 6.88299 66.454ZM6.88299 75.3371C3.58299 75.3371 0.899994 72.654 0.899994 69.353C0.899994 66.053 3.58299 63.368 6.88299 63.368C10.184 63.368 12.867 66.053 12.867 69.353C12.867 72.654 10.184 75.3371 6.88299 75.3371Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.285 66.454C25.686 66.454 24.387 67.753 24.387 69.353C24.387 70.952 25.686 72.2511 27.285 72.2511C28.882 72.2511 30.182 70.952 30.182 69.353C30.182 67.753 28.882 66.454 27.285 66.454ZM27.285 75.3371C23.986 75.3371 21.3 72.654 21.3 69.353C21.3 66.053 23.986 63.368 27.285 63.368C30.584 63.368 33.268 66.053 33.268 69.353C33.268 72.654 30.584 75.3371 27.285 75.3371Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.686 66.454C46.087 66.454 44.787 67.753 44.787 69.353C44.787 70.952 46.087 72.2511 47.686 72.2511C49.285 72.2511 50.584 70.952 50.584 69.353C50.584 67.753 49.285 66.454 47.686 66.454ZM47.686 75.3371C44.386 75.3371 41.701 72.654 41.701 69.353C41.701 66.053 44.386 63.368 47.686 63.368C50.985 63.368 53.67 66.053 53.67 69.353C53.67 72.654 50.985 75.3371 47.686 75.3371Z"
                    fill="#1B1A19"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.528 69.353C72.528 71.805 70.54 73.794 68.086 73.794C65.635 73.794 63.645 71.805 63.645 69.353C63.645 66.9 65.635 64.911 68.086 64.911C70.54 64.911 72.528 66.9 72.528 69.353Z"
                    fill="#1B1A19"
                  />
                </svg>
              </span>
              <img src={measure} alt="" />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="initial"
          viewport={{ once: true }}
          whileInView="animate"
          variants={{
            initial: {
              opacity: 0,
              y: 50,
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            },
          }}
          className="md:h-[5rem] h-[10rem] font-[500] md:w-[95%] w-[100%] black-gradient rounded-tr-[20px] flex md:px-[4.5rem] justify-between text-white items-center relative roundedbox"
        >
          <span className="md:absolute right-[-4.2rem] bottom-[2rem] ">
            <svg
              width="60"
              height="60"
              viewBox="0 0 75 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.324 6.65704C11.324 9.10904 9.33599 11.097 6.88299 11.097C4.43099 11.097 2.44299 9.10904 2.44299 6.65704C2.44299 4.20604 4.43099 2.21704 6.88299 2.21704C9.33599 2.21704 11.324 4.20604 11.324 6.65704Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.725 6.65704C31.725 9.10904 29.736 11.097 27.285 11.097C24.83 11.097 22.843 9.10904 22.843 6.65704C22.843 4.20604 24.83 2.21704 27.285 2.21704C29.736 2.21704 31.725 4.20604 31.725 6.65704Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.127 6.65704C52.127 9.10904 50.138 11.097 47.686 11.097C45.233 11.097 43.244 9.10904 43.244 6.65704C43.244 4.20604 45.233 2.21704 47.686 2.21704C50.138 2.21704 52.127 4.20604 52.127 6.65704Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68.086 3.75996C66.489 3.75996 65.189 5.05897 65.189 6.65797C65.189 8.25497 66.489 9.55397 68.086 9.55397C69.685 9.55397 70.985 8.25497 70.985 6.65797C70.985 5.05897 69.685 3.75996 68.086 3.75996ZM68.086 12.64C64.787 12.64 62.102 9.95697 62.102 6.65797C62.102 3.35697 64.787 0.672974 68.086 0.672974C71.386 0.672974 74.071 3.35697 74.071 6.65797C74.071 9.95697 71.386 12.64 68.086 12.64Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.88299 24.658C5.28499 24.658 3.98598 25.957 3.98598 27.555C3.98598 29.154 5.28499 30.453 6.88299 30.453C8.48099 30.453 9.77999 29.154 9.77999 27.555C9.77999 25.957 8.48099 24.658 6.88299 24.658ZM6.88299 33.541C3.58299 33.541 0.899994 30.857 0.899994 27.555C0.899994 24.257 3.58299 21.572 6.88299 21.572C10.184 21.572 12.867 24.257 12.867 27.555C12.867 30.857 10.184 33.541 6.88299 33.541Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.285 24.658C25.686 24.658 24.387 25.957 24.387 27.555C24.387 29.154 25.686 30.453 27.285 30.453C28.882 30.453 30.182 29.154 30.182 27.555C30.182 25.957 28.882 24.658 27.285 24.658ZM27.285 33.541C23.986 33.541 21.3 30.857 21.3 27.555C21.3 24.257 23.986 21.572 27.285 21.572C30.584 21.572 33.268 24.257 33.268 27.555C33.268 30.857 30.584 33.541 27.285 33.541Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.127 27.555C52.127 30.008 50.138 31.997 47.686 31.997C45.233 31.997 43.244 30.008 43.244 27.555C43.244 25.104 45.233 23.115 47.686 23.115C50.138 23.115 52.127 25.104 52.127 27.555Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72.528 27.555C72.528 30.008 70.54 31.997 68.086 31.997C65.635 31.997 63.645 30.008 63.645 27.555C63.645 25.104 65.635 23.115 68.086 23.115C70.54 23.115 72.528 25.104 72.528 27.555Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.324 48.453C11.324 50.907 9.33599 52.895 6.88299 52.895C4.43099 52.895 2.44299 50.907 2.44299 48.453C2.44299 46.001 4.43099 44.014 6.88299 44.014C9.33599 44.014 11.324 46.001 11.324 48.453Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.285 45.557C25.686 45.557 24.387 46.856 24.387 48.453C24.387 50.051 25.686 51.352 27.285 51.352C28.882 51.352 30.182 50.051 30.182 48.453C30.182 46.856 28.882 45.557 27.285 45.557ZM27.285 54.438C23.986 54.438 21.3 51.755 21.3 48.453C21.3 45.154 23.986 42.47 27.285 42.47C30.584 42.47 33.268 45.154 33.268 48.453C33.268 51.755 30.584 54.438 27.285 54.438Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.127 48.453C52.127 50.907 50.138 52.895 47.686 52.895C45.233 52.895 43.244 50.907 43.244 48.453C43.244 46.001 45.233 44.014 47.686 44.014C50.138 44.014 52.127 46.001 52.127 48.453Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68.086 45.557C66.489 45.557 65.189 46.856 65.189 48.453C65.189 50.051 66.489 51.352 68.086 51.352C69.685 51.352 70.985 50.051 70.985 48.453C70.985 46.856 69.685 45.557 68.086 45.557ZM68.086 54.438C64.787 54.438 62.102 51.755 62.102 48.453C62.102 45.154 64.787 42.47 68.086 42.47C71.386 42.47 74.071 45.154 74.071 48.453C74.071 51.755 71.386 54.438 68.086 54.438Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.88299 66.454C5.28499 66.454 3.98598 67.753 3.98598 69.353C3.98598 70.952 5.28499 72.2511 6.88299 72.2511C8.48099 72.2511 9.77999 70.952 9.77999 69.353C9.77999 67.753 8.48099 66.454 6.88299 66.454ZM6.88299 75.3371C3.58299 75.3371 0.899994 72.654 0.899994 69.353C0.899994 66.053 3.58299 63.368 6.88299 63.368C10.184 63.368 12.867 66.053 12.867 69.353C12.867 72.654 10.184 75.3371 6.88299 75.3371Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.285 66.454C25.686 66.454 24.387 67.753 24.387 69.353C24.387 70.952 25.686 72.2511 27.285 72.2511C28.882 72.2511 30.182 70.952 30.182 69.353C30.182 67.753 28.882 66.454 27.285 66.454ZM27.285 75.3371C23.986 75.3371 21.3 72.654 21.3 69.353C21.3 66.053 23.986 63.368 27.285 63.368C30.584 63.368 33.268 66.053 33.268 69.353C33.268 72.654 30.584 75.3371 27.285 75.3371Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.686 66.454C46.087 66.454 44.787 67.753 44.787 69.353C44.787 70.952 46.087 72.2511 47.686 72.2511C49.285 72.2511 50.584 70.952 50.584 69.353C50.584 67.753 49.285 66.454 47.686 66.454ZM47.686 75.3371C44.386 75.3371 41.701 72.654 41.701 69.353C41.701 66.053 44.386 63.368 47.686 63.368C50.985 63.368 53.67 66.053 53.67 69.353C53.67 72.654 50.985 75.3371 47.686 75.3371Z"
                fill="#1B1A19"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72.528 69.353C72.528 71.805 70.54 73.794 68.086 73.794C65.635 73.794 63.645 71.805 63.645 69.353C63.645 66.9 65.635 64.911 68.086 64.911C70.54 64.911 72.528 66.9 72.528 69.353Z"
                fill="#1B1A19"
              />
            </svg>
          </span>

          <div className="flex justify-between items-center gap-x-[5rem]">
            <img src={edgeLogo} className="w-[5rem]" alt="" />
            <div className="grid grid-cols-2  gap-4 md:flex md:justify-between md:gap-x-[3rem] w-full">
              <a href="#" className="abel block text-center">
                Contact
              </a>
              <a href="#" className="abel md:block text-center hidden">
                Tutorials
              </a>
              <a href="#" className="abel md:block text-center hidden">
                Terms of Service
              </a>
              <a href="#" className="abel block text-center">
                Blog
              </a>
              <a href="#" className="abel block text-center">
                API
              </a>
              <a href="#" className="abel block text-center">
                Team
              </a>
              <div className="md:hidden gap-x-12 items-center flex flex-row ">
                <a href="https://github.com/EDGE-GP" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="28"
                    height="28"
                    viewBox="0 0 30 30"
                    fill="white"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="28"
                    height="28"
                    viewBox="0 0 30 30"
                    fill="white"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="28"
                    height="28"
                    viewBox="0 0 30 30"
                    fill="white"
                  >
                    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex gap-x-2 items-center hidden ">
            <a href="https://github.com/EDGE-GP" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
