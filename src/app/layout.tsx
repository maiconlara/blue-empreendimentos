import localFont from "next/font/local";
import type {Metadata} from "next";
import "./globals.css";

const Sora = localFont({
  src: [
    {
      path: "../assets/fonts/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Sora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Sora-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Sora-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Sora-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sora",
});

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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00183b" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${Sora.variable} flex min-h-screen w-screen flex-col items-start justify-start overflow-x-hidden font-sora bg-primary`}
        // className={`${Sora.variable} flex min-h-screen w-screen flex-col items-start justify-start overflow-x-hidden font-sora bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
