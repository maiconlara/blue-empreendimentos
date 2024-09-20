"use client";

import {RiMailFill, RiArrowRightSLine} from "@remixicon/react";
import {Input, SubmitButton} from "@/components/ui";
import {Dispatch, SetStateAction} from "react";
import {RecoverySteps} from "@/types";
import Link from "next/link";

interface EmailFormProps {
  setRecoveryStep: Dispatch<SetStateAction<RecoverySteps>>;
}

export const EmailForm = ({setRecoveryStep}: EmailFormProps) => {
  return (
    <div className="flex flex-col w-[600px] rounded-3xl p-6 gap-12">
      <div className="flex flex-col gap-2">
        <p className="flex w-full items-center justify-center text-2xl font-bold">
          Redefinir Senha
        </p>
        <p className="flex w-full items-center justify-center text-sm text-center">
          Insira um e-mail para redefinir a sua senha.
        </p>
      </div>
      <div className="flex flex-col w-full gap-7">
        <Input Icon={RiMailFill} placeholder="Email" />
        <Link className="flex w-full" href="/painel">
          <SubmitButton form="login" isLoading={false}>
            Confirmar
          </SubmitButton>
        </Link>
        <div
          onClick={() => {
            setRecoveryStep("code");
          }}
          className="flex flex-row w-full items-center justify-end hover:underline hover:underline-offset-1 transition-all cursor-pointer "
        >
          <p className=" text-sm">Já possuí um código?</p>
          <RiArrowRightSLine className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};
