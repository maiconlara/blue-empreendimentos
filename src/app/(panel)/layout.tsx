import localFont from "next/font/local";
import {Sidebar} from "@/components/ui";
import type {Metadata} from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blue Empreendimentos",
  };
}
const Sora = localFont({
  src: [
    {
      path: "../../assets/fonts/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Sora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Sora-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Sora-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Sora-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sora",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${Sora.variable} flex min-h-screen w-screen flex-col items-start justify-start overflow-x-hidden font-sora bg-primary`}
      >
        <Sidebar />
        <div className="flex flex-col w-full items-center max-w-[100vw] lg:max-w-[calc(100vw-256px)] min-h-screen h-screen lg:ml-[256px] overflow-x-hidden bg-primary p-1">
          <div className="flex flex-col w-full h-full rounded-lg bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
