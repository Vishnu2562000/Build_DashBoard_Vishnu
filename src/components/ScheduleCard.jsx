import React from "react";
import { Link } from "react-router-dom";

function ScheduleCard() {
  const scheduleData = [
    {
      title: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      place: "at Sunset Road, Kuta, Bali",
    },
    {
      title: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      place: "at Central Jakarta",
    },
  ];

  return (
    <div className="bg-white w-full h-full rounded-lg pr-10">
      <div className="flex justify-between items-center m-5 pt-8">
        <h1 className="font-montserrat font-bold leading-20 mb-0 text-xl">
          Today's schedule
        </h1>
        <Link
          className="font-montserrat font-normal text-12 leading-15 text-gray-500 flex gap-1"
          to="#seeAll"
        >
          <span>See All</span>
          <img src="/assets/arrowRight.svg" alt="" />
        </Link>
      </div>
      <div className="ml-auto pb-2">
        {scheduleData.map((ele, index) => {
          return (
            <div className="flex items-start m-5" key={index}>
              <div
                className={`${
                  index === 0 ? "bg-green-400" : "bg-indigo-500"
                } h-20 w-1`}
              ></div>
              <div className="ml-2 text-right">
                <h3 className="font-lato font-bold text-14 leading-16.8 text-gray-600 mb-1">
                  {ele.title}
                </h3>
                <p className="font-lato font-normal text-12 leading-14.4 text-gray-900 mb-1">
                  {ele.time}
                </p>
                <p className="font-lato font-normal text-12 leading-14.4 text-gray-900">
                  {ele.place}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScheduleCard;
