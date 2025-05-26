import { act } from "react";

export default [
    {
        day: "Mon",
        date: "25",
        appointments: [
            { time: "10:00" },
            { time: "11:00" },
            { time: "12:00" }
        ]
    },
    {
        day: "Tues",
        date: "26",
        appointments: [
            { time: "08:00" },
            { time: "09:00", active: true },
            { time: "10:00" }
        ]
    },
    {
        day: "Wed",
        date: "27",
        appointments: [
            { time: "12:00" },
            { time: "" },
            { time: "13:00" }
        ]
    },
    {
        day: "Thurs",
        date: "28",
        appointments: [
            { time: "10:00" },
            { time: "11:00", active: true },
            { time: "" }
        ]
    },
    {
        day: "Fri",
        date: "29",
        appointments: [
            { time: "" },
            { time: "14:00" },
            { time: "16:00" }
        ]
    },
    {
        day: "Sat",
        date: "30",
        appointments: [
            { time: "12:00", active: true },
            { time: "14:00" },
            { time: "15:00" }
        ]
    },
    {
        day: "Sun",
        date: "31",
        appointments: [
            { time: "09:00", active: true },
            { time: "10:00" },
            { time: "11:00" }
        ],
        disable: true
    },
]