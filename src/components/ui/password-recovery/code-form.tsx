"use client";

import {RiMailFill, RiArrowRightSLine} from "@remixicon/react";
import {Input, SubmitButton} from "@/components/ui";
import {Dispatch, SetStateAction} from "react";
import {RecoverySteps} from "@/types";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface CodeFormProps {
  setRecoveryStep: Dispatch<SetStateAction<RecoverySteps>>;
}

export const CodeForm = ({setRecoveryStep}: CodeFormProps) => {
  return (
    <div className="flex flex-col w-[600px] min-h-[328px] rounded-3xl p-6 gap-12">
      <div className="flex flex-col gap-2">
        <p className="flex w-full items-center justify-center text-2xl font-bold">
          Redefinir Senha
        </p>
        <p className="flex w-full items-center justify-center text-sm text-center">
          Insira o codigo recebido no campo abaixo.
        </p>
      </div>
      <div className="flex flex-col w-full gap-7 items-center">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>

        <div 
        onClick={() => {
          setRecoveryStep("password");
        }}
        className="flex w-full">
          <SubmitButton form="login" isLoading={false}>
            Confirmar
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};
