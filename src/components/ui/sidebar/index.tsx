"use client";

import {
  RiSettingsFill,
  RiPagesFill,
  RiGroupFill,
  RiFunctionFill,
  RiHome4Fill,
  RiLinksFill,
  RiUser2Fill,
  RiArticleFill,
  RiMoneyDollarCircleFill,
  RiCalendarScheduleFill,
  RiCommunityFill,
  RiFlowChart,
  RiBuilding4Fill,
  RiMacFill,
  RiPhoneFill,
  RiPieChart2Fill,
  RiBox3Fill
} from "@remixicon/react";

import {SidebarDropdown} from "./sidebar-dropdown";
import {SidebarLink} from "./sidebar-link";
import {logoWhite} from "@/assets/images";
import Image from "next/image";
import {SidebarItemProps} from "@/types";

const SidebarItems: SidebarItemProps[] = [
  {
    type: "dropdown",
    title: "Portal do Investidor",
    Icon: RiFunctionFill,
    items: [
      {
        type: "link",
        title: "Investidor",
        Icon: RiUser2Fill,
        href: "/painel/investidor",
        isSub: true,
      },
      {
        type: "link",
        title: "Power BI",
        Icon: RiPieChart2Fill,
        href: "/painel/bi",
        isSub: true,
      },
      {
        type: "link",
        title: "Informativos",
        Icon: RiArticleFill,
        href: "/painel/informativos",
        isSub: true,
      },
      {
        type: "link",
        title: "Rendimentos",
        Icon: RiMoneyDollarCircleFill,
        href: "/painel/rendimentos",
        isSub: true,
      },
      {
        type: "link",
        title: "Planejamento",
        Icon: RiCalendarScheduleFill,
        href: "/painel/planejamento",
        isSub: true,
      },
      {
        type: "link",
        title: "Empreendimento",
        Icon: RiCommunityFill,
        href: "/painel/empreendimento",
        isSub: true,
      },
      {
        type: "link",
        title: "Fluxo de Aporte",
        Icon: RiFlowChart,
        href: "/painel/fluxo",
        isSub: true,
      },
     
    ],
  },
  {
    type: "dropdown",
    title: "Site",
    Icon: RiPagesFill,
    items: [
      {
        type: "link",
        title: "Projetos",
        Icon: RiBuilding4Fill,
        href: "/painel/projetos",
        isSub: true,
      },
      {
        type: "link",
        title: "Blue na Mídia",
        Icon: RiMacFill,
        href: "/painel/blue-midia",
        isSub: true,
      },
      {
        type: "link",
        title: "Dados de Contato",
        Icon: RiPhoneFill,
        href: "/painel/blue-midia",
        isSub: true,
      },
      {
        type: "link",
        title: "Conteúdos",
        Icon: RiBox3Fill,
        href: "/painel/blue-midia",
        isSub: true,
      },
    ],
  },
  {
    type: "link",
    title: "Usuários",
    Icon: RiGroupFill,
    href: "/painel/usuarios",
  },
  {
    type: "link",
    title: "Gerador de Links",
    Icon: RiLinksFill,
    href: "/painel/links",
  },
];

export const Sidebar = () => {
  return (
    <div className="hidden fixed left-0 top-0 lg:flex  flex-col w-[256px] bg-primary min-h-screen h-full items-center overflow-y-auto custom-scrollbar py-4 pl-3 pr-2">
      <div className="flex flex-col w-full h-full gap-2">
        <Image
          alt="Blue"
          src={logoWhite}
          priority
          className="h-auto w-[110px] pb-6"
        />
        <SidebarLink href="/painel" title="Página Inicial" Icon={RiHome4Fill} />
        <div className="flex flex-col w-full px-3 max-h-[1px] h-[1px] my-1">
          <div className="flex flex-1 w-full bg-white/10 max-h-[1px] h-[1px]" />
        </div>
        {SidebarItems.map((item, index) =>
          item.type === "link" ? (
            <SidebarLink key={index} {...item} />
          ) : (
            <SidebarDropdown key={index} {...item} />
          )
        )}
      </div>
    </div>
  );
};
