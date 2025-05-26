import { ArrowRight } from "lucide-react";
import React from "react";
import healthData from "../../../data/HealthCard"; // Assuming you have a JSON file with health data

function HealthStatusCard() {
  return (
    <div className="flex flex-col justify-between h-full">
      {healthData.map((item, index) => (
        <div
          key={index}
          className=" bg-primaryLight p-5 flex flex-col gap-1 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <img className="md:h-8 md:w-8 h-6 w-6" src={item.image} alt="" />
            <h1 className="md:text-lg font-semibold text-secondary">
              {item.title}
            </h1>
          </div>
          <p className="md:text-sm text-xs text-black/50 text-nowrap">Date: {item.Date}</p>
          <div
            className={` rounded-full overflow-hidden w-full bg-black/10 md:h-2 h-1`}
          >
            <div
              className={` 
                rounded-full md:h-2 h-1
                ${
                  item.progress > 75
                    ? "bg-green-500"
                    : item.progress > 50
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }
              `}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-1 justify-end text-secondaryLight cursor-pointer hover:font-semibold">
        <p className="text-sm">Details</p>
        <ArrowRight size={15} strokeWidth={1} />
      </div>
    </div>
  );
}

export default HealthStatusCard;
