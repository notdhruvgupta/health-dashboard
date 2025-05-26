import React from "react";
import UpcomingData from "../../data/UpcomingData";
import AppointmentCard from "../../Component/SimpleAppointmentCard/AppointmentCard";

function UpcomingSchedule() {
  return (
    <div className="grid grid-rows-7 gap-2 h-full mx-3">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-secondary">
          The Upcoming Schedule
        </h1>
      </div>
      {UpcomingData.map((data, index) => (
        <div key={index} className="row-span-3">
          <p className=" text-secondary/60 mb-1">On {data.day}</p>
          <div className="flex gap-4">
            {data.appointments.map((appointment, appIndex) => (
              <AppointmentCard
                key={appIndex}
                doctor={appointment.doctor}
                time={appointment.time}
                icon={appointment.icon}
                className=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
