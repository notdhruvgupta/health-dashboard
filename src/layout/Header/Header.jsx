import { Bell, Plus, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex px-10 py-4 items-center justify-between">
      {/* logo */}
      <p className="text-2xl font-black text-secondaryLight">
        <span className="text-primary">Health</span>care.
      </p>
      {/* search */}
      <div className="flex items-center gap-4">
        <div className="flex text-secondary items-center py-2 px-4 rounded-lg shadow-primary-shadow w-[400px]">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 placeholder-secondary/60 focus:outline-none text-md font-semibold text-secondary"
          />
        </div>
        {/* notification */}
        <div className=" shadow-primary-shadow p-2 text-secondaryLight rounded-lg cursor-pointer hover:bg-secondaryLight/30 transition-all duration-300">
          <Bell fill="#3635a7" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* user profile */}
        <div className="shadow-primary-shadow p-1 bg-primary rounded-lg cursor-pointer flex items-center gap-2">
          <img src="/avatar.png" alt="memoji" className="h-8 w-8" />
        </div>
        {/* add button */}
        <div className="shadow-primary-shadow p-2 bg-secondaryLight text-white rounded-lg cursor-pointer flex items-center gap-2">
          <Plus size={24} fill="#1d1e5d" />
        </div>
      </div>
    </div>
  );
}

export default Header;
