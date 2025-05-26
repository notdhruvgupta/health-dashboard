import { ArrowLeft, ArrowRight, Minus } from "lucide-react";
import React from "react";
import CalendarData from "../../data/CalendarData";
import AppointmentCard from "../../Component/SimpleAppointmentCard/AppointmentCard";

function CalendarView() {
  return (
    <div className="grid grid-rows-6 h-full gap-2">
      <div className="rounded-lg flex items-center justify-between px-5">
        <h1 className="text-xl font-semibold text-secondaryLight">
          October 2025
        </h1>
        <div className="flex gap-2 text-secondaryLight">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className=" row-span-3 rounded-lg">
        <div className="grid grid-cols-7 gap-2 h-full overflow-hidden">
          {CalendarData.map((data, index) => (
            <div
              key={index}
              className={`hover:bg-primaryDark cursor-default transition-colors duration-500 h-full px-2 rounded-xl flex flex-col justify-center ${data.disable ? " opacity-50 cursor-not-allowed" : ""}`}
            >
              <p className="text-sm font-semibold text-secondaryLight/70 text-center">
                {data.day}
              </p>
              <p className="text-2xl font-bold text-secondary text-center mb-1">
                {data.date}{" "}
              </p>
              {data.appointments.map((appointment, appIndex) => (
                <div
                  key={appIndex}
                  className={`text-secondary/60 cursor-pointer text-sm font-semibold flex flex-col items-center mb-2 py-1 rounded-lg hover:bg-secondaryLight hover:text-white
                  ${appointment.active ? "bg-secondaryLight text-white" : ""}
                  transition-colors duration-200  
                  `}
                >
                  {appointment.time != "" ? appointment.time : <Minus />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 cursor-pointer row-span-2 flex gap-3 rounded-lg">
        <AppointmentCard
          doctor="Dentist"
          time="09:00 - 11:00"
          icon="/teeth.png"
          name="Dr. Cameron Williams"
        />
        <AppointmentCard
          doctor="Physiotherapist Appointment"
          time="11:00 - 12:00"
          icon="/physio.png"
          name="Dr. Kevin Djones"
        />
      </div>
    </div>
  );
}

export default CalendarView;
