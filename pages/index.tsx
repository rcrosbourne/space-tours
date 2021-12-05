import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import backgroundImage from "../public/images/background-home.png";
const Home: NextPage = () => {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Image src={backgroundImage} alt="" layout="fill" objectFit="cover" />
      <div className="p-4 z-auto text-white relative">
        <div className="flex items-center justify-between">
          <svg viewBox="0 0 40 40" fill="currentColor" className="h-10 w-10">
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z"
              fill="#0B0D17"
            />
          </svg>
          <svg className="w-6 h-6" viewBox="0 0 24 21" fill="currentColor">
            <rect width="24" height="3" fill="#D0D6F9" />
            <rect y="9" width="24" height="3" fill="#D0D6F9" />
            <rect y="18" width="24" height="3" fill="#D0D6F9" />
          </svg>
        </div>
        <div className="mt-12 text-center">
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
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back and relax because we'll give you a truly out of
              this world experience!
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
      <div className="absolute top-0 right-0 w-64 h-screen backdrop-filter backdrop-blur-3xl firefox:bg-primary firefox:opacity-90">
        <h2 className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          soluta porro! Distinctio tempora totam hic ut, laboriosam voluptatum
          repellendus. Itaque inventore aspernatur ipsam officia dolores porro
          suscipit esse rem earum.
        </h2>
      </div>
    </div>
  );
};

export default Home;
