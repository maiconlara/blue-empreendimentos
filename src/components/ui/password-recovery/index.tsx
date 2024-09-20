"use client";

import { RecoverySteps } from "@/types";
import {EmailForm} from "./email-form";
import {useState} from "react";


export const PasswordRecovery = ( ) => {

    const [recoveryStep, setRecoveryStep] = useState<RecoverySteps>("email");

    return recoveryStep === "email" ? (
        <EmailForm setRecoveryStep={setRecoveryStep} />
    ) : null
        
         
}