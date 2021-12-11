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
    image: <Image src={moon} alt="moon" />,
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 days",
  },
  {
    id: 1,
    image: <Image src={mars} alt="mars" />,
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    id: 2,
    image: <Image src={europa} alt="europa" />,
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    id: 3,
    image: <Image src={titan} alt="titan" />,
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
      <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover xl:hidden">
        <Image
          src={backgroundDestination}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center-top"
        />
      </div>
      <Navigation>
        <div className="flex flex-col items-center justify-between xl:flex-row xl:items-end xl:max-w-[1500px] xl:mx-auto xl:ml-[165px] xl:mt-[251px] xl:mr-[165px]">
          <div className="flex mt-6">
            <span className="font-barlow-condensed tracking-[2.7px] leading-[19.2px] font-bold text-white opacity-25">
              01
            </span>
            <p className="ml-5 leading-[19.2px] tracking-[2.7px] text-white font-barlow-condensed">
              PICK YOUR DESTINATION
            </p>
          </div>
          <div className="mt-8">{selectedDestination.image}</div>
          <div className="mt-7">
            <ul className="flex items-center justify-between space-x-7 font-barlow-condensed text-sm tracking-[2.36px] leading-[17px] text-white">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelectedDestination(destinations[index])}
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
          <div className="mt-5">
            <div className="text-center after:bg-tertiary">
              <p className="font-bellefair text-[56px] leading-[64px] text-white">
                {selectedDestination.name}
              </p>
              <p className="leading-6 font-barlow ">
                {selectedDestination.description}
              </p>
            </div>
            {/* Divider */}
            <div className="bg-tertiary h-[1px] w-full mt-8"></div>
            {/* Divider end */}
            <div className="mt-8 text-center">
              <p className="font-barlow-condensed text-sm leading-4 tracking-[2.36px]">
                AVG. DISTANCE
              </p>
              <p className="mt-3 text-3xl leading-8 uppercase font-bellefair">
                {selectedDestination.distance}
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="font-barlow-condensed text-sm leading-4 tracking-[2.36px]">
                EST. TRAVEL TIME
              </p>
              <p className="mt-3 text-3xl leading-8 uppercase font-bellefair">
                {selectedDestination.time}
              </p>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
};

export default Destination;
