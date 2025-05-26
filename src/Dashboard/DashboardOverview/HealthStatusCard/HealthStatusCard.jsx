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
            <img className="h-8 w-8" src={item.image} alt="" />
            <h1 className=" text-lg font-semibold text-secondary">
              {item.title}
            </h1>
          </div>
          <p className="text-sm text-black/50">Date: {item.Date}</p>
          <div
            className={` rounded-full overflow-hidden w-full bg-black/10 h-2`}
          >
            <div
              className={` w-[${item.progress}%] rounded-full h-2
                bg-${
                item.progress > 75
                  ? "green"
                  : item.progress > 50
                  ? "yellow"
                  : "red"
              }-500
              `}
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
