import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CircularLoading from "@/components/ui/CircularLoading";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "@/utils/Toaster/notify";
import { IMeeting } from "@/types/Meeting";
import { useSearchParams } from "react-router-dom";

const MeetingRating: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  meeting: IMeeting | undefined;
}> = ({ isOpen, setIsOpen, meeting }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [totalStars, setTotalStars] = useState(5);
  const [comment, setComment] = useState<string>("");

  const { mutateAsync: rateMeeting, isPending } = useMutation({
    mutationKey: ["rateMeeting"],
    mutationFn: async () => {
      const res = await axios.post(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/rate`,
        {
          rating,
          comment,
          conferenceId: meeting?.conferenceId,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setIsOpen(false);
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete("rating");
      setSearchParams(searchParams.toString());
      notify("Rating submitted successfully", "success", 3000);
    },
  });
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={`sm:max-w-sm gap-y-4 bg-white`}>
        <DialogHeader>
          <DialogTitle className="outline-none">
            <h1 className="text-[#151515] capitalize outline-none font-semibold abel text-[1.25rem]">
              Rate "{meeting?.title}" Meeting
            </h1>
          </DialogTitle>
          <DialogDescription className="px-2">
            {/* inputs go in here */}
            <div className="w-full flex justify-center items-center mt-4">
              {[...Array(totalStars)].map((_, index) => {
                const currentRating = index + 1;

                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onChange={() => setRating(currentRating)}
                      className="hidden"
                    />
                    <span
                      className={`text-[2rem] ${
                        currentRating <= (hover || rating)
                          ? "text-[#212121]"
                          : "text-[#e4e5e9]"
                      }`}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(0)}
                    >
                      &#9733;
                    </span>
                  </label>
                );
              })}
            </div>
            <div className="w-full flex flex-col mt-2">
              <div className="w-full flex justify-start items-center ">
                <h3 className="abel font-semibold text-[1rem]">
                  Do you have any comment?
                </h3>
              </div>
              <div className="w-full px-2">
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className={` border-black border-b-2 w-full py-1 px-1 abel text-[1rem] outline-none placeholder:text-gray-400 tracking-wider placeholder: placeholder:text-sm `}
                  type="text"
                  placeholder="your expierence matters a lot to us "
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end mt-2">
          <button
            onClick={() => {
              rateMeeting();
            }}
            className="flex gap-x-1 items-center abel h-[2.375rem]  w-[10rem] justify-center text-center transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-[8px] drop-shadow-lg px-6"
          >
            {isPending ? <CircularLoading button /> : "Submit rating"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingRating;
