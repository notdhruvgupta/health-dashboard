import React from "react";
import { LineChart, Line } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

function ActivityFeed() {
  return (
    <div className="md:mt-5 md:ml-5 bg-primaryLight p-4 rounded-3xl">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold text-secondaryLight">Activity</h1>
        <p className=" text-xs md:text-sm font-semibold text-secondary/50">
          3 appointment this week
        </p>
      </div>

      {/* bar chart */}

      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>

      <div className="grid grid-cols-7 gap-4 mt-5 md:mx-5">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <div
            key={index}
            className=" h-24 rounded-lg items-end justify-center
            grid grid-cols-4 gap-3 lg:gap-4"
          >
            <div className="bg-black/20 w-1 lg:w-1.5 h-full rounded-full"></div>
            <div className="bg-black/20 w-1 lg:w-1.5 h-[60%] self-center rounded-full"></div>
            <div className="bg-black/20 w-1 lg:w-1.5 h-[30%] self-center rounded-full"></div>
            <div className="bg-black/20 w-1 lg:w-1.5 h-[50%] rounded-full"></div>
          </div>
        ))}
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
          (day, index) => (
            <p className="text-sm place-self-center font-semibold text-secondaryLight/70">
              {day}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default ActivityFeed;
