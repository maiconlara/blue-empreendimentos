import localFont from "next/font/local";
import type {Metadata} from "next";
import "./globals.css";

const Sora = localFont({
  src: [
    {
      path: "/fonts/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/Sora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Sora-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Sora-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Sora-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sora",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Clue Investimentos",
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
        className={`${Sora.variable} flex min-h-screen w-screen flex-row items-center justify-center overflow-x-hidden font-sora `}
      >
        {children}
      </body>
    </html>
  );
}
