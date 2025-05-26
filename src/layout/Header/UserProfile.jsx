import { Plus } from "lucide-react";
import React from "react";

function UserProfile() {
  return (
    <div className="flex items-center justify-end px-5 gap-3 h-full">
      {/* user profile */}
      <div className="shadow-primary-shadow p-1 bg-primary rounded-lg cursor-pointer flex items-center gap-2">
        <img src="/avatar.png" alt="memoji" className="h-10 w-10" />
      </div>
      {/* add button */}
      <div className="shadow-primary-shadow p-2 bg-secondaryLight text-white rounded-lg cursor-pointer flex items-center gap-2">
        <Plus size={30} fill="#1d1e5d" />
      </div>
    </div>
  );
}

export default UserProfile;
