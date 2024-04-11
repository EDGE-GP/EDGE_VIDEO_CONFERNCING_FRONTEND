// import illustration_404 from "../../assets/404.svg";
import tempProfileImage from "../../assets/selfPortrait.jpg";
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
const StageMeeting = () => {

  return (
    <div className=" h-full   flex gap-x-6 ml-[17.5rem] rounded-3xl  mr-[2rem] ">
      <div className="w-[75%] h-full">
        {/* meeting header */}
        <div className="h-[4.5rem] bg-white card-shadow px-4 rounded-3xl flex justify-between items-center">
          <div className="flex justify-start items-center  gap-x-4">
            <button className="w-[3rem] h-[3rem] rounded-full flex items-center justify-center bg-[#F8F8FA] transition-all hover:bg-[#f5f5f5]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7925 4.23214C13.0785 4.53177 13.0675 5.00651 12.7679 5.29252L7.83621 10L12.7679 14.7075C13.0675 14.9935 13.0785 15.4682 12.7925 15.7679C12.5065 16.0675 12.0318 16.0785 11.7321 15.7925L6.23214 10.5425C6.08388 10.401 6 10.205 6 10C6 9.79504 6.08388 9.59901 6.23214 9.45748L11.7321 4.20748C12.0318 3.92148 12.5065 3.93252 12.7925 4.23214Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className="flex flex-col ">
              <h1 className="abel text-[1.5rem] leading-8">
                Project Kickoff Meeting
              </h1>
              <h3 className="abel text-[1rem]">4 Participants</h3>
            </div>
          </div>
          <div>
            <button className="flex gap-x-2 items-center abel h-[2.5rem]   text-[#DF6962] font-semibold transition-all hover:bg-[#faeae9] bg-[#FCF0EF]   rounded-full px-6">
              <span>
                <svg
                  className="rotate-180"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8011 10.5087C18.0663 10.2214 18.0663 9.77859 17.8011 9.49129L14.8011 6.24129C14.5201 5.93692 14.0457 5.91794 13.7413 6.1989C13.4369 6.47985 13.4179 6.95434 13.6989 7.25871L15.537 9.25L8.75 9.25C8.33579 9.25 8 9.58579 8 10C8 10.4142 8.33579 10.75 8.75 10.75L15.537 10.75L13.6989 12.7413C13.4179 13.0457 13.4369 13.5201 13.7413 13.8011C14.0457 14.0821 14.5201 14.0631 14.8011 13.7587L17.8011 10.5087ZM10 18.25C10 17.8358 9.66421 17.5 9.25 17.5L4.75 17.5C4.05964 17.5 3.5 16.9404 3.5 16.25L3.5 3.75C3.5 3.05964 4.05964 2.5 4.75 2.5L9.25 2.5C9.66421 2.5 10 2.16421 10 1.75C10 1.33579 9.66421 1 9.25 1L4.75 1C3.23122 1 2 2.23122 2 3.75L2 16.25C2 17.7688 3.23122 19 4.75 19L9.25 19C9.66421 19 10 18.6642 10 18.25Z"
                    fill="#DF6962"
                  />
                </svg>
              </span>
              <span>Leave Meeting</span>
            </button>
          </div>
        </div>
        {/* meeting */}
        <div className="h-[38rem] mt-4 rounded-3xl w-full bg-white card-shadow px-5 py-4">
          {/* one on one */}
          {/* <div className="flex gap-x-4 w-full h-full">
            <div className="w-[75%] h-[36rem] bg-red-600 rounded-3xl"></div>
            <div className="w-[25%] h-full flex flex-col-reverse">
              <div className="w-full h-[12rem] rounded-3xl bg-red-600"></div>
            </div>
          </div> */}
          {/* grid */}
          {/* <div className="w-[75%] h-[24rem] bg-red-600 rounded-3xl"></div>
          <div className="w-full grid grid-cols-4 gap-x-2 h-[11rem] mt-4">
            <div className="col-span-1 bg-red-600 w-full h-full rounded-3xl"></div>
            <div className="col-span-1 bg-red-600 w-full h-full rounded-3xl"></div>
            <div className="col-span-1 bg-red-600 w-full h-full rounded-3xl"></div>
            <div className="col-span-1 bg-red-600 w-full h-full rounded-3xl"></div>
          </div> */}
        </div>
      </div>
      {/* join requests */}
      <div className="w-[25%]">
        <div className="w-full h-[15rem] px-4 py-2 rounded-3xl card-shadow bg-white">
          <h3 className="abel text-[1.3rem] mb-2">Request to join</h3>
          <div className="flex flex-col gap-y-2 h-[11.5em] overflow-y-scroll">
            <div className="flex justify-between ">
              <div className="flex justify-start items-center gap-x-2">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <h1 className="text-[1.1rem] abel">Ibrahim Askar</h1>
              </div>
              <div className="flex items-center gap-x-2">
                <button className="w-[2rem] h-[2rem] flex items-center justify-center bg-[#DF6962] hover:bg-[#d2625c] transition-all rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20121)">
                      <path
                        d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20121">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="w-[2rem] h-[2rem] flex items-center justify-center bg-[#151515] hover:bg-[#282828] transition-all rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20103)">
                      <path
                        d="M20 7.00018L10 17.0002L5 12.0002"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20103">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex justify-start items-center gap-x-2">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <h1 className="text-[1.1rem] abel">Feyd Rutha</h1>
              </div>
              <div className="flex items-center gap-x-2">
                <button className="w-[2rem] h-[2rem] flex items-center justify-center bg-[#DF6962] hover:bg-[#d2625c] transition-all rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20121)">
                      <path
                        d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20121">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="w-[2rem] h-[2rem] flex items-center justify-center bg-[#151515] hover:bg-[#282828] transition-all rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20103)">
                      <path
                        d="M20 7.00018L10 17.0002L5 12.0002"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20103">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex justify-start items-center gap-x-2">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <h1 className="text-[1.1rem] abel">Paul Atreides</h1>
              </div>
              <div className="flex items-center gap-x-2">
                <button className="w-[2rem] h-[2rem] flex items-center justify-center bg-[#DF6962] hover:bg-[#d2625c] transition-all rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20121)">
                      <path
                        d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20121">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="w-[2rem] h-[2rem] flex items-center justify-center bg-[#151515] hover:bg-[#282828] transition-all rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20103)">
                      <path
                        d="M20 7.00018L10 17.0002L5 12.0002"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20103">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* chat */}
        <div className="mt-4 h-[27.5rem] w-full flex flex-col justify-between bg-white card-shadow rounded-3xl px-4 py-2">
          <h3 className="abel text-[1.3rem] mb-2">Meeting chat</h3>
          <div className="w-full h-[80%] flex flex-col-reverse gap-y-1 mb-2 overflow-y-scroll">
            <div className="flex  justify-start flex-row-reverse w-full gap-x-1">
              <div className="w-[2.5rem] flex justify-center items-center rounded-full h-[2.5rem]">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-1 w-full justify-end items-end">
                <h1 className="text-[1rem] abel font-semibold text-start">
                  Ibrahim Askar
                </h1>
                <div className="px-3 abel bg-[#151515] text-white py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
                <div className="px-3 abel bg-[#151515] text-white py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
              </div>
            </div>

            <div className="flex  justify-start w-full gap-x-1">
              <div className="w-[2.5rem] flex justify-center items-center rounded-full h-[2.5rem]">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                <h1 className="text-[1rem] abel font-semibold">
                  Ibrahim Askar
                </h1>
                <div className="px-3 abel bg-[#F8F8FA] py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
                <div className="px-3 abel bg-[#F8F8FA] py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
              </div>
            </div>

            <div className="flex  justify-start flex-row-reverse w-full gap-x-1">
              <div className="w-[2.5rem] flex justify-center items-center rounded-full h-[2.5rem]">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-1 w-full justify-end items-end">
                <h1 className="text-[1rem] abel font-semibold text-start">
                  Ibrahim Askar
                </h1>
                <div className="px-3 abel bg-[#151515] text-white py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
                <div className="px-3 abel bg-[#151515] text-white py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
              </div>
            </div>
            <div className="flex  justify-start w-full gap-x-1">
              <div className="w-[2.5rem] flex justify-center items-center rounded-full h-[2.5rem]">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                <h1 className="text-[1rem] abel font-semibold">
                  Ibrahim Askar
                </h1>
                <div className="px-3 abel bg-[#F8F8FA] py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
                <div className="px-3 abel bg-[#F8F8FA] py-1 rounded-[8px] flex justify-start items-center">
                  <span>Hello, World!</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2.5rem]  w-full flex bg-[#F8F8FA] rounded-full">
            <input
              type="text"
              className="w-full  roudned-full abel px-3 outline-none text-[14px] bg-transparent"
              placeholder="Type a message..."
            />
            <button className="h-full w-[3rem] bg-[#151515] hover:bg-[#282828] transition-all pr-[1px] pt-[1px] flex justify-center items-center rounded-full ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.10999 11.65L11.69 8.06M5.39999 4.32L13.89 1.49C17.7 0.220002 19.77 2.3 18.51 6.11L15.68 14.6C13.78 20.31 10.66 20.31 8.75999 14.6L7.91999 12.08L5.39999 11.24C-0.310007 9.34 -0.310007 6.23 5.39999 4.32V4.32Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="w-full flex justify-center items-center flex-col mt-12">
          <div className="relative  w-[45%]">
            <span className="bottom-3 rotate-180 right-0 absolute"></span>
            <img src={illustration_404} className="w-full" alt="" />
          </div>
          <h1 className="abel text-[1.3em] mt-12 capitalize">
            You Have No Meetings Yet? start planning Yours!
          </h1>
        </div> */}
    </div>
  );
};

export default StageMeeting;
