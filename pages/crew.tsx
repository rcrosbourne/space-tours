import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Navigation from "../components/navigation";
import douglas from "../public/images/douglas.svg";
import mark from "../public/images/mark.svg";
import victor from "../public/images/victor.svg";
import anousheh from "../public/images/anousheh.svg";
import backgroundCrew from "../public/images/background-crew.svg";

const crew = [
  {
    id: 0,
    image: (
      <Image
        src={douglas}
        alt="Douglas Hurley"
        objectFit="contain"
        layout="fill"
      />
    ),
    name: "Douglas Hurley",
    title: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 1,
    image: (
      <Image
        src={mark}
        alt="Mark Shuttleworth"
        objectFit="contain"
        layout="fill"
      />
    ),
    name: "Mark Shuttleworth",
    title: "Mission Specialist ",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 2,
    image: (
      <Image
        src={victor}
        alt="Victor Glover"
        objectFit="contain"
        layout="fill"
      />
    ),
    name: "Victor Glover",
    title: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    id: 3,
    image: (
      <Image
        src={anousheh}
        alt="Anousheh Ansari"
        objectFit="contain"
        layout="fill"
        height={223}
        width={226.15}
      />
    ),
    name: "Anousheh Ansari",
    title: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
const Crew: NextPage = () => {
  const [selectedCrewMember, setSelectedCrewMemeber] = useState(crew[0]);

  return (
    <div className="relative min-h-screen bg-primary">
      <Head>
        <title>Crew</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover">
        <Image
          src={backgroundCrew}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center-top"
        />
      </div>
      <Navigation>
        <div className="flex flex-col items-center justify-between md:grid md:grid-cols-1 xl:grid xl:grid-cols-2 xl:gap-x-[157px] xl:gap-y-16 xl:max-w-[1110.5px] xl:mx-auto">
          <div className="flex md:w-full md:pl-10 md:mt-9 xl:col-span-2 xl:-ml-10 xl:mt-20">
            <span className="font-barlow-condensed tracking-[2.7px] leading-[19.2px] font-bold text-white opacity-25 md:text-[20px] md:leading-6 md:tracking-[3.38px] xl:text-3xl xl:leading-8 xl:tracking-[4.72px]">
              02
            </span>
            <p className="ml-5 leading-[19.2px] tracking-[2.7px] text-white font-barlow-condensed md:text-[20px] md:leading-6 md:tracking-[3.38px] xl:text-3xl xl:leading-8 xl:tracking-[4.72px]">
              MEET YOUR CREW
            </p>
          </div>
          <div className="relative w-[327px] h-[223px] border-b-2 border-quaternary mt-8 md:mx-auto md:border-none md:w-[456px] md:min-h-[572px] md:mt-[60px]  xl:place-self-end xl:w-[568px] xl:min-h-[712px] xl:row-span-2">
            <div className="relative w-[177.12px] h-[222px] mx-auto md:w-full md:h-full">
              {selectedCrewMember.image}
            </div>
          </div>
          <div className="mt-7 xl:max-w-[445px] md:row-start-2 md:grid md:grid-cols-1 md:mx-auto xl:row-start-2 xl:row-span-2">
            <div className="flex items-center justify-center xl:justify-start md:row-start-2">
              <ul className="flex items-center justify-between space-x-4 md:space-x-4 font-barlow-condensed text-sm tracking-[2.36px] leading-[17px] text-white md:tracking-[2.7px] md:leading-[19.2px] md:text-base md:mt-10 xl:mt-30">
                {crew.map((member, index) => (
                  <li key={index}>
                    <button onClick={() => setSelectedCrewMemeber(crew[index])}>
                      <div
                        className={`pb-2 mx-auto w-2 h-2 rounded-full xl:w-4 xl:h-4 xl:mt-30 ${
                          selectedCrewMember.id === index
                            ? "bg-white"
                            : "bg-white/20"
                        }`}
                      ></div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 md:mt-8 md:max-w-xl xl:mt-16">
              <div className="text-center xl:text-left">
                <p className="uppercase font-bellefair text-base leading-[18px] text-white/50 md:text-2xl md:leading-7 xl:text-4xl xl:leading-9">
                  {selectedCrewMember.title}
                </p>
                <p className="font-bellefair text-2xl leading-7 mt-2 text-white uppercase md:text-[40px] md:leading-[46px] md:mt-2 xl:mt-4 xl:text-[56px] xl:leading-[64px] xl:whitespace-nowrap">
                  {selectedCrewMember.name}
                </p>
                <p className="leading-6 font-barlow text-[15px] mt-4 text-secondary md:text-base md:leading-[28px] md:mt-4 xl:text-lg xl:leading-8">
                  {selectedCrewMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
};

export default Crew;
