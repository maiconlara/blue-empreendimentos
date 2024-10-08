import {Title} from "@/components/ui";
import type {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Painel | Blue",
  };
}

export default async function Home() {
  return (
    <div className="relative flex h-full rounded-md min-h-full w-full min-w-screen flex-col items-start justify-start overflow-hidden text-white  bg-white p-10 py-20">
      <Title
        title="Olá, Gestor!"
        description1="Seja bem-vindo ao seu Painel Gerencial. Tudo o que você precisa está aqui."
        description2="Utilize do menu lateral para realizar a navegação no sistema."
      />
    </div>
  );
}
