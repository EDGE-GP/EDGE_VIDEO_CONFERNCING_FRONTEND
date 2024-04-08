import React from "react";
import illustration_404 from "../../assets/404.svg";
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
import dummyAccount3 from "../../assets/account3.png";
import tempProfileImage from "../../assets/selfPortrait.jpg";

const Meetings = () => {
  return (
    <div className=" h-[92vh] card-shadow px-8 pt-4 bg-white ml-[17rem] rounded-3xl mr-[2.5rem] ">
      <h1 className="abel text-[3rem] leading-[3.5rem]">Meetings</h1>
      <h3 className="abel text-[1rem] ">
        Take the Lead: Start Planning Your Meetings Today!
      </h3>
      <div className="h-[85%] pb-4 mt-4 overflow-y-scroll">
        <div className=" w-full">
          <h1 className="mb-4 abel text-[1.5rem] ">Upcoming Meetings</h1>
          <div className="w-full flex flex-wrap gap-x-2 gap-y-2">
            <div className="w-[23.15rem] h-[11rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
              <h1 className="abel text-[1.375rem]">Project Kickoff Meeting</h1>
              <h1 className="abel text-[1rem] ">
                Thursday, 11<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-2">
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
              <div className="mt-2 w-full flex justify-end items-center">
                <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
                  <span>Edit Meeting</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_20437)">
                        <path
                          d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 6L18 9"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 20H21"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20437">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[23.15rem] h-[11rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
              <h1 className="abel text-[1.375rem]">Project Kickoff Meeting</h1>
              <h1 className="abel text-[1rem] ">
                Thursday, 11<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-2">
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
              <div className="mt-2 w-full flex justify-end items-center">
                <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
                  <span>Edit Meeting</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_20437)">
                        <path
                          d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 6L18 9"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 20H21"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20437">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="w-[23.15rem] h-[11rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
              <h1 className="abel text-[1.375rem]">Standup Meeting</h1>
              <h1 className="abel text-[1rem] ">
                Thursday, 18<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-2">
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
              <div className="mt-2 w-full flex justify-end items-center">
                <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
                  <span>Edit Meeting</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_20437)">
                        <path
                          d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 6L18 9"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 20H21"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20437">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[22.65rem] h-[11rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
              <h1 className="abel text-[1.375rem]">
                Customer Evaluation Meeting
              </h1>
              <h1 className="abel text-[1rem] ">
                Thursday, 25<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-2">
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
              <div className="mt-2 w-full flex justify-end items-center">
                <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
                  <span>Edit Meeting</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_20437)">
                        <path
                          d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 6L18 9"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 20H21"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_20437">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full">
          <h1 className="mb-4 abel text-[1.5rem] ">Previous Meetings</h1>
          <div className="w-full flex flex-wrap gap-x-2 gap-y-2">
            <div className="w-[23.15rem] h-[11rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
              <h1 className="abel text-[1.375rem]">Project Kickoff Meeting</h1>
              <h1 className="abel text-[1rem] ">
                Thursday, 11<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-2">
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
              <div className="mt-2 w-full flex justify-end items-center">
                <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
                  <span>View Conversation</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.20748 4.23214C7.49349 3.93252 7.96823 3.92148 8.26786 4.20748L13.7679 9.45748C13.9161 9.59901 14 9.79504 14 10C14 10.205 13.9161 10.401 13.7679 10.5425L8.26786 15.7925C7.96823 16.0785 7.49349 16.0675 7.20748 15.7679C6.92148 15.4682 6.93252 14.9935 7.23214 14.7075L12.1638 10L7.23214 5.29252C6.93252 5.00651 6.92148 4.53177 7.20748 4.23214Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="w-[23.15rem] h-[11rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
              <h1 className="abel text-[1.375rem]">Standup Meeting</h1>
              <h1 className="abel text-[1rem] ">
                Thursday, 18<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-2">
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
              <div className="mt-2 w-full flex justify-end items-center">
                <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
                  <span>View Conversation</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.20748 4.23214C7.49349 3.93252 7.96823 3.92148 8.26786 4.20748L13.7679 9.45748C13.9161 9.59901 14 9.79504 14 10C14 10.205 13.9161 10.401 13.7679 10.5425L8.26786 15.7925C7.96823 16.0785 7.49349 16.0675 7.20748 15.7679C6.92148 15.4682 6.93252 14.9935 7.23214 14.7075L12.1638 10L7.23214 5.29252C6.93252 5.00651 6.92148 4.53177 7.20748 4.23214Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="w-[22.65rem] h-[11rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-center items-start">
              <h1 className="abel text-[1.375rem]">
                Customer Evaluation Meeting
              </h1>
              <h1 className="abel text-[1rem] ">
                Thursday, 25<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-2">
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover  h-[2.5rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2.5rem] object-cover h-[2.5rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
              <div className="mt-2 w-full flex justify-end items-center">
                <button className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6">
                  <span>View Conversation</span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.20748 4.23214C7.49349 3.93252 7.96823 3.92148 8.26786 4.20748L13.7679 9.45748C13.9161 9.59901 14 9.79504 14 10C14 10.205 13.9161 10.401 13.7679 10.5425L8.26786 15.7925C7.96823 16.0785 7.49349 16.0675 7.20748 15.7679C6.92148 15.4682 6.93252 14.9935 7.23214 14.7075L12.1638 10L7.23214 5.29252C6.93252 5.00651 6.92148 4.53177 7.20748 4.23214Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center flex-col mt-12">
          <div className="relative  w-[45%]">
            <span className="bottom-3 rotate-180 right-0 absolute"></span>
            <img src={illustration_404} className="w-full" alt="" />
          </div>
          <h1 className="abel text-[1.3em] mt-2 capitalize">
            You Have No Meetings Yet? start planning Yours!
          </h1>
        </div> */}
    </div>
  );
};

export default Meetings;
