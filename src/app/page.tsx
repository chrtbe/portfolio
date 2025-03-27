"use client";
import { Lilita_One } from "next/font/google";
import { cn } from "@/lib/utils";

const lilitaOne = Lilita_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <div className="pt-20 sm:pt-0 relative -ml-1 sm:-ml-2 md:ml-0  flex flex-col gap-1 md:items-center">
        <h1
          className={cn(
            lilitaOne.className,
            "text-primary z-2 text-6xl sm:text-8xl md:text-[8rem] 2xl:text-[10rem] "
          )}
        >
          PORTFOLIO
        </h1>
        <div
          className={cn(
            lilitaOne.className,
            "text-6xl sm:text-8xl md:text-[8rem] 2xl:text-[10rem] flex flex-col gap-1 font-bold text-transparent outline-none"
          )}
          style={{ WebkitTextStroke: "2px var(--primary)" }}
        >
          <div>PORTFOLIO</div>
          <div>PORTFOLIO</div>
          <div>PORTFOLIO</div>
        </div>

        <div className="absolute h-[60vw] w-[60vw] mr-0 mt-12 ml-[30vw]  md:w-[400px] md:h-[550px] md:ml-0 md:mr-[500px] sm:h-[70vh] 2xl:w-[650px] 2xl:h-[650px] bg-tertiary 2xl:mr-[775px] 2xl:mt-[80px] md:mt-[60px]"></div>
      </div>
    </>
  );
}
