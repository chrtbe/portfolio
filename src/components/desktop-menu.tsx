import Link from "next/link";

export const DesktopMenu = () => {
  return (
    <div className="justify-end items-center gap-4  flex">
      <Link href="./about">About me</Link>
      <Link href="./resume">Resume</Link>
      <Link href="./projects">Projects</Link>
      <Link
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-4 py-1"
        type="button"
        href="mailto:chrtine.bell2003@gmail.com?subject=Get in touch via Portfolio&body=Hi there!"
      >
        Get in touch!
      </Link>
    </div>
  );
};
