import toast from "react-hot-toast";

export const notify = (
  message: string,
  type: "success" | "error" | "inform",
  duration: number
) => {
  if (type === "success") {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } min-w-[25rem]  shadow-lg bg  h-[3.2rem]  z-[100] bg-green-500  rounded-lg ring-1 ring-black ring-opacity-5 pointer-events-auto  text-center text-white abel text-xl flex justify-between items-center px-4 gap-2`}
        >
          <div className="flex justify-center items-center gap-2">
            <svg
              focusable="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#fff"
              stroke="#fff"
              strokeWidth="0.5"
            >
              <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
            </svg>

            <h3 className="h-full text-[16px] font-semibold">{message}</h3>
          </div>
          <div className="flex ">
            <button
              onClick={() => {
                toast.remove(t.id);
              }}
            >
              <svg
                width="24"
                height="24"
                fill="#fff"
                className="justify-self-end"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                stroke="#fff"
                strokeWidth="0.5"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
        </div>
      ),
      {
        duration: duration,
      }
    );
  } else if (type === "error") {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full shadow-lg bg  h-[3.2rem]  z-[100] bg-red-500  rounded-lg ring-1 ring-black ring-opacity-5 pointer-events-auto  text-center text-white abel text-xl flex justify-between items-center px-4 gap-2`}
        >
          <div className="flex justify-center items-center gap-2">
            <svg
              className="fill-[#fff]"
              width="24"
              height="24"
              focusable="false"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth="0.5"
              aria-hidden="true"
            >
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <h3 className="h-full text-[16px] font-semibold">{message}</h3>
          </div>
          <button onClick={() => toast.remove(t.id)}>
            <svg
              width="24"
              height="24"
              fill="#fff"
              className="justify-self-end"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              stroke="#fff"
              strokeWidth="0.5"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
      ),
      {
        duration: duration,
      }
    );
  } else if (type === "inform") {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full shadow-lg bg  h-[3.2rem]  z-[100] bg-[#2196F3] rounded-lg ring-1 ring-black ring-opacity-5 pointer-events-auto  text-center text-white abel text-xl flex justify-between items-center px-4 gap-2`}
        >
          <div className="flex justify-center items-center gap-2">
            <svg
              className="fill-[#fff]"
              width="24"
              height="24"
              focusable="false"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth="0.5"
              aria-hidden="true"
            >
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <h3 className="h-full text-[16px] font-semibold">{message}</h3>
          </div>
          <button onClick={() => toast.remove(t.id)}>
            <svg
              width="24"
              height="24"
              fill="#fff"
              className="justify-self-end"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              stroke="#fff"
              strokeWidth="0.5"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
      ),
      {
        duration: duration,
      }
    );
  }
};
