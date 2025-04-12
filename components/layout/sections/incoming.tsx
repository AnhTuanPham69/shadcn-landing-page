"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../navbar";

export const IncomingSection = () => {
  const { theme } = useTheme();
  return (
    <section
      className="w-full h-[1080px] relative"
      style={{
        background: "url(/background.png) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <header className="w-full flex justify-start bg-transparent top-5 mx-auto sticky z-40">
        <Link
          href="/"
          className="font-bold text-lg flex items-center absolute left-[5%] top-[27px] w-[10%]"
        >
          <Image src={"/logo.png"} alt="" width={188} height={170} />
        </Link>
      </header>
      <div className="flex w-full justify-center fixed top-[12%] animate-jump-in">
        <Image
          src={"/headline.png"}
          alt=""
          width={1452}
          height={326}
          className="w-[40%]"
        />
      </div>
      <div className="fixed left-[3%] bottom-[5%] animate-bounce">
        <Image
          src={"/hotline.png"}
          alt=""
          width={734}
          height={215}
          className="w-[250px]"
        />
      </div>
      <div className="absolute right-[5%] bottom-[5%]">
        <Image
          src={"/logo-botom.png"}
          alt=""
          width={734}
          height={215}
          className="w-[250px]"
        />
      </div>
    </section>
  );
};
