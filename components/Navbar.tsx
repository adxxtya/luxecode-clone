"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full h-[10vh]">
        <div className="flex justify-center items-center h-full">
          <div className="flex w-1/2">
            <div className="w-[40%] flex flex-col justify-center items-center">
              <Image
                src={"/logo.webp"}
                width={1000}
                height={1000}
                alt="logo"
                className="w-3/5 h-auto"
              />
            </div>
            <div className="relative w-[50%] h-[50%] flex items-center">
              <Image
                src={"/Image by Debby Hudson.webp"}
                width={1000}
                height={1000}
                alt="logo"
                className="relative w-full h-full object-contain"
              />
              <div className="absolute right-0 p-2">
                <Button className="tracking-wider">SUBSCRIBE NOW</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[4vh]">
        <ul className="flex w-full h-full justify-between items-center text-xs font-light gap-[1px]">
          <Link
            href="/"
            className={twMerge(
              "w-full h-full p-1 flex items-center pl-4 hover:bg-teal-950 hover:text-white cursor-pointer",
              `${pathname === "/" ? "bg-teal-950 text-white" : "bg-slate-100"}`
            )}
          >
            HOME
          </Link>
          <Link
            href="/art"
            className={twMerge(
              "w-full h-full p-1 flex items-center pl-4 hover:bg-teal-950 hover:text-white cursor-pointer",
              `${
                pathname === "/art" ? "bg-teal-950 text-white" : "bg-slate-100"
              }`
            )}
          >
            ART
          </Link>
          <Link
            href="/people"
            className={twMerge(
              "w-full h-full p-1 flex items-center pl-4 hover:bg-teal-950 hover:text-white cursor-pointer",
              `${
                pathname === "/people"
                  ? "bg-teal-950 text-white"
                  : "bg-slate-100"
              }`
            )}
          >
            PEOPLE
          </Link>
          <Link
            href="/places"
            className={twMerge(
              "w-full h-full p-1 flex items-center pl-4 hover:bg-teal-950 hover:text-white cursor-pointer",
              `${
                pathname === "/places"
                  ? "bg-teal-950 text-white"
                  : "bg-slate-100"
              }`
            )}
          >
            PLACES
          </Link>
          <Link
            href="/things"
            className={twMerge(
              "w-full h-full p-1 flex items-center pl-4 hover:bg-teal-950 hover:text-white cursor-pointer",
              `${
                pathname === "/things"
                  ? "bg-teal-950 text-white"
                  : "bg-slate-100"
              }`
            )}
          >
            THINGS
          </Link>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Navbar;
