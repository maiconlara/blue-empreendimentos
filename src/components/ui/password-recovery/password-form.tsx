"use client";

import {RiMailFill, RiLock2Fill} from "@remixicon/react";
import {Input, SubmitButton} from "@/components/ui";
import {Dispatch, SetStateAction} from "react";
import {RecoverySteps} from "@/types";
import Link from "next/link";

interface PasswordFormProps {
  setRecoveryStep: Dispatch<SetStateAction<RecoverySteps>>;
}

export const PasswordForm = ({setRecoveryStep}: PasswordFormProps) => {
  return (
    <div className="flex flex-col w-[600px] min-h-[328px] rounded-3xl p-6 gap-12">
      <div className="flex flex-col gap-2">
        <p className="flex w-full items-center justify-center text-2xl font-bold">
          Redefinir Senha
        </p>
        <p className="flex w-full items-center justify-center text-sm text-center">
          Por favor, insira a senha desejada.
        </p>
      </div>
      <div className="flex flex-col w-full gap-7">
        <Input Icon={RiLock2Fill} placeholder="Nova senha" />
        <Input Icon={RiLock2Fill} placeholder="Confirmar nova senha" />
        <Link href="/" className="flex w-full" >
          <SubmitButton form="login" isLoading={false}>
            Redefinir
          </SubmitButton>
        </Link>
      </div>
    </div>
  );
};
