"use client";

import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import {Filters} from "./filters";

export const UserList = () => {
  const usuarios = [
    {
      name: "Maicon Lara",
      permission: "Admin Site",
      status: "Ativo",
    },
    {
      name: "Lara Maicon",
      permission: "Admin Portal",
      status: "Inativo",
    },
  ];
  return (
    <div className="flex flex-col gap-6 w-full">
      <Filters />
      <div className="flex flex-rol w-full ">
        <Table>
          <TableHeader className="bg-primary h-14 border border-primary ">
            <TableRow>
              <TableHead className="text-white">Nome</TableHead>
              <TableHead className="text-white">Permissão</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usuarios.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-semibold text-primary">
                    {user.name}
                  </TableCell>
                  <TableCell className=" text-primary">
                    {user.permission}
                  </TableCell>
                  <TableCell className=" text-primary">{user.status}</TableCell>
                  <TableCell className=" text-primary">X</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
