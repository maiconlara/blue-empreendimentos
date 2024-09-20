
import { PasswordRecovery } from "@/components/ui";
import type {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Redefinir Senha | Blue",
  };
}

export default async function Home() {
  return (
    <div className="relative flex h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] pb-40 w-full flex-col items-start justify-start overflow-hidden text-white px-20">
      <div className="flex flex-col w-full items-center justify-center h-full">
        <PasswordRecovery />
      </div>
    </div>
  );
}
