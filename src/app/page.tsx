"use client";
import { Lilita_One } from "next/font/google";
import { cn } from "@/lib/utils";

export const lilitaOne = Lilita_One({ subsets: ["latin"], weight: "400" });

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
      </div>
    </>
  );
}
