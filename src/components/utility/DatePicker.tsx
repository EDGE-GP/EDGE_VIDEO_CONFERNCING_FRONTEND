import React, { useState } from "react";

// import { Menu, Transition } from "@headlessui/react";
// import { DotsVerticalIcon } from "@heroicons/react/outline";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isToday,
  parse,
  startOfToday,
  isPast,
} from "date-fns";

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

const DatePicker: React.FC = () => {
  const today = startOfToday();

  const [selectedDay, setSelectedDay] = useState<Date>(today); // Set an initial date
  const [currentMonth, setCurrentMonth] = useState<string>(
    format(today, "MMM-yyyy")
  );

  const [currentTime, setCurrentTime] = useState<string>(
    format(new Date(), "HH:mm")
  );
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  console.log({ currentTime });
  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const leftCalender = add(firstDayCurrentMonth, { months: -2 });
    setCurrentMonth(format(leftCalender, "MMM-yyyy"));
  }

  function nextMonth() {
    const leftCalender = add(firstDayCurrentMonth, { months: 2 });
    setCurrentMonth(format(leftCalender, "MMM-yyyy"));
  }

  const handleDateClick = (day: Date) => {
    if (isPast(day) && !isToday(day)) return;
    setSelectedDay(day);
  };

  return (
    <div className="abel bg-white w-full  h-[22.8rem] flex flex-col  ">
      <h1 className="text-[#151515] mb- text-[1.25rem]">Pick date & time</h1>
      <div className="w-full flex items-start justify-between gap-x- ">
        <div className=" w-[65%] h-full">
          <div className=" md:divide-x md:divide-gray-200">
            <div className="">
              <div className="flex w-full justify-between items-center mb-4">
                <h2 className="font- text-center text-[16px] pl-1 text-[#151515]">
                  {format(firstDayCurrentMonth, "MMMM yyyy")}
                </h2>
                <div className="flex justify-between gap-x-4">
                  <button onClick={previousMonth}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 7 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.06006 1.71978L1.71339 6.06645C1.20006 6.57979 1.20006 7.41979 1.71339 7.93312L6.06006 12.2798"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button onClick={nextMonth}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 7 14"
                      fill="none"
                      className="rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.06006 1.71978L1.71339 6.06645C1.20006 6.57979 1.20006 7.41979 1.71339 7.93312L6.06006 12.2798"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 text-[12px] leading- text-center text-[#151515] font-semibold">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
              <div className="grid grid-cols-7 text-[12px]">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "py-[4px] px-[4px]  text-black"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        handleDateClick(day);
                      }}
                      className={classNames(
                        "font-semibold",
                        "mx-auto flex h-[38px] text-[14px] w-[38px] items-center justify-center rounded-full",
                        isEqual(day, selectedDay) && "text-white",
                        isEqual(day, selectedDay) &&
                          "bg-[#151515] text-white rounded-full",
                        isToday(day) &&
                          !isEqual(day, selectedDay) &&
                          "text-red-500",

                        isPast(day) && !isEqual(day, today) && "text-[#999999]"
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]  pl-8 flex  flex-col h-full gap-y-4">
          <div className="w-full flex items-start pl-2 border-b-[1px] border-[#D3D3D3] h-8 ">
            <span className="text-[#666666] font-[500] text-[16px] loew">
              {format(selectedDay, "MMM dd, yyyy")}
            </span>
          </div>
          <div className="w-full flex items-start pl-2 border-b-[1px] border-[#D3D3D3] h-8 ">
            {/* <TimeField
              style={{
                width: "100%",
                height: "100%",
                outline: "none",
                color: "#666666",
              }}
            /> */}
            <input
              type="time"
              name="time"
              className="h-full w-full outline-none appearance-none bg-transparent text-[#666666] font-[500] text-[16px] loew"
              onChange={(e) => {
                e.preventDefault();
                setCurrentTime(e.target.value);
              }}
              value={currentTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
