// import illustration_404 from "../../assets/404.svg";
import tempProfileImage from "@/assets/selfPortrait.jpg";
import dummyAccount1 from "@/assets/account4.png";
import dummyAccount2 from "@/assets/account6.png";
import Notifications from "@/components/dashboard/networking/Notifications";
import MeetingsInvitations from "@/components/dashboard/networking/MeetingsInvitations";
import UserNetworking from "@/components/dashboard/networking/UserNetworking";
const Networking = () => {
  return (
    <div className=" h-full grid grid-cols-6 grid-rows-2 ml-[17.5rem] gap-y-2 gap-x-4 rounded-2xl  mr-[2rem] ">
      {/* meeting header */}
      <MeetingsInvitations />
      <Notifications />
      <UserNetworking />
      <div className="col-span-2 w-full px-4 pt-3 rounded-2xl h-full bg-white card-shadow">
        <h3 className="abel text-[1.3rem] mb-1">Friend Requests</h3>
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
                Reject
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
                Reject
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
                Reject
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
