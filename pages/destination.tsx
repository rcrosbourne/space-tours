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
const Destination: NextPage = () => {
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
          <div className="mt-8">
            <Image src={moon} alt="moon" />
          </div>
          <div className="mt-7">
            <ul className="flex items-center justify-between space-x-7 font-barlow-condensed text-sm tracking-[2.36px] leading-[17px] text-white">
              <li>
                <div className="pb-2 mx-auto border-b-2 border-white">
                  <span>MOON</span>
                </div>
              </li>
              <li>
                <div className="pb-2 mx-auto border-b-2 border-white">
                  <span>MARS</span>
                </div>
              </li>
              <li>
                <div className="pb-2 mx-auto border-b-2 border-white">
                  <span>EUROPA</span>
                </div>
              </li>
              <li>
                <div className="pb-2 mx-auto border-b-2 border-white">
                  <span>TITAN</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="text-center after:bg-tertiary">
              <p className="font-bellefair text-[56px] leading-[64px] text-white">
                MOON
              </p>
              <p className="leading-6 font-barlow">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
            {/* Divider */}
            <div className="bg-tertiary h-[1px] w-full mt-8"></div>
            {/* Divider end */}
            <div className="mt-8 text-center">
              <p className="font-barlow-condensed text-sm leading-4 tracking-[2.36px]">
                AVG. DISTANCE
              </p>
              <p className="mt-3 text-3xl leading-8 font-bellefair">
                384,400 KM
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="font-barlow-condensed text-sm leading-4 tracking-[2.36px]">
                EST. TRAVEL TIME
              </p>
              <p className="mt-3 text-3xl leading-8 font-bellefair">3 DAYS</p>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
};

export default Destination;
