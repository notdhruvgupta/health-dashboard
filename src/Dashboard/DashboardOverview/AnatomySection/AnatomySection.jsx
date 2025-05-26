import { ZoomIn } from "lucide-react";
import React from "react";

function AnatomySection() {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="h-full bg-primaryLight rounded-lg">
        <img className=" object-contain h-full" src="/anatomy.png" alt="" />
      </div>

      <ZoomIn className=" text-secondary/50 absolute top-2 right-[20%]" />

      <div className="absolute flex items-center gap-3 group top-[21%] left-[48%]">
        <div className="border-2 rounded-lg h-10 w-10 bg-secondaryLight/30 border-secondaryLight/60 "></div>
        <p className=" font-semibold text-sm text-white bg-secondaryLight p-2 rounded-lg group-hover:block transition-all duration-500">❤️ Healthy Heart</p>
      </div>
      <div className="absolute flex items-center gap-3 group top-[67%] left-[6%]">
        <p className=" font-semibold text-sm text-secondary bg-primary p-2 rounded-lg group-hover:block transition-all duration-500">🦵 Healthy Leg</p>
        <div className="border-2 rounded-lg h-10 w-10 bg-secondaryLight/30 border-secondaryLight/60 "></div>
      </div>
    </div>
  );
}

export default AnatomySection;
