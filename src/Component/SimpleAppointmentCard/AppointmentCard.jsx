import React from "react";

function AppointmentCard({ doctor, time, icon, name }) {
  return (
    <div className="cursor-pointer flex flex-col justify-center hover:bg-secondaryLight bg-primaryDark p-4 rounded-3xl hover:text-white text-secondary transition-colors duration-300">
      <div className="flex justify-between gap-x-3 items-center md:mb-1">
        <p className="font-semibold truncate">{doctor}</p>
        <img src={icon} alt="teeth" className="w-5 h-5" />
      </div>
      <p className=" text-nowrap">{time}</p>
      {name && <p className="text-sm text-nowrap">{name}</p>}
    </div>
  );
}

export default AppointmentCard;
