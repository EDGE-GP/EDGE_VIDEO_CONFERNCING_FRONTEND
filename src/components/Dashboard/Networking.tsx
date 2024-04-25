// import illustration_404 from "../../assets/404.svg";
import tempProfileImage from "../../assets/selfPortrait.jpg";
import dummyAccount1 from "../../assets/account4.png";
import dummyAccount2 from "../../assets/account6.png";
import dummyAccount3 from "../../assets/account3.png";

const Networking = () => {
  return (
    <div className=" h-full grid grid-cols-6 grid-rows-2 ml-[17.5rem] gap-y-4 gap-x-4 rounded-2xl  mr-[2rem] ">
      {/* meeting header */}
      <div className=" rounded-2xl w-full col-span-4 h-full bg-white card-shadow px-4 pt-3 ">
        <h3 className="abel text-[1.3rem] mb-2">Meeting Invitations</h3>
        <div className="flex flex-col gap-y-2 h-[17.5em] overflow-y-scroll px-2">
          <div className="flex justify-between items-center bg-[#F7F7F7] rounded-2xl px-4 py-3">
            <div className="flex flex-col gap-y-">
              <div className="flex gap-x-2 items-center">
                <div className="w-6 h-6 rounded-full bg-[#616161] "></div>
                <div className="flex gap-x- items-center">
                  <h3 className="abel  text-lg">Standup Meeting</h3>
                  <span className="mx-1 text-lg abel">-</span>
                  <h1 className="abel text-lg">
                    Thursday, 11<sub className="align-super">th</sub> April 2024
                  </h1>
                </div>
              </div>
              <h1 className="abel text-[1rem] ">HIAK-WUIA-MKLN</h1>
              <div className="flex flex-wrap ml-">
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

              <h1 className="abel text-md text-[#a3a3a3]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae, ipsum.
              </h1>
            </div>
            <div className="flex items-end gap-x-3 h-full ">
              <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                Delete
              </button>
              <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                Accept
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#F7F7F7] rounded-2xl px-4 py-3">
            <div className="flex flex-col gap-y-">
              <div className="flex gap-x-2 items-center">
                <div className="w-6 h-6 rounded-full bg-[#616161] "></div>
                <div className="flex gap-x- items-center">
                  <h3 className="abel  text-lg">Standup Meeting</h3>
                  <span className="mx-1 text-lg abel">-</span>
                  <h1 className="abel text-lg">
                    Thursday, 11<sub className="align-super">th</sub> April 2024
                  </h1>
                </div>
              </div>
              <h1 className="abel text-[1rem] ">HIAK-WUIA-MKLN</h1>
              <div className="flex flex-wrap ml-">
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
              <h1 className="abel text-md text-[#a3a3a3]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae, ipsum.
              </h1>
            </div>
            <div className="flex items-end gap-x-3 h-full ">
              <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                Delete
              </button>
              <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full col-span-2 row-span-2 h-full px-4 py-3 rounded-2xl card-shadow bg-white">
        <h3 className="abel text-[1.3rem] mb-2">Notifications</h3>
        <div className="flex flex-col gap-y-2 h-[94.5%] overflow-y-scroll">
          <div className="flex flex-col   justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
            <div className="w-full flex items-center gap-x-2 min-h-[3.5rem] ">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={tempProfileImage}
                alt=""
              />

              <h3 className="abel text-[1.1rem] h-full w-full ">
                Ibrahim Askar accepted your friend request
              </h3>
            </div>
            <div className="w-full flex justify-end items-center">
              <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                8 Apr 7:41PM
              </h1>
            </div>
          </div>
          <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
            <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount1}
                alt=""
              />

              <h3 className="abel text-[1.1rem] ">
                Ibrahim Askar accepted your friend request
              </h3>
            </div>
            <div className="w-full flex justify-end items-center">
              <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                8 Apr 7:41PM
              </h1>
            </div>
          </div>
          <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
            <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={tempProfileImage}
                alt=""
              />

              <h3 className="abel text-[1.1rem] ">
                Feyd Rutha accepted your friend request
              </h3>
            </div>
            <div className="w-full flex justify-end items-center">
              <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                8 Apr 7:41PM
              </h1>
            </div>
          </div>
          <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
            <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount1}
                alt=""
              />

              <h3 className="abel text-[1.1rem] ">
                Paul Atreides accepted your friend request
              </h3>
            </div>
            <div className="w-full flex justify-end items-center">
              <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                8 Apr 7:41PM
              </h1>
            </div>
          </div>
          <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
            <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount2}
                alt=""
              />

              <h3 className="abel text-[1.1rem] ">
                Ibrahim Askar accepted your friend request
              </h3>
            </div>
            <div className="w-full flex justify-end items-center">
              <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                8 Apr 7:41PM
              </h1>
            </div>
          </div>
          <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
            <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount3}
                alt=""
              />

              <h3 className="abel text-[1.1rem] ">
                Paul Atreides accepted your friend request
              </h3>
            </div>
            <div className="w-full flex justify-end items-center">
              <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                8 Apr 7:41PM
              </h1>
            </div>
          </div>
          <div className="flex flex-col min-h-[6rem] max-h-[6rem] justify-between w-full px-3 py-3 rounded-2xl bg-[#F7F7F7]">
            <div className="w-full flex items-center gap-x-2 h-[3.5rem]">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount1}
                alt=""
              />

              <h3 className="abel text-[1.1rem] ">
                Feyd Rutha accepted your friend request
              </h3>
            </div>
            <div className="w-full flex justify-end items-center">
              <h1 className="abel text-[0.75rem] text-[#8b8b8b] font-semibold">
                8 Apr 7:41PM
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
        <h3 className="abel text-[1.3rem] mb-">Friends</h3>
        <div className="h-[2.5rem] placeholder:capitalize mb-2  w-full flex bg-[#F8F8FA] rounded-lg">
          <input
            type="text"
            className="w-full  roudned-full abel px-3 outline-none text-[14px] bg-transparent"
            placeholder="Search for friends and users to add"
          />
        </div>
        <div className="flex flex-col px-2 gap-y-2 h-[15rem] overflow-y-scroll">
          <div className="flex justify-between ">
            <div className="flex justify-start items-center gap-x-2">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={tempProfileImage}
                alt=""
              />
              <h1 className="text-[1.1rem] abel">Ibrahim Askar</h1>
            </div>
            <div className="flex items-center gap-x-2">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.9996C12.5523 12.9996 13 12.5519 13 11.9996C13 11.4473 12.5523 10.9996 12 10.9996C11.4477 10.9996 11 11.4473 11 11.9996C11 12.5519 11.4477 12.9996 12 12.9996Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.99963C12.5523 5.99963 13 5.55192 13 4.99963C13 4.44735 12.5523 3.99963 12 3.99963C11.4477 3.99963 11 4.44735 11 4.99963C11 5.55192 11.4477 5.99963 12 5.99963Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19.9996C12.5523 19.9996 13 19.5519 13 18.9996C13 18.4473 12.5523 17.9996 12 17.9996C11.4477 17.9996 11 18.4473 11 18.9996C11 19.5519 11.4477 19.9996 12 19.9996Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex justify-start items-center gap-x-2">
              <img
                className="w-[2.rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount1}
                alt=""
              />
              <h1 className="text-[1.1rem] abel">Feyd Rutha</h1>
            </div>
            <div className="flex items-center gap-x-2">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.9996C12.5523 12.9996 13 12.5519 13 11.9996C13 11.4473 12.5523 10.9996 12 10.9996C11.4477 10.9996 11 11.4473 11 11.9996C11 12.5519 11.4477 12.9996 12 12.9996Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.99963C12.5523 5.99963 13 5.55192 13 4.99963C13 4.44735 12.5523 3.99963 12 3.99963C11.4477 3.99963 11 4.44735 11 4.99963C11 5.55192 11.4477 5.99963 12 5.99963Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19.9996C12.5523 19.9996 13 19.5519 13 18.9996C13 18.4473 12.5523 17.9996 12 17.9996C11.4477 17.9996 11 18.4473 11 18.9996C11 19.5519 11.4477 19.9996 12 19.9996Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex justify-start items-center gap-x-2">
              <img
                className="w-[2.rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount2}
                alt=""
              />
              <h1 className="text-[1.1rem] abel">Paul Atreides</h1>
            </div>
            <div className="flex items-center gap-x-2">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.9996C12.5523 12.9996 13 12.5519 13 11.9996C13 11.4473 12.5523 10.9996 12 10.9996C11.4477 10.9996 11 11.4473 11 11.9996C11 12.5519 11.4477 12.9996 12 12.9996Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5.99963C12.5523 5.99963 13 5.55192 13 4.99963C13 4.44735 12.5523 3.99963 12 3.99963C11.4477 3.99963 11 4.44735 11 4.99963C11 5.55192 11.4477 5.99963 12 5.99963Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19.9996C12.5523 19.9996 13 19.5519 13 18.9996C13 18.4473 12.5523 17.9996 12 17.9996C11.4477 17.9996 11 18.4473 11 18.9996C11 19.5519 11.4477 19.9996 12 19.9996Z"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
        <h3 className="abel text-[1.3rem] mb-2">Friend Requests</h3>
        <div className="flex flex-col px-2 gap-y-2 h-[17.5em] overflow-y-scroll">
          <div className="flex justify-between ">
            <div className="flex justify-start items-center gap-x-2">
              <img
                className="w-[2.5rem] object-cover h-[2.5rem] rounded-full"
                src={tempProfileImage}
                alt=""
              />
              <h1 className="text-[1.1rem] abel">Ibrahim Askar</h1>
            </div>
            <div className="flex items-center gap-x-3 h-full ">
              <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                Delete
              </button>
              <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                Accept
              </button>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex justify-start items-center gap-x-2">
              <img
                className="w-[2.rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount1}
                alt=""
              />
              <h1 className="text-[1.1rem] abel">Feyd Rutha</h1>
            </div>
            <div className="flex items-center gap-x-3 h-full ">
              <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                Delete
              </button>
              <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                Accept
              </button>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex justify-start items-center gap-x-2">
              <img
                className="w-[2.rem] object-cover h-[2.5rem] rounded-full"
                src={dummyAccount2}
                alt=""
              />
              <h1 className="text-[1.1rem] abel">Paul Atreides</h1>
            </div>
            <div className="flex items-center gap-x-3 h-full ">
              <button className="abel text-[1rem] font-semibold text-red-500 hover:text-[#DF6962] transition-all">
                Delete
              </button>
              <button className="abel text-[1rem] font-semibold text-[#161616] hover:text-[#333333]">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" col-span-2 w-full h-full flex flex-col justify-between bg-white card-shadow rounded-2xl px-4 pt-3">
          <h3 className="abel text-[1.3rem] mb-2">User Activity</h3>
        </div> */}
    </div>
  );
};

export default Networking;
