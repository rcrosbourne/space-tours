import { Transition } from "@headlessui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import backgroundImage from "../public/images/background-home.svg";
import backgroundImageLg from "../public/images/background-home-lg.svg";

const mobileMenuItems = [
  {
    label: "HOME",
    id: "00",
    href: "#",
    active: true,
  },
  {
    label: "DESTINATION",
    id: "01",
    href: "#",
    active: false,
  },
  {
    label: "CREW",
    id: "02",
    href: "#",
    active: false,
  },
  {
    label: "TECHNOLOGY",
    id: "03",
    href: "#",
    active: false,
  },
];
const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="min-h-screen relative bg-primary">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="xl:hidden absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center">
        <Image
          src={backgroundImage}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center-top"
        />
      </div>
      <div className="hidden xl:block absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center">
        <Image
          src={backgroundImageLg}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="p-4 md:px-0 md:pt-0 z-auto text-white relative">
        <div className="relative flex items-center justify-between md:min-h-[96px] xl:max-w-[1500px] xl:mx-auto">
          {/* md:pl-10 md:pr-12 */}
          <div className="relative w-full md:min-h-[96px] flex items-center justify-between pl-2 md:pl-10 xl:pl-14 xl:mt-16">
            <svg viewBox="0 0 40 40" fill="currentColor" className="h-10 w-10">
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z"
                fill="#0B0D17"
              />
            </svg>
            {/* Decorative line */}
            <div className="hidden xl:inline absolute inset-0 top-[50%] left-[167px] opacity-25 bg-white  mix-blend-normal h-[1px] w-[473px]" />
          </div>
          {/* Mobile menu button */}
          <button onClick={() => setShowMenu(true)} className="md:hidden">
            <svg className="w-6 h-6" viewBox="0 0 24 21" fill="currentColor">
              <rect width="24" height="3" fill="#D0D6F9" />
              <rect y="9" width="24" height="3" fill="#D0D6F9" />
              <rect y="18" width="24" height="3" fill="#D0D6F9" />
            </svg>
          </button>
          {/* Medium menu */}
          <nav className="hidden md:relative md:flex md:items-center md:min-h-[96px] md:pr-12 xl:mt-16">
            {/* backdrop background */}
            <div className="md:absolute md:top-0 md:right-0 md:min-w-[444px]  md:bg-backdrop md:min-h-[96px] md:pl-12 md:backdrop-filter md:backdrop-blur-3xl xl:min-w-[830px] firefox:bg-transparent" />
            <ul className="relative z-auto flex items-center justify-between space-x-9">
              {mobileMenuItems.map((item) => (
                <li key={item.id} className="flex items-center justify-center">
                  <div
                    className={
                      item.active
                        ? "flex items-center min-h-[96px] border-b-4 border-white pt-1"
                        : "flex items-center  min-h-[96px]"
                    }
                  >
                    <button>
                      <span className="hidden xl:inline font-barlow-condensed font-semibold tracking-widest">
                        {item.id}
                      </span>
                      <span className="ml-3 md:ml-0 xl:ml-3 font-barlow-condensed font-thin tracking-widest md:leading-4">
                        {item.label}
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 md:mt-24 md:max-w-[450px] md:mx-auto text-center">
          <div>
            <p className="font-barlow-condensed text-secondary leading-5 tracking-[2.7px] font-light">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className="font-bellefair text-[80px] leading-[100px] mt-4">
              SPACE
            </p>
          </div>
          <div className="">
            <p className="font-barlow font-light text-center text-[15px] leading-[25px] text-secondary tracking-wide">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-20  ">
          <div className="bg-white flex items-center justify-center h-[150px] w-[150px] rounded-full text-center">
            <p className="font-bellefair text-primary text-xl leading-6 tracking-[1.25px]">
              EXPLORE
            </p>
          </div>
        </div>
      </div>
      {/* Menu */}
      <Transition
        show={showMenu}
        as={Fragment}
        enter="transition-translate ease-out duration-300"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition-translate ease-in duration-300"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
        <div className="md:hidden absolute origin-top-right items-center top-0 right-0 w-64 h-screen bg-backdrop backdrop-filter backdrop-blur-3xl firefox:bg-primary">
          <div className="w-full flex items-start justify-end p-8">
            <button onClick={() => setShowMenu(false)}>
              <svg className="h-5 w-5" viewBox="0 0 20 21" fill="currentColor">
                <rect
                  x="2.5752"
                  y="0.954102"
                  width="24"
                  height="3"
                  transform="rotate(45 2.5752 0.954102)"
                  fill="#D0D6F9"
                />
                <rect
                  x="0.454102"
                  y="17.9246"
                  width="24"
                  height="3"
                  transform="rotate(-45 0.454102 17.9246)"
                  fill="#D0D6F9"
                />
              </svg>
            </button>{" "}
          </div>
          <nav className="text-white mt-16 pl-8">
            <ul className="space-y-8">
              {mobileMenuItems.map((item) => (
                <li key={item.id}>
                  <div
                    className={
                      item.active
                        ? "flex items-center  min-h-[32px] border-r-4 border-secondary"
                        : "flex items-center  min-h-[32px]"
                    }
                  >
                    <button>
                      <span className="font-barlow-condensed font-semibold tracking-widest">
                        {item.id}
                      </span>
                      <span className="ml-3 font-barlow-condensed font-thin tracking-widest">
                        {item.label}
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
  );
};

export default Home;
