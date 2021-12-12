import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Navigation from "../components/navigation";
import moon from "../public/images/moon.svg";
import europa from "../public/images/europa.svg";
import mars from "../public/images/mars.svg";
import titan from "../public/images/titan.svg";
import backgroundDestination from "../public/images/background-destination.svg";

const destinations = [
  {
    id: 0,
    image: (
      <Image
        src={moon}
        alt="moon"
        objectFit="cover"
        height="1334"
        width="1334"
      />
    ),
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 days",
  },
  {
    id: 1,
    image: (
      <Image
        src={mars}
        alt="mars"
        objectFit="fill"
        height="1334"
        width="1334"
      />
    ),
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    id: 2,
    image: (
      <Image
        src={europa}
        alt="europa"
        objectFit="fill"
        height="1334"
        width="1334"
      />
    ),
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    id: 3,
    image: (
      <Image
        src={titan}
        alt="titan"
        objectFit="fill"
        height="1334"
        width="1334"
      />
    ),
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
  },
];
const Destination: NextPage = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  return (
    <div className="relative min-h-screen bg-primary">
      <Head>
        <title>Destination</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover">
        <Image
          src={backgroundDestination}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center-top"
        />
      </div>
      <Navigation>
        <div className="flex flex-col items-center justify-between md:pl-10 xl:grid xl:grid-cols-2 xl:gap-x-[157px] xl:gap-y-16 xl:max-w-[1110.5px] xl:mx-auto">
          <div className="flex md:w-full md:mt-9 xl:col-span-2 xl:-ml-10">
            <span className="font-barlow-condensed tracking-[2.7px] leading-[19.2px] font-bold text-white opacity-25 md:text-[20px] md:leading-6 md:tracking-[3.38px]">
              01
            </span>
            <p className="ml-5 leading-[19.2px] tracking-[2.7px] text-white font-barlow-condensed md:text-[20px] md:leading-6 md:tracking-[3.38px]">
              PICK YOUR DESTINATION
            </p>
          </div>
          <div className="relative mt-8 w-[170px] md:mt-[60px] md:w-[300px] md:aspect-square xl:place-self-end">
            {selectedDestination.image}
          </div>
          <div className="mt-7 xl:max-w-[445px]">
            <div className="flex items-center justify-center xl:justify-start">
              <ul className="flex items-center justify-between space-x-7 md:space-x-9 font-barlow-condensed text-sm tracking-[2.36px] leading-[17px] text-white md:tracking-[2.7px] md:leading-[19.2px] md:text-base">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        setSelectedDestination(destinations[index])
                      }
                    >
                      <div
                        className={`pb-2 mx-auto ${
                          selectedDestination.id === index
                            ? "border-b-2 border-white"
                            : ""
                        }`}
                      >
                        <span>{destination.name}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 md:mt-8 md:max-w-xl">
              <div className="text-center xl:text-left">
                <p className="font-bellefair text-[56px] leading-[64px] text-white md:text-[80px] md:leading-[92px]">
                  {selectedDestination.name}
                </p>
                <p className="leading-6 font-barlow md:text-base md:leading-[28px]">
                  {selectedDestination.description}
                </p>
              </div>
              {/* Divider */}
              <div className="bg-tertiary h-[1px] w-full mt-8 md:mt-12"></div>
              {/* Divider end */}
              <div className="mt-8 md:flex md:items-center md:justify-around md:mt-7 xl:justify-start xl:gap-20">
                <div className="text-center xl:text-left">
                  <p className="font-barlow-condensed text-sm leading-4 tracking-[2.36px]">
                    AVG. DISTANCE
                  </p>
                  <p className="mt-3 text-3xl leading-8 uppercase font-bellefair">
                    {selectedDestination.distance}
                  </p>
                </div>
                <div className="mt-8 text-center md:mt-0 xl:text-left">
                  <p className="font-barlow-condensed text-sm leading-4 tracking-[2.36px]">
                    EST. TRAVEL TIME
                  </p>
                  <p className="mt-3 text-3xl leading-8 uppercase font-bellefair">
                    {selectedDestination.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
};

export default Destination;
