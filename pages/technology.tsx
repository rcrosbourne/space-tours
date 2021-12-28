import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Navigation from "../components/navigation";
import launchVehicle from "../public/images/launch-vehicle.svg";
import spaceCapsule from "../public/images/space-capsule.svg";
import spaceport from "../public/images/spaceport.svg";
import backgroundTechnology from "../public/images/background-technology-mobile.svg";

const technology = [
  {
    id: 0,
    item: 1,
    title: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: (
      <Image
        src={launchVehicle}
        alt="Launch Vehicle"
        layout="fill"
        objectFit="cover"
      />
    ),
  },
  {
    id: 1,
    item: 2,
    title: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: (
      <Image src={spaceport} alt="Spaceport" objectFit="cover" layout="fill" />
    ),
  },
  {
    id: 2,
    item: 3,
    title: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: (
      <Image
        src={spaceCapsule}
        alt="Space Capsule"
        objectFit="cover"
        layout="fill"
      />
    ),
  },
];
const Technology: NextPage = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);
  return (
    <div className="relative min-h-screen bg-primary">
      <Head>
        <title>Technology</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full h-full bg-center bg-no-repeat bg-cover">
        <Image
          src={backgroundTechnology}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center-top"
        />
      </div>
      <Navigation>
        <div className="flex flex-col items-center justify-between md:grid md:grid-cols-1 xl:grid xl:grid-cols-3 xl:gap-x-[130px] xl:gap-y-16 xl:max-w-[1110.5px] xl:mx-auto">
          <div className="flex mt-6 md:w-full md:pl-10 md:mt-9 xl:col-span-3 xl:-ml-10 xl:mt-20">
            <span className="font-barlow-condensed tracking-[2.7px] leading-[19.2px] font-bold text-white opacity-25 md:text-[20px] md:leading-6 md:tracking-[3.38px] xl:text-3xl xl:leading-8 xl:tracking-[4.72px]">
              03
            </span>
            <p className="ml-5 leading-[19.2px] tracking-[2.7px] text-white font-barlow-condensed md:text-[20px] md:leading-6 md:tracking-[3.38px] xl:text-3xl xl:leading-8 xl:tracking-[4.72px]">
              SPACE LAUNCH 101
            </p>
          </div>
          <div className="relative w-full mt-8 md:mx-auto md:min-h-[310px] md:mt-[60px]  xl:place-self-end xl:w-[568px] xl:min-h-[712px] xl:col-start-3 xl:row-start-2 xl:mt-0 xl:row-span-2">
            <div className="relative w-full min-h-[170px] mx-auto bg-white md:w-full md:min-h-[320px] xl:min-h-[527px]">
              {selectedTechnology.image}
            </div>
          </div>
          <div className="mt-7 xl:max-w-[445px] md:grid md:grid-cols-1 md:mx-auto md:mt-14 xl:row-start-2 xl:row-span-1 xl:col-span-2 xl:grid-cols-2 xl:mt-[7.7rem]">
            <div className="flex items-center justify-center xl:justify-start">
              <ul className="flex items-center justify-between space-x-4 md:space-x-4 xl:space-y-8 font-barlow-condensed text-sm tracking-[2.36px] leading-[17px] text-white md:tracking-[2.7px] md:leading-[19.2px] md:text-base md:mt-10 xl:mt-0 xl:flex-col xl:space-x-0">
                {technology.map((tech, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedTechnology(technology[index])}
                    >
                      <div
                        className={`flex items-center font-bellefair text-base leading-[18.34px] md:text-[24px] md:leading-[27.5px] md:tracking-[1.5px] tracking-[1px] justify-center mx-auto w-10 h-10 rounded-full md:w-12 md:h-12 xl:w-20 xl:h-20 xl:mt-30 ${
                          selectedTechnology.id === index
                            ? "bg-white text-primary"
                            : "text-white border-2 border-quaternary"
                        }`}
                      >
                        {tech.item}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 md:mt-8 md:max-w-[458px] xl:col-start-2 xl:min-w-[470px] xl:mt-0">
              <div className="text-center xl:text-left">
                <h2 className="text-sm uppercase font-barlow-condensed text-secondary leading-[16.8px] tracking-[2.36px] md:text-base md:leading-[19.2px] md:tracking-[2.7px]">
                  The Terminology...
                </h2>
                <p className="uppercase font-bellefair text-2xl mt-2 leading-[27.5px] text-white md:text-4xl md:leading-[45.84px] xl:text-4xl xl:leading-9">
                  {selectedTechnology.title}
                </p>
                <p className="font-barlow text-[15px] leading-6 mt-2 text-secondary md:text-base md:leading-[28px] md:mt-2 xl:mt-4 xl:text-[18px] xl:leading-[32px]">
                  {selectedTechnology.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
};
export default Technology;
