import React from "react";
import AnatomySection from "./DashboardOverview/AnatomySection/AnatomySection";
import HealthStatusCard from "./DashboardOverview/HealthStatusCard/HealthStatusCard";
import {  ChevronDown } from "lucide-react";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import Search from "../layout/Header/Search";
import UserProfile from "../layout/Header/UserProfile";

function DashboardMainComponent() {
  return (
    <div className=" grid md:grid-cols-2 md:grid-rows-10 w-full h-full md:pb-0">
      
      {/* Search */}
      <div className="rounded-lg mx-4 mt-4 md:m-0">
        <Search />
      </div>

      {/* User Profile */}
      <div className="ml-5 bg-primaryLight hidden md:block">
        <UserProfile />
      </div>

      {/* Dashboard Title */}
      <div className="flex text-secondaryLight rounded-lg my-3 md:m-0">
        <div className="flex justify-between items-center w-full px-5">
          <h1 className="md:text-3xl text-xl font-extrabold ">Dashboard</h1>
          <p className="flex items-center md:text-sm text-xs font-semibold opacity-70">
            This Week
            <ChevronDown size={18} strokeWidth={2} />
          </p>
        </div>
      </div>

      {/* Calendar View */}
      <div className="md:ml-5 bg-primaryLight rounded-xl md:rounded-none row-span-5 md:p-2 mx-4 mb-5 md:m-0">
        <CalendarView />
      </div>

      {/* Dashboard Overview */}
      <div className=" row-start-3 md:row-span-5 rounded-lg mx-4 mb-5 md:m-0">
        <div className="flex h-full gap-3 justify-center items-center">
          <div className="flex-[5] h-full">
            <AnatomySection />
          </div>
          <div className="flex-[3] h-full">
            <HealthStatusCard />
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="md:ml-5 bg-primaryLight rounded-xl md:rounded-none row-span-4 mx-4 p-3 md:p-0 md:mx-0">
        <UpcomingSchedule />
      </div>
      
      {/* Activity Feed */}
      <div className=" row-start-4 md:row-span-3 rounded-lg mx-4 mb-5 md:m-0" >
        <ActivityFeed />
      </div>
    </div>
  );
}

export default DashboardMainComponent;
