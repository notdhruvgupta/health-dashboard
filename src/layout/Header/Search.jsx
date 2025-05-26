import { Bell, SearchIcon } from "lucide-react";
import React from "react";

function Search() {
  return (
    <div className="h-full flex items-center justify-between md:pl-4 rounded-lg gap-4">
      <div className="flex-1 flex text-secondary items-center py-2 px-4 rounded-lg shadow-primary-shadow md:h-12">
        <SearchIcon size={20} />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 placeholder-secondary/40 focus:outline-none text-md font-semibold text-secondary"
        />
      </div>
      {/* notification */}
      <div className=" shadow-primary-shadow p-2 text-secondaryLight rounded-lg cursor-pointer hover:bg-secondaryLight/30 transition-all duration-300 md:h-12 md:w-12 flex items-center justify-center">
        <Bell fill="#3635a7" />
      </div>
    </div>
  );
}

export default Search;
