import {IconLock, IconMail} from "@tabler/icons-react";
import {Input, SubmitButton} from "@/components/ui";
import type {Metadata} from "next";
import Link from "next/link"
import Image from "next/image"
import {cover} from "@/assets/images"
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Login | Blue",
  };
}

export default async function Home() {
  return (
    <div className="relative flex h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] pb-40 w-full flex-col items-start justify-start overflow-hidden text-white px-20">
      <Image alt="" className="absolute inset-0 w-full h-full -z-10 object-cover" src={cover} priority />
      <div className="flex flex-col w-full items-end justify-center h-full">
        <div className="flex flex-col w-[600px] rounded-3xl p-6 gap-12">
          <p className="flex w-full items-center justify-center text-2xl font-bold">
            Faça login no Painel{" "}
            <span className="text-tertiary">&nbsp;Blue</span>
          </p>
          {/* <p className="flex w-full items-center justify-center text-2xl font-bold text-primary">Faça login no Painel <span className="text-tertiary">&nbsp;Blue</span></p> */}
          <div className="flex flex-col w-full gap-7">
            <Input Icon={IconMail} placeholder="Email" />
            <Input Icon={IconLock} placeholder="Senha" />
            <div className="flex text-sm flex-row w-full items-center justify-end  ">
              <p className="cursor-pointer hover:underline hover:underline-offset-1 transition-all">Esqueceu sua senha?</p>
            </div>
            <Link className="flex w-full" href="/painel">
            <SubmitButton form="login" isLoading={false}>
              Entrar
            </SubmitButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
