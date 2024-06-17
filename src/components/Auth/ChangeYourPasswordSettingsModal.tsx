import  { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, isAxiosError } from "axios";
import { notify } from "@/utils/Toaster/notify";
import CircularLoading from "../ui/CircularLoading";
const ChangeYourPasswordSettingsModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const { isPending, mutateAsync: changeYourPassword } = useMutation({
    mutationKey: ["changeYourPassowrd"],
    mutationFn: async () => {
      const res = await axios.put(
        `${process.env.BACKEND_SERVER}/api/v1/users/update-password`,
        {
          currentPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
    },
    onSuccess: () => {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      notify("Password was updated successfully", "success", 3000);
      setIsOpen(false);
    },
    onError: (error: Error | AxiosError) => {
      console.log(error);
      if (isAxiosError(error)) {
        if (error.response?.data.details) {
          error?.response?.data?.details.forEach(
            (error: { message: string }) => {
              notify(error.message, "error", 3000);
            }
          );
        } else {
          notify(error.response?.data.message, "error", 3000);
        }
      } else {
        notify("Something went wrong", "error", 3000);
      }
    },
  });
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="outline-none text-[#151515] font-semibold abel">
          Change your password
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm   gap-y-6 bg-white">
        <DialogHeader>
          <DialogTitle className="outline-none">
            <h1 className="text-[#151515] outline-none font-semibold abel">
              Change your password
            </h1>
          </DialogTitle>
          <DialogDescription>
            {/* inputs go in here */}
            <div className="flex flex-col gap-y-4 mt-2 w-full justify-center items-center">
              <div className="flex flex-col justify-center w-[95%]">
                <div className="w-full flex flex-col justify-center">
                  <h3 className="abel text-[1rem] ">Current Password</h3>
                  <input
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                    type="password"
                    placeholder="Please enter your current password"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center w-[95%]">
                <div className="w-full flex flex-col justify-center">
                  <h3 className="abel text-[1rem] ">New Password</h3>
                  <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                    type="password"
                    placeholder="Please enter your new password"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center w-[95%]">
                <div className="w-full flex flex-col justify-center">
                  <h3 className="abel text-[1rem] ">Confirm New Password</h3>
                  <input
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className={` border-black border-b-2 w-full py-1 px-2 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                    type="password"
                    placeholder="Please confirm your new password"
                  />
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          {/* submit goes in here */}
          <button
            onClick={() => {
              changeYourPassword();
            }}
            className="flex gap-x-1 items-center abel h-[2.375rem]  w-[10rem] justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-lg px-6"
          >
            {isPending ? <CircularLoading button /> : "Change Password"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeYourPasswordSettingsModal;
