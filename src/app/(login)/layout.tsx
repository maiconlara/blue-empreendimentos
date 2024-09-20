import {Header} from "@/components/ui";
import type {Metadata} from "next";
import localFont from "next/font/local";
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
        className={` ${Sora.variable} flex min-h-screen w-screen flex-col items-start justify-start overflow-x-hidden font-sora bg-primary`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
