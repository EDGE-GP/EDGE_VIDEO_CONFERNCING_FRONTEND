import tempProfileImage from "@/assets/selfPortrait.jpg";
import dummyAccount1 from "@/assets/account4.png";
import dummyAccount2 from "@/assets/account6.png";
const UserNetworking = () => {
  return (
    <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
      <h3 className="abel text-[1.3rem] mb-1">Networking</h3>
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
  );
};

export default UserNetworking;
