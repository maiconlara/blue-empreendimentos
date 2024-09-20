import { IconType } from "./icon-type";

export interface SidebarItemProps {
    Icon: IconType;
    title: string;
    href?: string;
    type?: "link" | "dropdown";
    items?: SidebarItemProps[];
    isSub?: boolean;
  }
  