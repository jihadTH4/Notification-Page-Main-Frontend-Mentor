import React from "react";

export default function NotificationCard({
  ImgSrc,
  ImgAlt,
  Name,
  Info,
  Subject,
  Time,
  isUnread,
  message,
  image,
}) {
  return (
    <div className="flex gap-3 md:gap-4">
      <img
        src={ImgSrc}
        alt={ImgAlt}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full"
      />
      <div className="flex-1">
        <p className="text-sm md:text-base">
          <span className="font-extrabold text-very-dark-blue hover:text-blue cursor-pointer">
            {Name}
          </span>{" "}
          <span className="text-dark-grayish-blue">{Info}</span>{" "}
          {Subject && (
            <span className="font-extrabold text-dark-grayish-blue hover:text-blue cursor-pointer">
              {Subject}
            </span>
          )}
          {isUnread && (
            <span className="inline-block w-2 h-2 bg-red rounded-full ml-1"></span>
          )}
        </p>
        <p className="text-grayish-blue text-sm">{Time}</p>
        {message && (
          <p className="mt-3 p-4 border border-light-grayish-blue-2 rounded-lg text-dark-grayish-blue hover:bg-light-grayish-blue-1 cursor-pointer text-sm md:text-base">
            {message}
          </p>
        )}
      </div>
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg cursor-pointer hover:ring-1 hover:ring-light-grayish-blue-2"
        />
      )}
    </div>
  );
}
