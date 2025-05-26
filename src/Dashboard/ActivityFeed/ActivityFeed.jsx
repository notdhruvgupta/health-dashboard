import React from "react";

function ActivityFeed() {
  return (
    <div className="mt-5 ml-5 bg-primaryLight p-4 rounded-3xl">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold text-secondaryLight">Activity</h1>
        <p className=" font-semibold text-secondary/50">
          3 appointment this week
        </p>
      </div>

      {/* bar chart */}

      <div className="grid grid-cols-7 gap-4 mt-5 mx-5">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <div
            key={index}
            className=" h-24 rounded-lg items-end justify-center
            grid grid-cols-4 gap-4"
          >
               <div className="bg-black/20 h-full rounded-full"></div>    
               <div className="bg-black/20 h-[60%] self-center rounded-full"></div>    
               <div className="bg-black/20 h-[30%] self-center rounded-full"></div>    
               <div className="bg-black/20 h-[50%] rounded-full"></div>    
          </div>
        ))}
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
          (day, index) => (
            <p className="text-sm place-self-center font-semibold text-secondaryLight/70">{day}</p>
          )
        )}
      </div>
    </div>
  );
}

export default ActivityFeed;
