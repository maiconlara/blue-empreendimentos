
import {banner} from "@/assets/images";
import type {Metadata} from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Painel | Blue",
  };
}

export default async function Home() {
  return (
    <div className="relative flex h-full rounded-md min-h-full w-full min-w-screen flex-col items-start justify-start overflow-hidden text-white  bg-white p-10 py-20">
         <div className="flex flex-col w-full">
      <div className="flex flex-col max-w-[850px] gap-5">
        <h1 className="font-medium text-4xl text-primary">Olá, Gestor!</h1>
        <div className="flex flex-col gap-2">

        <p className="font-regular text-sm  text-gray">Seja bem-vindo ao seu Painel Gerencial. Tudo o que você precisa está aqui.</p>
        <p className="font-regular text-sm  text-gray">Utilize do menu lateral para realizar a navegação no sistema.</p>
        </div>
      </div>
    </div>
        {/* <Image className="rounded-xl h-auto w-full object-cover mt-auto " priority placeholder="blur" alt="Boas vindas" src={banner} /> */}
     
      </div>
  );
}
