import tempProfileImage from "@/assets/selfPortrait.jpg";
import dummyAccount1 from "@/assets/account4.png";
import dummyAccount2 from "@/assets/account6.png";
import dummyAccount3 from "@/assets/account3.png";
const Notifications = () => {
  return (
    <div className="w-full col-span-2 row-span-2 h-full px-4 py-3 rounded-2xl card-shadow bg-white">
      <h3 className="abel text-[1.3rem] mb-1">Notifications</h3>
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
  );
};

export default Notifications;
