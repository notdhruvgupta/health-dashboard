import React from "react";
import {
  LayoutDashboard,
  ArrowUpDown,
  CalendarDays,
  SquarePlus,
  ChartSpline,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";
import Logo from "../Header/Logo";

const sidebarData = [
  {
    heading: "General",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
      { name: "History", icon: ArrowUpDown, link: "/history" },
      { name: "Calendar", icon: CalendarDays, link: "/calendar" },
      { name: "Appointments", icon: SquarePlus, link: "/appointments" },
      { name: "Statistics", icon: ChartSpline, link: "/statistics" },
    ],
  },
  {
    heading: "Tools",
    items: [
      { name: "Chat", icon: MessageCircleMore, link: "/chat" },
      { name: "Support", icon: Phone, link: "/support" },
    ],
  },
];

function Sidebar() {
  return (
    <div className="bg-primaryLight flex flex-col p-10 text-secondary h-full">
      <div className="mb-8">
        <Logo />
      </div>
      {sidebarData.map((item, index) => (
        <div key={index} className="text-secondary/60 mb-8">
          <p className="text-black/40 font-medium">{item.heading}</p>
          {item.items.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="flex cursor-pointer hover:text-secondary items-center mt-4"
              >
                {IconComponent && (
                  <IconComponent size={22} className="mr-4 text-lg" />
                )}
                <a
                  className="text-lg font-medium hover:font-semibold"
                  href={tool.link}
                >
                  {tool.name}
                </a>
              </div>
            );
          })}
        </div>
      ))}
      <div className=" mt-auto flex items-center text-secondary/60 font-medium hover:text-secondary hover:font-semibold cursor-pointer">
        <Settings size={22} className="mr-3" />
        <p className="text-lg">Setting</p>
      </div>
    </div>
  );
}

export default Sidebar;
