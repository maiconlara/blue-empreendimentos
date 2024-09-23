"use client";

import {PasswordForm} from "./password-form";
import {RecoverySteps} from "@/types";
import {EmailForm} from "./email-form";
import {CodeForm} from "./code-form";
import {useState} from "react";

export const PasswordRecovery = () => {
  const [recoveryStep, setRecoveryStep] = useState<RecoverySteps>("email");

  if (recoveryStep === "email") {
    return <EmailForm setRecoveryStep={setRecoveryStep} />;
  } else if (recoveryStep === "code") {
    return <CodeForm setRecoveryStep={setRecoveryStep} />;
  } else {
    return <PasswordForm setRecoveryStep={setRecoveryStep} />;
  }
};
