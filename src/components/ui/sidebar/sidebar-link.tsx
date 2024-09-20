"use client";

import {usePathname} from "next/navigation";
import {SidebarItemProps} from "@/types";

export const SidebarLink = ({href, title, Icon, isSub = false}: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={`${
        isActive ? "bg-white/10 cursor-default pointer-events-none" : ""
      } flex flex-row w-full gap-2 hover:bg-white/10 rounded-md py-2 ${isSub? "px-6" : "px-3"} transition-colors items-center cursor-pointer`}
    >
      <Icon className="h-[18px] w-[18px] text-white" />
      <p className="text-white text-sm">{title}</p>
    </div>
  );
};
