"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import BackgroundMusic from "@/components/sound/background-music";
import FallingLeaves from "./leavefall";
import FacebookIcon from "@/components/icons/facebook";
import { ContactForn } from "./contact-form";

export const IncomingSection = () => {
  const { theme } = useTheme();

  const navigateToFaceBook = () => {
    window.open(
      "https://www.facebook.com/CanhoEssensianamsaigon?mibextid=wwXIfr&rdid=ZwZq9bLdQau8bDoq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18tp5BnRoB%2F%3Fmibextid%3DwwXIfr",
      "_blank"
    );
  };

  return (
    <section
      className="w-full h-[100vh] relative overflow-hidden"
      style={{
        background: "url(/background.png) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <FallingLeaves />
      <BackgroundMusic />

      <header className="w-full flex justify-start bg-transparent top-5 mx-auto sticky z-40">
        <Link
          href="/"
          className="font-bold text-lg flex items-center absolute left-[5%] top-[27px] w-[20%] md:w-[10%]"
        >
          <Image src={"/logo.png"} alt="" width={188} height={170} />
        </Link>
      </header>
      <div className="flex w-full justify-center fixed z-10 top-[20%] md:top-[12%] animate-fade animate-infinite animate-duration-[6000ms] animate-delay-300">
        <Image
          src={"/headline.png"}
          alt=""
          width={1452}
          height={326}
          className="w-[80%] md:w-[40%]"
        />
      </div>
      <div className="fixed left-[3%] bottom-[5%] animate-bounce z-10">
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

      <div className="flex flex-col fixed right-[1%] bottom-[5%] z-10 gap-3">
        <ContactForn />
        <button
          className="right-[3%] top-[27px] flex items-center bg-[#27685c] rounded-full text-white text-nowrap p-4 font-medium w-[50px] h-[50px]"
          onClick={navigateToFaceBook}
        >
          <FacebookIcon />
        </button>
      </div>
    </section>
  );
};
