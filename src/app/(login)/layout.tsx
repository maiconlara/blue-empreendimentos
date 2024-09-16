import {Header} from "@/components/ui";
import type {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blue Empreendimentos",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      
      <body
        className={`flex min-h-screen w-screen flex-col items-start justify-start overflow-x-hidden font-sora bg-primary`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
