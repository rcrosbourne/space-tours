/* eslint-disable @next/next/link-passhref */
import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
const menuItems = [
  {
    label: "HOME",
    id: "00",
    href: "/",
  },
  {
    label: "DESTINATION",
    id: "01",
    href: "/destination",
  },
  {
    label: "CREW",
    id: "02",
    href: "/crew",
  },
  {
    label: "TECHNOLOGY",
    id: "03",
    href: "/technology",
  },
];
const Navigation: React.FunctionComponent = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <div className="relative z-auto p-4 overflow-hidden text-white md:px-0 md:pt-0 xl:max-w-[1500px] xl:mx-auto">
      <div className="relative flex items-center justify-between md:min-h-[96px]">
        {/* md:pl-10 md:pr-12 */}
        <div className="relative w-full md:min-h-[96px] flex items-center justify-between pl-2 md:pl-10 xl:pl-14 xl:mt-16">
          <svg viewBox="0 0 40 40" fill="currentColor" className="w-10 h-10">
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
            {menuItems.map((item) => (
              <li key={item.id} className="flex items-center justify-center">
                <Link href={item.href}>
                  <div
                    className={
                      router.asPath === item.href
                        ? "flex items-center min-h-[96px] border-b-4 border-white pt-1"
                        : "flex items-center  min-h-[96px]"
                    }
                  >
                    <a>
                      <span className="hidden font-semibold tracking-widest xl:inline font-barlow-condensed">
                        {item.id}
                      </span>
                      <span className="ml-3 font-thin tracking-widest md:ml-0 xl:ml-3 font-barlow-condensed md:leading-4">
                        {item.label}
                      </span>
                    </a>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Main content start*/}
      {children}
      {/* Main Content end */}
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
        <div className="absolute top-0 right-0 items-center w-64 min-h-[660px] origin-top-right md:hidden bg-backdrop backdrop-filter backdrop-blur-3xl firefox:bg-primary">
          <div className="flex items-start justify-end w-full p-8">
            <button onClick={() => setShowMenu(false)}>
              <svg className="w-5 h-5" viewBox="0 0 20 21" fill="currentColor">
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
          <nav className="pl-8 mt-16 text-white">
            <ul className="space-y-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <div
                      className={
                        router.asPath === item.href
                          ? "flex items-center  min-h-[32px] border-r-4 border-secondary"
                          : "flex items-center  min-h-[32px]"
                      }
                    >
                      <button>
                        <span className="font-semibold tracking-widest font-barlow-condensed">
                          {item.id}
                        </span>
                        <span className="ml-3 font-thin tracking-widest font-barlow-condensed">
                          {item.label}
                        </span>
                      </button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
  );
};
export default Navigation;
