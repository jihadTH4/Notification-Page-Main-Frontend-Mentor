import React, { useState } from "react";
import { notifications as initialNotifications } from "./data/notifications";
import NotificationCard from "./components/NotificationCard";

export default function App() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isUnread: false })));
  };

  return (
    <div className="min-h-screen bg-very-light-grayish-blue flex items-start md:items-center justify-center">
      {/* Main Container */}
      <div className="w-full md:max-w-[730px] bg-white md:rounded-xl shadow-sm p-4 md:p-8 md:my-16">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-2xl font-extrabold flex items-center gap-2 text-very-dark-blue">
            Notifications
            {unreadCount > 0 && (
              <span className="bg-blue text-white px-[11px] py-[1px] rounded-md text-base">
                {unreadCount}
              </span>
            )}
          </h1>
          <button
            onClick={markAllAsRead}
            className="text-dark-grayish-blue hover:text-blue text-sm md:text-base"
          >
            Mark all as read
          </button>
        </header>

        {/* Notifications List */}
        <main>
          <ul className="space-y-2">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 rounded-lg ${
                  notification.isUnread
                    ? "bg-very-light-grayish-blue"
                    : "bg-white"
                }`}
              >
                <NotificationCard
                  ImgSrc={notification.avatar}
                  ImgAlt={`${notification.user}'s avatar`}
                  Name={notification.user}
                  Info={notification.action}
                  Subject={notification.target}
                  Time={notification.time}
                  isUnread={notification.isUnread}
                  message={notification.message}
                  image={notification.image}
                />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
