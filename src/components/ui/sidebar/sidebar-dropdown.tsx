"use client";

import {usePathname} from "next/navigation";
import {SidebarItemProps} from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {SidebarLink} from "./sidebar-link";

export const SidebarDropdown = ({
  href,
  title,
  Icon,
  items,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Accordion type="single" collapsible className="flex flex-col w-full ">
      <AccordionItem className="flex flex-col w-full" value="item-1">
        <AccordionTrigger
          className={`${
            isActive ? "bg-white/10 cursor-default pointer-events-none" : ""
          } flex flex-row w-full gap-2 hover:bg-white/10 rounded-md py-2 px-3 transition-colors items-center cursor-pointer`}
        >
          <Icon className="h-[18px] w-[18px] text-white transition-none " />
          <p className="text-white text-sm">{title}</p>
        </AccordionTrigger>
        <AccordionContent className="pb-1">
          {items?.map((item, index) => (
            <SidebarLink key={index} {...item} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
