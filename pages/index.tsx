import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import backgroundImage from "../public/images/background-home.svg";
import backgroundImageLg from "../public/images/background-home-lg.svg";
import Navigation from "../components/navigation";

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-primary">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover xl:hidden">
        <Image
          src={backgroundImage}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center-top"
        />
      </div>
      <div className="absolute top-0 left-0 hidden w-full h-full bg-center bg-no-repeat bg-cover xl:block">
        <Image
          src={backgroundImageLg}
          alt="background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <Navigation>
        <div className="flex flex-col items-center justify-between xl:flex-row xl:items-end xl:max-w-[1500px] xl:mx-auto xl:ml-[165px] xl:mt-[251px] xl:mr-[165px]">
          <div className="mt-12 md:mt-24 md:max-w-[450px] md:mx-auto text-center xl:text-left">
            <div>
              <p className="font-barlow-condensed text-secondary leading-5 tracking-[2.7px] font-light xl:text-[28px]">
                SO, YOU WANT TO TRAVEL TO
              </p>
              <p className="font-bellefair text-[80px] leading-[100px] mt-4 xl:text-[150px] xl:leading-[171.9px] xl:mt-6">
                SPACE
              </p>
            </div>
            <div className="">
              <p className="font-barlow font-light text-center text-[15px] leading-[25px] text-secondary tracking-wide xl:text-[18px] xl:leading-[32px] xl:text-left xl:mt-6">
                Let&apos;s face it; if you want to go to space, you might as
                well genuinely go to outer space and not hover kind of on the
                edge of it. Well sit back and relax because we&apos;ll give you
                a truly out of this world experience!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-20">
            <div className="bg-white flex items-center justify-center w-[150px] h-[150px] rounded-full text-center xl:w-[274px] xl:h-[274px] xl:ml-auto">
              <p className="font-bellefair text-primary text-xl leading-6 tracking-[1.25px] xl:text-[32px] xl:tracking-[2px] xl:leading-[36.67]">
                EXPLORE
              </p>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
};

export default Home;
