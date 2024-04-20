import edgeLogo from "../../assets/edge.png";
import tempProfileImage from "../../assets/selfPortrait.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { preloaderActions } from "../../store/preloader/preloaderSlice";
;
import { AnimatePresence } from "framer-motion";

const Sidebar = ({sideVisibality }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  console.log({ location });
  return (
    
 <AnimatePresence mode="wait">
    <div className={`fixed top-[4rem] md:top-[auto] z-40 text-white px-4 py-4 md:h-[92%] h-[93%] w-[15.5rem] rounded-3xl translate-x-0 bg-[#151515] gap-y-2 flex  flex-col justify-between ${sideVisibality ? ' sidebar-transform ' : 'sidebar-show '}`}>
      <div className="flex flex-col gap-y-2">
        <button
          onClick={() => {
            dispatch(preloaderActions.setPreloader(true));
            setTimeout(() => {
              history("/");
            }, 300);
            setTimeout(() => {
              dispatch(preloaderActions.setPreloader(false));
            }, 1300);
          }}
          className="w-full flex justify-center items-center"
        >
          <img src={edgeLogo} className="w-[10rem] h-[5.5rem]" alt="" />
        </button>
        <Link
          to="/dashboard/meetings"
          className="w-full flex justify-center items-center mt- cursor-pointer "
        >
          <div
            className={`flex items-center gap-2 rounded-[11px]  w-full h-[40px]  ${
              location.pathname.includes("meetings")
                ? "  bg-white text-black sidebar-active font-semibold"
                : "hover:bg-[#191919] text-white sidebar-inactive"
            }  px-3 sidebar-link  ease`}
          >
            <div className=" flex justify-center items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.91956 1H5.08043C5.61459 0.99999 6.06044 0.999981 6.42467 1.02974C6.80455 1.06078 7.16121 1.12789 7.49847 1.29973C8.01592 1.56338 8.43662 1.98408 8.70027 2.50153C8.87211 2.83879 8.93922 3.19545 8.97026 3.57533C9.00002 3.93957 9.00001 4.38542 9 4.91957V5.08043C9.00001 5.61459 9.00002 6.06044 8.97026 6.42467C8.93922 6.80456 8.87211 7.16121 8.70027 7.49847C8.43662 8.01592 8.01592 8.43662 7.49847 8.70027C7.16121 8.87211 6.80455 8.93922 6.42467 8.97026C6.06044 9.00002 5.61458 9.00001 5.08043 9H4.91957C4.38541 9.00001 3.93956 9.00002 3.57533 8.97026C3.19544 8.93922 2.83879 8.87211 2.50153 8.70027C1.98408 8.43662 1.56338 8.01592 1.29973 7.49847C1.12789 7.16121 1.06078 6.80456 1.02974 6.42467C0.99998 6.06044 0.999989 5.61459 0.999999 5.08044V4.91957C0.999989 4.38541 0.99998 3.93956 1.02974 3.57533C1.06078 3.19545 1.12789 2.83879 1.29973 2.50153C1.56338 1.98408 1.98408 1.56338 2.50153 1.29973C2.83879 1.12789 3.19544 1.06078 3.57533 1.02974C3.93956 0.999981 4.38541 0.99999 4.91956 1ZM3.69748 2.52476C3.41035 2.54822 3.27307 2.5901 3.18251 2.63624C2.94731 2.75608 2.75608 2.94731 2.63624 3.18251C2.5901 3.27307 2.54822 3.41036 2.52476 3.69748C2.50058 3.99336 2.5 4.37757 2.5 4.95V5.05C2.5 5.62243 2.50058 6.00664 2.52476 6.30252C2.54822 6.58965 2.5901 6.72693 2.63624 6.81749C2.75608 7.05269 2.94731 7.24392 3.18251 7.36376C3.27307 7.4099 3.41035 7.45178 3.69748 7.47524C3.99336 7.49942 4.37757 7.5 4.95 7.5H5.05C5.62243 7.5 6.00664 7.49942 6.30252 7.47524C6.58965 7.45178 6.72693 7.4099 6.81749 7.36376C7.05269 7.24392 7.24392 7.05269 7.36376 6.81749C7.4099 6.72693 7.45178 6.58965 7.47524 6.30252C7.49942 6.00664 7.5 5.62243 7.5 5.05V4.95C7.5 4.37757 7.49942 3.99336 7.47524 3.69748C7.45178 3.41036 7.4099 3.27307 7.36376 3.18251C7.24392 2.94731 7.05269 2.75608 6.81749 2.63624C6.72693 2.5901 6.58965 2.54822 6.30252 2.52476C6.00664 2.50058 5.62243 2.5 5.05 2.5H4.95C4.37757 2.5 3.99336 2.50058 3.69748 2.52476ZM14.9196 1H15.0804C15.6146 0.99999 16.0604 0.999981 16.4247 1.02974C16.8046 1.06078 17.1612 1.12789 17.4985 1.29973C18.0159 1.56338 18.4366 1.98408 18.7003 2.50153C18.8721 2.83879 18.9392 3.19545 18.9703 3.57533C19 3.93956 19 4.3854 19 4.91955V5.08045C19 5.6146 19 6.06044 18.9703 6.42467C18.9392 6.80456 18.8721 7.16121 18.7003 7.49847C18.4366 8.01592 18.0159 8.43662 17.4985 8.70027C17.1612 8.87211 16.8046 8.93922 16.4247 8.97026C16.0604 9.00002 15.6146 9.00001 15.0804 9H14.9196C14.3854 9.00001 13.9396 9.00002 13.5753 8.97026C13.1954 8.93922 12.8388 8.87211 12.5015 8.70027C11.9841 8.43662 11.5634 8.01592 11.2997 7.49847C11.1279 7.16121 11.0608 6.80456 11.0297 6.42467C11 6.06044 11 5.6146 11 5.08045V4.91955C11 4.3854 11 3.93956 11.0297 3.57533C11.0608 3.19545 11.1279 2.83879 11.2997 2.50153C11.5634 1.98408 11.9841 1.56338 12.5015 1.29973C12.8388 1.12789 13.1954 1.06078 13.5753 1.02974C13.9396 0.999981 14.3854 0.99999 14.9196 1ZM13.6975 2.52476C13.4104 2.54822 13.2731 2.5901 13.1825 2.63624C12.9473 2.75608 12.7561 2.94731 12.6362 3.18251C12.5901 3.27307 12.5482 3.41036 12.5248 3.69748C12.5006 3.99336 12.5 4.37757 12.5 4.95V5.05C12.5 5.62243 12.5006 6.00664 12.5248 6.30252C12.5482 6.58965 12.5901 6.72693 12.6362 6.81749C12.7561 7.05269 12.9473 7.24392 13.1825 7.36376C13.2731 7.4099 13.4104 7.45178 13.6975 7.47524C13.9934 7.49942 14.3776 7.5 14.95 7.5H15.05C15.6224 7.5 16.0066 7.49942 16.3025 7.47524C16.5896 7.45178 16.7269 7.4099 16.8175 7.36376C17.0527 7.24392 17.2439 7.05269 17.3638 6.81749C17.4099 6.72693 17.4518 6.58965 17.4752 6.30252C17.4994 6.00664 17.5 5.62243 17.5 5.05V4.95C17.5 4.37757 17.4994 3.99336 17.4752 3.69748C17.4518 3.41036 17.4099 3.27307 17.3638 3.18251C17.2439 2.94731 17.0527 2.75608 16.8175 2.63624C16.7269 2.5901 16.5896 2.54822 16.3025 2.52476C16.0066 2.50058 15.6224 2.5 15.05 2.5H14.95C14.3776 2.5 13.9934 2.50058 13.6975 2.52476ZM4.91955 11H5.08045C5.6146 11 6.06044 11 6.42467 11.0297C6.80455 11.0608 7.16121 11.1279 7.49847 11.2997C8.01592 11.5634 8.43662 11.9841 8.70027 12.5015C8.87211 12.8388 8.93922 13.1954 8.97026 13.5753C9.00002 13.9396 9.00001 14.3854 9 14.9196V15.0804C9.00001 15.6146 9.00002 16.0604 8.97026 16.4247C8.93922 16.8046 8.87211 17.1612 8.70027 17.4985C8.43662 18.0159 8.01592 18.4366 7.49847 18.7003C7.16121 18.8721 6.80455 18.9392 6.42467 18.9703C6.06044 19 5.6146 19 5.08045 19H4.91955C4.3854 19 3.93956 19 3.57533 18.9703C3.19544 18.9392 2.83879 18.8721 2.50153 18.7003C1.98408 18.4366 1.56338 18.0159 1.29973 17.4985C1.12789 17.1612 1.06078 16.8046 1.02974 16.4247C0.99998 16.0604 0.999989 15.6146 0.999999 15.0804V14.9196C0.999989 14.3854 0.99998 13.9396 1.02974 13.5753C1.06078 13.1954 1.12789 12.8388 1.29973 12.5015C1.56338 11.9841 1.98408 11.5634 2.50153 11.2997C2.83879 11.1279 3.19544 11.0608 3.57533 11.0297C3.93956 11 4.3854 11 4.91955 11ZM3.69748 12.5248C3.41035 12.5482 3.27307 12.5901 3.18251 12.6362C2.94731 12.7561 2.75608 12.9473 2.63624 13.1825C2.5901 13.2731 2.54822 13.4104 2.52476 13.6975C2.50058 13.9934 2.5 14.3776 2.5 14.95V15.05C2.5 15.6224 2.50058 16.0066 2.52476 16.3025C2.54822 16.5896 2.5901 16.7269 2.63624 16.8175C2.75608 17.0527 2.94731 17.2439 3.18251 17.3638C3.27307 17.4099 3.41035 17.4518 3.69748 17.4752C3.99336 17.4994 4.37757 17.5 4.95 17.5H5.05C5.62243 17.5 6.00664 17.4994 6.30252 17.4752C6.58965 17.4518 6.72693 17.4099 6.81749 17.3638C7.05269 17.2439 7.24392 17.0527 7.36376 16.8175C7.4099 16.7269 7.45178 16.5896 7.47524 16.3025C7.49942 16.0066 7.5 15.6224 7.5 15.05V14.95C7.5 14.3776 7.49942 13.9934 7.47524 13.6975C7.45178 13.4104 7.4099 13.2731 7.36376 13.1825C7.24392 12.9473 7.05269 12.7561 6.81749 12.6362C6.72693 12.5901 6.58965 12.5482 6.30252 12.5248C6.00664 12.5006 5.62243 12.5 5.05 12.5H4.95C4.37757 12.5 3.99336 12.5006 3.69748 12.5248ZM14.9195 11H15.0805C15.6146 11 16.0604 11 16.4247 11.0297C16.8046 11.0608 17.1612 11.1279 17.4985 11.2997C18.0159 11.5634 18.4366 11.9841 18.7003 12.5015C18.8721 12.8388 18.9392 13.1954 18.9703 13.5753C19 13.9396 19 14.3854 19 14.9195V15.0805C19 15.6146 19 16.0604 18.9703 16.4247C18.9392 16.8046 18.8721 17.1612 18.7003 17.4985C18.4366 18.0159 18.0159 18.4366 17.4985 18.7003C17.1612 18.8721 16.8046 18.9392 16.4247 18.9703C16.0604 19 15.6146 19 15.0805 19H14.9195C14.3854 19 13.9396 19 13.5753 18.9703C13.1954 18.9392 12.8388 18.8721 12.5015 18.7003C11.9841 18.4366 11.5634 18.0159 11.2997 17.4985C11.1279 17.1612 11.0608 16.8046 11.0297 16.4247C11 16.0604 11 15.6146 11 15.0805V14.9195C11 14.3854 11 13.9396 11.0297 13.5753C11.0608 13.1954 11.1279 12.8388 11.2997 12.5015C11.5634 11.9841 11.9841 11.5634 12.5015 11.2997C12.8388 11.1279 13.1954 11.0608 13.5753 11.0297C13.9396 11 14.3854 11 14.9195 11ZM13.6975 12.5248C13.4104 12.5482 13.2731 12.5901 13.1825 12.6362C12.9473 12.7561 12.7561 12.9473 12.6362 13.1825C12.5901 13.2731 12.5482 13.4104 12.5248 13.6975C12.5006 13.9934 12.5 14.3776 12.5 14.95V15.05C12.5 15.6224 12.5006 16.0066 12.5248 16.3025C12.5482 16.5896 12.5901 16.7269 12.6362 16.8175C12.7561 17.0527 12.9473 17.2439 13.1825 17.3638C13.2731 17.4099 13.4104 17.4518 13.6975 17.4752C13.9934 17.4994 14.3776 17.5 14.95 17.5H15.05C15.6224 17.5 16.0066 17.4994 16.3025 17.4752C16.5896 17.4518 16.7269 17.4099 16.8175 17.3638C17.0527 17.2439 17.2439 17.0527 17.3638 16.8175C17.4099 16.7269 17.4518 16.5896 17.4752 16.3025C17.4994 16.0066 17.5 15.6224 17.5 15.05V14.95C17.5 14.3776 17.4994 13.9934 17.4752 13.6975C17.4518 13.4104 17.4099 13.2731 17.3638 13.1825C17.2439 12.9473 17.0527 12.7561 16.8175 12.6362C16.7269 12.5901 16.5896 12.5482 16.3025 12.5248C16.0066 12.5006 15.6224 12.5 15.05 12.5H14.95C14.3776 12.5 13.9934 12.5006 13.6975 12.5248Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3 className="abel  text-[16px] text-center">Meetings</h3>
          </div>
        </Link>
        <Link
          to="/dashboard/stage"
          className="w-full flex justify-center items-center cursor-pointer "
        >
          <div
            className={` flex items-center gap-2 rounded-[11px]  w-full h-[40px]  ${
              location.pathname.includes("stage")
                ? "  bg-white text-black sidebar-active font-semibold"
                : "hover:bg-[#191919] text-white sidebar-inactive"
            }    px-3 sidebar-link  ease`}
          >
            <div className=" flex justify-center items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.91957 3H10.0804C10.6146 2.99999 11.0604 2.99998 11.4247 3.02974C11.8046 3.06078 12.1612 3.12789 12.4985 3.29973C13.0159 3.56338 13.4366 3.98408 13.7003 4.50153C13.8721 4.83879 13.9392 5.19545 13.9703 5.57533C13.9903 5.82105 13.9969 6.10391 13.999 6.42597L15.4703 5.54321C15.8417 5.3203 16.164 5.1269 16.4344 4.99667C16.7075 4.8651 17.0409 4.73911 17.4124 4.77374C17.9103 4.82016 18.3646 5.07736 18.6606 5.48044C18.8814 5.78119 18.9449 6.13191 18.9726 6.43379C19 6.73264 19 7.10852 19 7.54177V12.4582C19 12.8915 19 13.2674 18.9726 13.5662C18.9449 13.8681 18.8814 14.2188 18.6606 14.5196C18.3646 14.9226 17.9103 15.1798 17.4124 15.2263C17.0409 15.2609 16.7075 15.1349 16.4344 15.0033C16.164 14.8731 15.8417 14.6797 15.4702 14.4568L13.999 13.574C13.9969 13.8961 13.9903 14.179 13.9703 14.4247C13.9392 14.8046 13.8721 15.1612 13.7003 15.4985C13.4366 16.0159 13.0159 16.4366 12.4985 16.7003C12.1612 16.8721 11.8046 16.9392 11.4247 16.9703C11.0604 17 10.6146 17 10.0805 17H4.91955C4.3854 17 3.93956 17 3.57533 16.9703C3.19545 16.9392 2.83879 16.8721 2.50153 16.7003C1.98408 16.4366 1.56338 16.0159 1.29973 15.4985C1.12789 15.1612 1.06078 14.8046 1.02974 14.4247C0.999981 14.0604 0.99999 13.6146 1 13.0804V6.91957C0.99999 6.38541 0.999981 5.93956 1.02974 5.57533C1.06078 5.19545 1.12789 4.83879 1.29973 4.50153C1.56338 3.98408 1.98408 3.56338 2.50153 3.29973C2.83879 3.12789 3.19545 3.06078 3.57533 3.02974C3.93956 2.99998 4.38541 2.99999 4.91957 3ZM14 11.8254L16.2127 13.153C16.622 13.3985 16.8847 13.5553 17.0854 13.652C17.2105 13.7122 17.2697 13.7275 17.2866 13.7311C17.348 13.722 17.4039 13.6904 17.4433 13.6424C17.4488 13.6261 17.4662 13.5675 17.4789 13.4292C17.4992 13.2073 17.5 12.9014 17.5 12.4241V7.57591C17.5 7.09861 17.4992 6.79269 17.4789 6.57084C17.4662 6.43252 17.4488 6.37393 17.4433 6.3576C17.4039 6.30959 17.348 6.27796 17.2866 6.26888C17.2697 6.27254 17.2105 6.28776 17.0854 6.34803C16.8847 6.44472 16.622 6.60147 16.2127 6.84704L14 8.17464V11.8254ZM3.69748 4.52476C3.41036 4.54822 3.27307 4.5901 3.18251 4.63624C2.94731 4.75608 2.75608 4.94731 2.63624 5.18251C2.5901 5.27307 2.54822 5.41036 2.52476 5.69748C2.50058 5.99336 2.5 6.37757 2.5 6.95V13.05C2.5 13.6224 2.50058 14.0066 2.52476 14.3025C2.54822 14.5896 2.5901 14.7269 2.63624 14.8175C2.75608 15.0527 2.94731 15.2439 3.18251 15.3638C3.27307 15.4099 3.41036 15.4518 3.69748 15.4752C3.99336 15.4994 4.37757 15.5 4.95 15.5H10.05C10.6224 15.5 11.0066 15.4994 11.3025 15.4752C11.5896 15.4518 11.7269 15.4099 11.8175 15.3638C12.0527 15.2439 12.2439 15.0527 12.3638 14.8175C12.4099 14.7269 12.4518 14.5896 12.4752 14.3025C12.4994 14.0066 12.5 13.6224 12.5 13.05V6.95C12.5 6.37757 12.4994 5.99336 12.4752 5.69748C12.4518 5.41036 12.4099 5.27307 12.3638 5.18251C12.2439 4.94731 12.0527 4.75608 11.8175 4.63624C11.7269 4.5901 11.5896 4.54822 11.3025 4.52476C11.0066 4.50058 10.6224 4.5 10.05 4.5H4.95C4.37757 4.5 3.99336 4.50058 3.69748 4.52476Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3 className="abel  text-[16px] text-center">Stage</h3>
          </div>
        </Link>
        <Link
          to="/dashboard/schedule"
          className="w-full flex justify-center items-center cursor-pointer "
        >
          <div
            className={`flex items-center gap-2 rounded-[11px]  w-full h-[40px]  ${
              location.pathname.includes("schedule")
                ? "  bg-white text-black  font-semibold"
                : "hover:bg-[#191919] text-white "
            } px-3 sidebar-link  ease`}
          >
            <div className=" flex justify-center items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z"
                  stroke={
                    location.pathname.includes("schedule") ? "black" : "white"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 8H20"
                  stroke={
                    location.pathname.includes("schedule") ? "black" : "white"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H12"
                  stroke={
                    location.pathname.includes("schedule") ? "black" : "white"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3V5"
                  stroke={
                    location.pathname.includes("schedule") ? "black" : "white"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 3V5"
                  stroke={
                    location.pathname.includes("schedule") ? "black" : "white"
                  }
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="abel   text-[16px] text-center">Schedule</h3>
          </div>
        </Link>
        <Link
          to="/dashboard/networking"
          className="w-full flex justify-center items-center cursor-pointer "
        >
          <div
            className={`flex items-center gap-2 rounded-[11px]  w-full h-[40px]  ${
              location.pathname.includes("networking")
                ? "  bg-white text-black  font-semibold"
                : "hover:bg-[#191919] text-white "
            }     px-3 sidebar-link  ease`}
          >
            <div className=" flex justify-center items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 2.5C15.1716 2.5 14.5 3.17157 14.5 4C14.5 4.82843 15.1716 5.5 16 5.5C16.8284 5.5 17.5 4.82843 17.5 4C17.5 3.17157 16.8284 2.5 16 2.5ZM13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4ZM1 4.75C1 3.23122 2.23122 2 3.75 2H9C9.41421 2 9.75 2.33579 9.75 2.75C9.75 3.16421 9.41421 3.5 9 3.5H3.75C3.05964 3.5 2.5 4.05964 2.5 4.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H15.25C15.9404 17.5 16.5 16.9404 16.5 16.25V11C16.5 10.5858 16.8358 10.25 17.25 10.25C17.6642 10.25 18 10.5858 18 11V16.25C18 17.7688 16.7688 19 15.25 19H3.75C2.23122 19 1 17.7688 1 16.25V4.75Z"
                  fill={
                    location.pathname.includes("/dashboard/networking")
                      ? "black"
                      : "white"
                  }
                />
              </svg>
            </div>
            <h3 className="abel   text-[16px] text-center">Networking</h3>
          </div>
        </Link>
        <Link
          to="/dashboard/conversations"
          className="w-full flex justify-center items-center cursor-pointer "
        >
          <div
            className={`flex items-center gap-2 rounded-[11px]  w-full h-[40px]  ${
              location.pathname.includes("conversations")
                ? "  bg-white text-black font-semibold"
                : "hover:bg-[#191919] text-white "
            }     px-3 sidebar-link  ease`}
          >
            <div className=" flex justify-center items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 12C2.5 6.75338 6.75329 2.50011 12 2.50011C17.2467 2.50011 21.5 6.75338 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5H2.5V12Z"
                  stroke={
                    location.pathname.includes("/dashboard/conversations")
                      ? "black"
                      : "#ffffff"
                  }
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="abel   text-[16px] text-center">Conversations</h3>
          </div>
        </Link>

        <Link
          to="/dashboard/settings"
          className="w-full flex justify-center items-center cursor-pointer "
        >
          <div
            className={`flex items-center gap-2 rounded-[11px]  w-full h-[40px]  ${
              location.pathname.includes("settings")
                ? "  bg-white text-black  font-semibold"
                : "hover:bg-[#191919] text-white "
            }    px-3 sidebar-link  ease`}
          >
            <div className=" flex justify-center items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6006 21.0761L19.0608 17.9236C19.6437 17.5871 19.9346 17.4188 20.1465 17.1834C20.3341 16.9751 20.4759 16.7297 20.5625 16.4632C20.6602 16.1626 20.6602 15.8267 20.6602 15.1568V8.84268C20.6602 8.17277 20.6602 7.83694 20.5625 7.53638C20.4759 7.26982 20.3341 7.02428 20.1465 6.816C19.9355 6.58161 19.6453 6.41405 19.0674 6.08043L13.5996 2.92359C13.0167 2.58706 12.7259 2.41913 12.416 2.35328C12.1419 2.295 11.8584 2.295 11.5843 2.35328C11.2744 2.41914 10.9826 2.58706 10.3997 2.92359L4.93843 6.07666C4.35623 6.41279 4.06535 6.58073 3.85352 6.816C3.66597 7.02428 3.52434 7.26982 3.43773 7.53638C3.33984 7.83765 3.33984 8.17436 3.33984 8.84742V15.1524C3.33984 15.8254 3.33984 16.1619 3.43773 16.4632C3.52434 16.7297 3.66597 16.9751 3.85352 17.1834C4.06548 17.4188 4.35657 17.5871 4.93945 17.9236L10.3997 21.0761C10.9826 21.4126 11.2744 21.5806 11.5843 21.6465C11.8584 21.7047 12.1419 21.7047 12.416 21.6465C12.7259 21.5806 13.0177 21.4126 13.6006 21.0761Z"
                  stroke={
                    location.pathname.includes("settings") ? "black" : "white"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11.9998C9 13.6566 10.3431 14.9998 12 14.9998C13.6569 14.9998 15 13.6566 15 11.9998C15 10.3429 13.6569 8.99976 12 8.99976C10.3431 8.99976 9 10.3429 9 11.9998Z"
                  stroke={
                    location.pathname.includes("settings") ? "black" : "white"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="abel   text-[16px] text-center">Settings</h3>
          </div>
        </Link>
      </div>
      <div>
        <div className="h-[3rem] w-full  flex justify-start items-center gap-x-2">
          <div className="w-[2.5rem] h-[3rem] flex justify-center items-center">
            <img
              src={tempProfileImage}
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start w-[62%] justify-center h-full">
            <span className="text-[16px] abel">Ibrahim Askar </span>
            <span className="text-[11px] abel w-full text-ellipsis overflow-hidden whitespace-nowrap">
              ibrahemhani2014@gmail.com
            </span>
          </div>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.8011 10.5087C18.0663 10.2214 18.0663 9.77859 17.8011 9.49129L14.8011 6.24129C14.5201 5.93692 14.0457 5.91794 13.7413 6.1989C13.4369 6.47985 13.4179 6.95434 13.6989 7.25871L15.537 9.25L8.75 9.25C8.33579 9.25 8 9.58579 8 10C8 10.4142 8.33579 10.75 8.75 10.75L15.537 10.75L13.6989 12.7413C13.4179 13.0457 13.4369 13.5201 13.7413 13.8011C14.0457 14.0821 14.5201 14.0631 14.8011 13.7587L17.8011 10.5087ZM10 18.25C10 17.8358 9.66421 17.5 9.25 17.5L4.75 17.5C4.05964 17.5 3.5 16.9404 3.5 16.25L3.5 3.75C3.5 3.05964 4.05964 2.5 4.75 2.5L9.25 2.5C9.66421 2.5 10 2.16421 10 1.75C10 1.33579 9.66421 1 9.25 1L4.75 1C3.23122 1 2 2.23122 2 3.75L2 16.25C2 17.7688 3.23122 19 4.75 19L9.25 19C9.66421 19 10 18.6642 10 18.25Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div></AnimatePresence>
  );
};

export default Sidebar;
