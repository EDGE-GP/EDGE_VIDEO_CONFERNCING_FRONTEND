import illustration_404 from "../../assets/404.svg";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { isPast } from "date-fns";
import { IMeeting } from "@/types/Meeting";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CircularLoading from "@/components/ui/CircularLoading";
import MeetingPreview from "./meetings/MeetingPreview";
import { useEffect, useState } from "react";
import MeetingRating from "./meetings/MeetingRating";

const Meetings = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openRatings, setOpenRatings] = useState(false);
  const { data: meetings = [], isLoading } = useQuery<IMeeting[]>({
    queryKey: ["fetchMeetings", user?.id],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.BACKEND_SERVER}/api/v1/meetings`,
        {
          withCredentials: true,
        }
      );
      return res.data.data.meetings ?? [];
    },
    retry: 1,
  });
  console.log({
    meetings,
    isLoading,
  });
  const { data: ratingMeeting, error } = useQuery<IMeeting>({
    queryKey: ["ratingFetchMeeting"],
    queryFn: async () => {
      const res = await axios(
        `${process.env.BACKEND_SERVER}/api/v1/meetings/rate/${searchParams.get(
          "rating"
        )}`,
        {
          withCredentials: true,
        }
      );
      setOpenRatings(true);
      return res.data.data.meeting;
    },
    enabled:
      !!searchParams.get("rating") &&
      /^[A-Z]{4}-[A-Z]{4}-[A-Z]{4}$/.test(searchParams.get("rating") as string),
  });
  console.log({ ratingMeeting, error });

  return (
    <>
      {openRatings && (
        <MeetingRating
          isOpen={openRatings}
          setIsOpen={setOpenRatings}
          meeting={ratingMeeting}
        />
      )}
      <div className=" h-full card-shadow  pt-4 bg-white md:ml-[17.5rem]  rounded-3xl  mr-[2rem] ">
        <h1 className="abel text-[3rem] leading-[3.5rem] px-8 ">Meetings</h1>
        <h3 className="abel text-[1rem] px-8 capitalize">
          Manage your meetings: View past converstations and Edit scheduled
          Meetings
        </h3>
        {isLoading ? (
          <div className=" h-full pb-24 flex justify-center items-center">
            <CircularLoading button={false} />
          </div>
        ) : meetings.length > 0 ? (
          <div className="h-[85%] rounded-3xl  pb-4 mt-3 overflow-y-scroll px-8">
            <div className=" w-full">
              <h1 className="mb-4 abel text-[1.5rem] ">Upcoming Meetings</h1>
              <div className="w-full flex flex-wrap gap-x-2 gap-y-2">
                {meetings.map(
                  (meeting) =>
                    !isPast(new Date(meeting.startTime)) && (
                      <MeetingPreview {...meeting} key={meeting.id} />
                    )
                )}
                <div className="w-[23.15rem] h-[11.5rem] card-shadow-2  rounded-2xl px-4 flex flex-col justify-between py-4 items-start">
                  <div>
                    <div className="flex items-center gap-x-2">
                      <h1 className="abel text-[1.375rem] ">
                        Schedule your next meeting
                      </h1>
                    </div>
                    <h1 className="abel text-[1rem] ">
                      reach your peers and plan your next meeting right away
                    </h1>
                  </div>

                  <div className="mt-1 w-full flex justify-end items-center">
                    <Link
                      to="/dashboard/schedule"
                      className="flex gap-x-1 items-center abel h-[2.375rem]  transition-all text-white bg-[#151515] duration-200 hover:bg-[#212121] rounded-full card-shadow px-6"
                    >
                      <span>Schedule Meeting</span>
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12H12M12 12H18M12 12V18M12 12V6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full">
              <h1 className="mb-4 abel text-[1.5rem] ">Previous Meetings</h1>
              <div className="w-full flex flex-wrap gap-x-2 gap-y-2 md:flex-row flex-col">
                {meetings.map(
                  (meeting) =>
                    isPast(new Date(meeting.startTime)) && (
                      <MeetingPreview {...meeting} key={meeting.id} />
                    )
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-start items-center flex-col mt-12">
            <div className="relative  ">
              <span className=" rotate-180 "></span>
              <img src={illustration_404} className="w-full" alt="" />
            </div>
            <h1 className="abel text-[1.25em] mt-4 ">
              You have no meetings yet? start planning Yours right away !
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Meetings;
