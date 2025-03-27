import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export const MobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-mt-14  w-[100vw] flex flex-col gap-4  py-10 pt-20 p-4 bg-background items-center ">
        <Link href="./about">About me</Link>
        <Link href="./resume">Resume</Link>
        <Link href="./projects">Projects</Link>
        <Link
          className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-4 py-1"
          type="button"
          href="mailto:chrtine.bell2003@gmail.com?subject=Get in touch via Portfolio&body=Hi there!"
        >
          Get in touch!
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
