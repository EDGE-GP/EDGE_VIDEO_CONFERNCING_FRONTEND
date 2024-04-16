import tempProfileImage from "../../assets/selfPortrait.jpg";
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
import dummyAccount3 from "../../assets/account3.png";
const Conversations = () => {
  return (
    <div className=" h-full card-shadow  pt-4 bg-white ml-[17.5rem] rounded-3xl  mr-[2rem] ">
      <h1 className="abel text-[3rem] leading-[3.5rem] px-8 ">Conversations</h1>
      <h3 className="abel capitalize text-[1rem] px-8">
        Meeting Minutes: Capturing Every Uttered Word or Signed Gesture for
        Future Reference
      </h3>
      <div className=" relative pb-4 h-[84.5%] rounded-3xl  mt-6 px-8 flex gap-x-4">
        <div className="w-[20rem] h-full overflow-y-scroll border-[#151515] flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-1 bg-[#F8F8F8]  rounded-xl py-3 px-3 abel w-full justify-center items-center abel cursor-pointer">
            <div className="w-full px-2">
              <div className="flex  justify-between items-center">
                <div className="flex gap-x-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-[#7986CB]"></div>
                  <h3 className="abel  text-lg">Project Kickoff Meeting</h3>
                </div>
              </div>
              <h1 className="text-[#a3a3a3]  text-sm   ">
                Thursday, 11<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-1">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2rem] object-cover  h-[2rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2rem] object-cover h-[2rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2rem] object-cover h-[2rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 rounded-xl py-3 px-3 abel w-full justify-center items-center abel cursor-pointer">
            <div className="w-full px-2">
              <div className="flex  justify-between items-center">
                <div className="flex gap-x-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-[#616161]"></div>
                  <h3 className="abel  text-lg">Standup Meeting</h3>
                </div>
              </div>
              <h1 className="text-[#a3a3a3]  text-sm   ">
                Thursday, 11<sub className="align-super">th</sub> April 2024
              </h1>
              <div className="flex flex-wrap mt-1">
                <img
                  className="w-[2rem] object-cover h-[2rem] rounded-full"
                  src={tempProfileImage}
                  alt=""
                />
                <img
                  className="w-[2rem] object-cover  h-[2rem] translate-x-[-1rem] rounded-full"
                  src={dummyAccount1}
                  alt=""
                />
                <img
                  className="w-[2rem] object-cover h-[2rem] translate-x-[-2rem] rounded-full"
                  src={dummyAccount2}
                  alt=""
                />
                <img
                  className="w-[2rem] object-cover h-[2rem] translate-x-[-3rem] rounded-full"
                  src={dummyAccount3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[54rem] h-full rounded-2xl  bg-[#F8F8F8]">
          <div className="w-full h-full px-6 py-4 ">
            <div className="h-[100%] flex w-full flex-col-reverse gap-y-1  overflow-y-scroll">
              <div className="flex  justify-start flex-row-reverse w-full gap-x-2">
                <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
                  <img
                    className="w-[3rem] object-cover h-[3rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-full justify-end items-end">
                  <h1 className="text-[1rem] abel font-semibold text-start ">
                    Ibrahim Askar
                  </h1>
                  <div className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                    <span>
                      Oh wow? we don't have that much time then, don't you
                      think?
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  justify-start w-full gap-x-2">
                <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
                  <img
                    className="w-[3rem] object-cover h-[3rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                  <h1 className="text-[1rem] abel font-semibold ">
                    Ibrahim Askar
                  </h1>
                  <div className="px-3 abel bg-[#ebebeb] py-2 rounded-[10px] flex justify-start items-center">
                    <span>Well, i think we should be finished by May</span>
                  </div>
                </div>
              </div>
              <div className="flex  justify-start flex-row-reverse w-full gap-x-2">
                <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
                  <img
                    className="w-[3rem] object-cover h-[3rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-full justify-end items-end">
                  <h1 className="text-[1rem] abel font-semibold text-start ">
                    Ibrahim Askar
                  </h1>
                  <div className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                    <span>What is the avilable timeline for the project?</span>
                  </div>
                </div>
              </div>

              <div className="flex  justify-start w-full gap-x-2">
                <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
                  <img
                    className="w-[3rem] object-cover h-[3rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                  <h1 className="text-[1rem] abel font-semibold ">
                    Ibrahim Askar
                  </h1>
                  <div className="px-3 abel bg-[#ebebeb] py-2 rounded-[10px] flex justify-start items-center">
                    <span>Okay Let's kick it off!</span>
                  </div>
                </div>
              </div>

              <div className="flex  justify-start flex-row-reverse w-full gap-x-2">
                <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
                  <img
                    className="w-[3rem] object-cover h-[3rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-full justify-end items-end">
                  <h1 className="text-[1rem] abel font-semibold text-start ">
                    Ibrahim Askar
                  </h1>
                  <div className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                    <span>All good thank you</span>
                  </div>
                  <div className="px-3 abel bg-[#151515] text-white py-2 rounded-[10px] flex justify-start items-center">
                    <span>We need to start planning for the project</span>
                  </div>
                </div>
              </div>
              <div className="flex  justify-start w-full gap-x-2">
                <div className="w-[3.25rem] flex justify-center items-center rounded-full h-[3.25rem]">
                  <img
                    className="w-[3rem] object-cover h-[3rem] rounded-full"
                    src={tempProfileImage}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-1 w-full justify-start items-start">
                  <h1 className="text-[1rem] abel font-semibold ">
                    Ibrahim Askar
                  </h1>
                  <div className="px-3 abel bg-[#ebebeb] py-2  rounded-[10px] flex justify-start items-center">
                    <span>Hello, World!</span>
                  </div>
                  <div className="px-3 abel bg-[#ebebeb] py-2 rounded-[10px] flex justify-start items-center">
                    <span>How are you doing today?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
