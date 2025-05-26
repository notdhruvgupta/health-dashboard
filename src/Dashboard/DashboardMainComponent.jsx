import React from "react";
import AnatomySection from "./DashboardOverview/AnatomySection/AnatomySection";
import HealthStatusCard from "./DashboardOverview/HealthStatusCard/HealthStatusCard";
import { ArrowDown, ChevronDown } from "lucide-react";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";

function DashboardMainComponent() {
  return (
    <div className="p-2 grid grid-cols-2 grid-rows-9 -2 w-full h-full">
      <div className="  flex  text-secondaryLight rounded-lg">
        <div className="flex justify-between items-center w-full px-5">
          <h1 className="text-3xl font-extrabold ">Dashboard</h1>
          <p className="flex items-center text-sm font-semibold opacity-70">
            This Week
            <ChevronDown size={18} strokeWidth={2} />
          </p>
        </div>
      </div>
      <div className="row-span-5 rounded-lg p-2">
        <CalendarView />
      </div>
      <div className="row-span-5   rounded-lg">
        <div className="flex h-full gap-3 justify-center items-center">
          <div className="flex-[5] h-full">
            <AnatomySection />
          </div>
          <div className="flex-[3] h-full">
            <HealthStatusCard />
          </div>
        </div>
      </div>
      <div className="row-span-4 rounded-lg mx-5 mt-3">
        <UpcomingSchedule />
      </div>
      <div className="row-span-3 rounded-lg">
        <ActivityFeed />
      </div>
    </div>
  );
}

export default DashboardMainComponent;
