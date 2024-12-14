"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { IoClose, IoMenu } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const openSidebar = () => {
    setAnimationClass("animate__animated animate__fadeInLeft");
    setSidebar(true);
  };

  const closeSidebar = () => {
    setAnimationClass("animate__animated animate__fadeOutLeft");
    setTimeout(() => {
      setSidebar(false);
    }, 650);
  };

  return (
    // <header className="bg-white">
    //   <div className="mx-auto max-w-7xl px-4 py-5 md:py-8">
    //     <div className="flex h-16 items-center justify-between">
    //       <div className="flex-1 md:flex md:items-center md:gap-12">
    //         <Link href={"/"}>
    //           <Image
    //             src={Logo}
    //             alt="logo"
    //             height={80}
    //             width={80}
    //             className="scale-75"
    //           />
    //         </Link>
    //       </div>

    //       <div className="md:flex md:items-center md:gap-12">
    //         <nav aria-label="Global" className="hidden md:block">
    //           <ul className="flex items-center gap-10 text-sm font-semibold">
    //             {/* <li>
    //           <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
    //         </li> */}

    //             <li>
    //               <Link className="transition" href="/listings">
    //                 {" "}
    //                 Listings{" "}
    //               </Link>
    //             </li>

    //             <li>
    //               <Link className="transition" href="/listings">
    //                 {" "}
    //                 Buy{" "}
    //               </Link>
    //             </li>

    //             <li>
    //               <Link className="transition" href="/listings">
    //                 {" "}
    //                 Rent{" "}
    //               </Link>
    //             </li>

    //             <li>
    //               <Link className="transition" href="/listings">
    //                 {" "}
    //                 Commercial{" "}
    //               </Link>
    //             </li>

    //             {/* <li>
    //           <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
    //         </li>

    //         <li>
    //           <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
    //         </li> */}
    //           </ul>
    //         </nav>

    //         <div className="flex items-center gap-4">
    //           <div className="sm:flex sm:gap-4">
    //             <Link
    //               className=" bg-[#3C0C64] px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow rounded-lg hidden md:block"
    //               target="_blank"
    //               href={"https://wa.me/+2348182012345/"}
    //             >
    //               Contact Agents
    //             </Link>
    //           </div>

    //           <div className="block md:hidden">
    //             <button className="rounded p-2 text-gray-600 transition hover:text-gray-600/75">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="size-5"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth="2"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>

    // <header className="bg-white">
    //   <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-5 md:py-8 border-b">
    //     <div className="flex items-center gap-1">
    //       <div className="rounded p-2 transition">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="size-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           />
    //         </svg>
    //       </div>
    //       <span className="text-sm font-semibold">Menu</span>
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <Link href={"/"} className="flex items-center gap-2">
    //         <Image
    //           src={Logo}
    //           alt="logo"
    //           height={40}
    //           width={40}
    //           // className="scale-75"
    //         />
    //       </Link>
    //       <span className="text-sm font-semibold">Harmony Homes NG</span>
    //     </div>
    //     <Link
    //       className=" bg-[#3C0C64] px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow rounded-lg hidden md:block"
    //       target="_blank"
    //       href={"https://wa.me/+2348182012345/"}
    //     >
    //       Contact Agents
    //     </Link>
    //   </div>
    //   <div className="mx-auto max-w-7xl flex items-center justify-center gap-4 py-8">
    //     <ul className="flex items-center gap-14 text-sm font-semibold">
    //       {/* <li>
    //            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
    //          </li> */}

    //       <li>
    //         <Link className="transition" href="/listings">
    //           {" "}
    //           Home{" "}
    //         </Link>
    //       </li>

    //       <li>
    //         <Link className="transition" href="/listings">
    //           {" "}
    //           Listings{" "}
    //         </Link>
    //       </li>

    //       <li>
    //         <Link className="transition" href="/listings">
    //           {" "}
    //           Buy{" "}
    //         </Link>
    //       </li>

    //       <li>
    //         <Link className="transition" href="/listings">
    //           {" "}
    //           Rent{" "}
    //         </Link>
    //       </li>

    //       <li>
    //         <Link className="transition" href="/listings">
    //           {" "}
    //           Commercial{" "}
    //         </Link>
    //       </li>

    //       {/* <li>
    //            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
    //          </li>

    //          <li>
    //            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
    //          </li> */}
    //     </ul>
    //   </div>
    // </header>

    <header className="relative bg-white mx-auto max-w-7xl flex items-center justify-between px-4 py-6 md:py-8">
      {sidebar && (
        <div
          onClick={closeSidebar}
          className="bg-[#3C0C64]/40 fixed inset-0 z-[99999] backdrop-blur-3xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-white w-2/3 h-full py-4 overflow-y-scroll ${animationClass}`}
          >
            <button
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-xl border border-black rounded-full p-0.5"
            >
              <IoClose size={14} />
            </button>
            <div className="flex flex-col mt-8">
              <Link
                href={"/"}
                className="flex items-center justify-between text-sm font-medium border-b px-3 py-4"
                onClick={closeSidebar}
              >
                Home
                <IoIosArrowForward size={15} />
              </Link>
              <Link
                href={"/"}
                className="flex items-center justify-between text-sm font-medium border-b px-3 py-4"
                onClick={closeSidebar}
              >
                Listings
                <IoIosArrowForward size={15} />
              </Link>
              <Link
                href={"/"}
                className="flex items-center justify-between text-sm font-medium border-b px-3 py-4"
                onClick={closeSidebar}
              >
                Buy
                <IoIosArrowForward size={15} />
              </Link>
              <Link
                href={"/"}
                className="flex items-center justify-between text-sm font-medium border-b px-3 py-4"
                onClick={closeSidebar}
              >
                Rent
                <IoIosArrowForward size={15} />
              </Link>
              <Link
                href={"/"}
                className="flex items-center justify-between text-sm font-medium border-b px-3 py-4"
                onClick={closeSidebar}
              >
                Commercial
                <IoIosArrowForward size={15} />
              </Link>
            </div>
            <div className="mt-8 px-3">
              
              <p className="text-[11px] text-gray-500 font-medium">
                Prices, availability, and other details are subject to change
                without notice. Please verify all information with the
                appropriate property listing agent.
              </p>
              <p className="text-[11px] text-gray-500 font-medium mt-3">
                Copyright &copy; Harmony Homes NG
              </p>
            </div>
          </div>
        </div>
      )}
      <Link href={"/"} className="flex items-center gap-2.5">
        <Image
          src={Logo}
          alt="logo"
          height={50}
          width={50}
          // className="scale-75"
        />
        <div className="flex flex-col gap-1">
          <span className="text-sm md:text-base font-bold">
            Harmony Homes NG
          </span>
          <span className="text-gray-500 text-xs">Affordable luxury...</span>
        </div>
      </Link>
      <ul className="md:flex items-center gap-12 text-sm font-semibold hidden">
        {/* <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
              </li> */}

        <li>
          <Link className="transition" href="/listings">
            {" "}
            Home{" "}
          </Link>
        </li>

        <li>
          <Link className="transition" href="/listings">
            {" "}
            Listings{" "}
          </Link>
        </li>

        <li>
          <Link className="transition" href="/listings">
            {" "}
            Buy{" "}
          </Link>
        </li>

        <li>
          <Link className="transition" href="/listings">
            {" "}
            Rent{" "}
          </Link>
        </li>

        <li>
          <Link className="transition" href="/listings">
            {" "}
            Commercial{" "}
          </Link>
        </li>
      </ul>
      <button
        className="rounded p-2 transition block md:hidden"
        onClick={openSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
