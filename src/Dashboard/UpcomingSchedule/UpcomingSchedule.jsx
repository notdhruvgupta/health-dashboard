import React from "react";
import UpcomingData from "../../data/UpcomingData";
import AppointmentCard from "../../Component/SimpleAppointmentCard/AppointmentCard";

function UpcomingSchedule() {
  return (
    <div className="h-full w-full md:px-8 md:pt-4 overflow-hidden">
      <div className="flex items-center md:px-0 mb-2">
        <h1 className="md:text-xl text-lg font-bold text-secondary">
          The Upcoming Schedule
        </h1>
      </div>

      <div className="space-y-4">
        {UpcomingData.map((data, index) => (
          <div key={index} className="">
            <p className="text-secondary/70 mb-2">On {data.day}</p>
            <div className="flex flex-col gap-2 md:flex-row">
              {data.appointments.map((appointment, appIndex) => (
                <div className="md:flex" key={appIndex}>
                  <AppointmentCard
                    doctor={appointment.doctor}
                    time={appointment.time}
                    icon={appointment.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;
