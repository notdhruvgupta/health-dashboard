import { ZoomIn } from "lucide-react";
import React from "react";

function AnatomySection() {
  return (
    <div className="flex items-center justify-center md:h-full w-full relative">
      <div className="md:h-full bg-primaryLight rounded-lg">
        <img className=" object-contain md:h-full" src="/anatomy.png" alt="" />
      </div>

      <ZoomIn className=" text-secondary/50 absolute top-2 right-3 md:right-[20%]" />

      <div className="absolute flex flex-col md:flex-row items-center md:gap-3 gap-1 group top-[21%] md:left-[48%] left-[26%]">
        <div className="border-2 rounded-lg h-10 w-10 bg-secondaryLight/30 border-secondaryLight/60 "></div>
        <p className="md:hidden text-nowrap lg:flex font-semibold md:text-sm text-xs text-white bg-secondaryLight p-2 rounded-lg group-hover:block transition-all duration-500">❤️ Healthy Heart</p>
      </div>
      
      <div className="absolute flex md:flex-row items-center md:gap-3 gap-1 group top-[67%] lg:left-[6%] md:left-[36%] left-[16%] flex-col-reverse">
        <p className=" md:hidden text-nowrap lg:flex font-semibold md:text-sm text-xs text-secondary bg-primary p-2 rounded-lg group-hover:block transition-all duration-500">🦵 Healthy Leg</p>
        <div className=" border-2 rounded-lg h-10 w-10 bg-secondaryLight/30 border-secondaryLight/60 "></div>
      </div>
    </div>
  );
}

export default AnatomySection;
