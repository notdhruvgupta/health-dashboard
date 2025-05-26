import React from "react";

function AppointmentCard({ doctor, time, icon, name }) {
  return (
    <div className=" cursor-pointer flex flex-col justify-center hover:bg-secondaryLight bg-primaryDark p-4 rounded-3xl hover:text-white text-secondary transition-colors duration-300">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold mr-5">{doctor}</p>
        <img src={icon} alt="teeth" className="w-5 h-5" />
      </div>
      <p>{time}</p>
      <p className="text-sm">{name}</p>
    </div>
  );
}

export default AppointmentCard;
