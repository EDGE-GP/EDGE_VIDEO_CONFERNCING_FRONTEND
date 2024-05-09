import { useSelector } from "react-redux";
import { RootState } from "@/store";
import NotificationPreview from "./notifications/NotificationPreview";
import CircularLoading from "@/components/ui/CircularLoading";
const Notifications = () => {
  const { notifications, isNotificationsFetching } = useSelector(
    (state: RootState) => state.notifications
  );
  return (
    <div className="w-full col-span-2 row-span-2 h-full px-4 py-3 rounded-2xl card-shadow bg-white">
      <h3 className="abel text-[1.3rem] mb-1">Notifications</h3>
      <div className="flex flex-col gap-y-2 h-[94.5%] overflow-y-scroll">
        {isNotificationsFetching ? (
          <div className="h-full w-full pb-[3rem] flex justify-center items-center">
            <CircularLoading button />
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationPreview key={notification.id} {...notification} />
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
