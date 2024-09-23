import {Combobox} from "@/components/ui";
import {RiAddLine, RiFileExcel2Line} from "@remixicon/react";


export const Filters = () => {
    const frameworks = [
        {
          value: "Maicon Lara",
          label: "Maicon Lara",
        },
        {
          value: "Lara Maicon",
          label: "Lara Maicon",
        },

      ];
    return (
        <div className="flex flex-col gap-2 w-full">
        <p className="text-primary font-bold text-sm">Filtrar por</p>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row gap-4 items-center">
            <Combobox placeholder="Nome" items={frameworks} />
            <Combobox placeholder="Permissão" items={frameworks} />
            <Combobox placeholder="Status" items={frameworks} />
            <div className="flex flex-row w-6 h-6 rounded-full items-center justify-center bg-tertiary hover:bg-tertiary/80 transition-colors cursor-pointer">
              <RiAddLine className="text-white" />
            </div>
          </div>
          <div className="flex flex-row gap-1 text-tertiary hover:text-tertiary/80 items-center cursor-pointer transition-colors">
            <RiFileExcel2Line className="w-6 h-6 " />
            <p className="underline font-light ">Baixar Excel</p>
          </div>
        </div>
      </div>
    )
}