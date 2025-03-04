"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink } from "@/utils/navlink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isRouting, setisRouting] = useState<boolean>(false);
  const path = usePathname();
  const [, setprevPath] = useState<string>("/");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (isRouting) {
      setprevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-[100px] sticky top-0 transition-all duration-500 ${
        isScrolled ? "bg-blue-500 rounded-b-3xl" : "bg-transparent"
      }`}
    >
      <div className="py-4 flex justify-between items-center px-10 md:px-[4.5rem]">
        <Image
          className="w-fit h-10 lg:h-16 object-contain"
          src={logo}
          alt="Logo"
        />
        <ul className="lg:flex hidden text-white space-x-3">
          {NavLink.map((nav, index) => (
            <li
              key={index}
              className={`font-extralight cursor-pointer py-2 px-3 rounded-full ${
                nav.Label === "SIGN IN"
                  ? "bg-red-500 font-semibold"
                  : path === nav.href
                  ? "bg-blue-300"
                  : "hover:bg-blue-300 duration-500 ease-in-out"
              }`}
            >
              <Link href={nav.href}>{nav.Label}</Link>
            </li>
          ))}
        </ul>
        <RiMenu4Fill className="lg:hidden" color="white" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
