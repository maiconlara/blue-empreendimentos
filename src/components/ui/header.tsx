import {logoWhite} from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <nav className="flex flex-row w-full h-32 px-20 items-center justify-between bg-gradient-to-b from-[#00183C] to-[#0c214000]">
      <Link href="/">
      <Image
        width={211}
        height={94}
        quality={100}
        priority={true}
        src={logoWhite}
        alt="logo blue empreendimentos"
        className="w-[211px] h-[94px] select-none"
        />
        </Link>
      {/* <h1 className="text-white text-2xl font-bold tracking-wider select-none">Painel Gerencial</h1> */}
    </nav>
  );
};
