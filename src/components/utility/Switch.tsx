import React from "react";
const Switch: React.FC<{
  selected: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
}> = ({ selected, setSelect, disabled }) => {
  return (
    <>
      {!disabled ? (
        <div
          onClick={() => {
            setSelect((prevState) => !prevState);
          }}
          className={`cursor-pointer relative  border-[1px] border-[#bbbbbb]  px-[1px]  transition-all duration-200  w-[2.25rem] h-[1.2rem]  ${
            selected && !disabled
              ? "bg-black  border-black"
              : "bg-[#E0E0E0] border-[#e1e1e1]  shadow-3xl"
          } rounded-full `}
        >
          <div
            className={`absolute h-[1rem] top-[50%] translate-y-[-50%]  w-[1rem] transition-all duration-200 ${
              selected ? "translate-x-[100%]" : "translate-x-0"
            } rounded-full border-2 border-white bg-[#fafafa] z-10 shadow-3xl`}
          ></div>
        </div>
      ) : (
        <div
          onClick={() => {
            // setSelect((prevState) => !prevState);
          }}
          className={`cursor-pointer relative  border-[1px] border-[#bbbbbb]  px-[1px]  transition-all duration-200  w-[2.25rem] h-[1.2rem]  ${
            selected && !disabled
              ? "bg-black  border-black"
              : "bg-[#D9D9D9] border-[#e1e1e1]  shadow-3xl"
          } rounded-full`}
        >
          <div
            className={`absolute h-[1rem] top-[50%] translate-y-[-50%]  w-[1rem] transition-all duration-200 ${
              selected ? "translate-x-[100%]" : "translate-x-0"
            } rounded-full border-2 border-[#BDBDBD] bg-[#BDBDBD] z-10 shadow-3xl`}
          ></div>
        </div>
      )}
    </>
  );
};

export default Switch;
