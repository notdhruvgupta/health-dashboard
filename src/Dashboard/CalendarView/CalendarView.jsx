import { ArrowLeft, ArrowRight, Minus } from "lucide-react";
import React from "react";
import CalendarData from "../../data/CalendarData";
import AppointmentCard from "../../Component/SimpleAppointmentCard/AppointmentCard";

function CalendarView() {
  return (
    <div className="grid grid-rows-6 h-full gap-2">
      <div className="rounded-lg flex items-center justify-between md:px-5 px-3">
        <h1 className="md:text-xl text-lg font-bold text-secondaryLight">
          October 2025
        </h1>
        <div className="flex gap-2 text-secondaryLight">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>

      <div className=" row-span-3 rounded-lg ">
        <div className="grid grid-cols-7 md:gap-2 h-full">
          {CalendarData.map((data, index) => (
            <div
              key={index}
              className={`hover:bg-primaryDark cursor-default transition-colors duration-500 h-full md:px-2 pt-1 md:pt-0 px-0.5 rounded-xl flex flex-col md:justify-center ${data.disable ? " opacity-50 cursor-not-allowed" : ""}`}
            >
              <p className="md:text-sm text-xs font-semibold text-secondaryLight/70 text-center">
                {data.day}
              </p>
              <p className="md:text-2xl text-lg font-bold text-secondary text-center mb-1">
                {data.date}
              </p>
              {data.appointments.map((appointment, appIndex) => (
                <div
                  key={appIndex}
                  className={`text-secondary/60 cursor-pointer text-sm font-semibold flex flex-col items-center mb-2 py-1 rounded-lg hover:bg-secondaryLight hover:text-white
                  ${appointment.active ? "bg-secondaryLight text-white" : ""}
                  transition-colors duration-200  
                  `}
                >
                  {appointment.time !== "" ? appointment.time : <Minus />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="md:px-5 px-2 overflow-x-auto cursor-pointer row-span-2 flex gap-3 rounded-lg">
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
