import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Socials from "../pages/components/socials";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";
import dumbun from "../../public/vamshikrishna.png";
import TimeLine from "./components/timeline";
import PreviousWebPageHolder from "../pages/components/perviousWebPageHolder";
import PreviousMobileDevHolder from "../pages/components/previousMobileDevHolder";
import react from "react";
import * as links from "../links";
export default function Home() {
  const [darkMode, setDarkMode] = react.useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Vamshi Krishna</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">DUMBUN</h1>
            <ul className="flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                  href="https://drive.google.com/file/d/1fG19s3FCfzLB2ebq3gbChDnklF4r0n-d/view?usp=share_link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              <span> K Vamshi Krishna</span>
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Web and Mobile Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
              Im a Creator, and Technology Enthusiast. I ❤️ cofee and playing
              video games.
            </p>
          </div>
          <Socials />
          <div className=" relative bg-gradient-to-b rounded-full w-80 h-80 mt-20 mx-auto from-teal-500 overflow-hidden md:h-96 md:w-96">
            <Image
              alt="Vamshi Krishna"
              src={dumbun}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <TimeLine />
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 mb-10 dark:text-gray-500">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500">
                <strong> customers</strong>
              </span>{" "}
              and collaborated with{" "}
              <span className="text-teal-500">
                <strong>talented people</strong>
              </span>{" "}
              to create digital products for customer use.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className=" text-center mb-10 shadow-2xl p10 rounded-xl flex-1 dark:lg:shadow-white ">
              <Image
                alt="Vamshi Krishna"
                src={design}
                width={100}
                height={100}
                className="mx-auto pt-5"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-500">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Languages I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-500">HTML/Css</p>
              <p className="text-gray-800 py-1 dark:text-gray-500">
                JavaScript
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-500">Flutter</p>
              <p className="text-gray-800 py-1 pb-2 dark:text-gray-500">
                React Native
              </p>
            </div>
            <div className="text-center mb-10 shadow-2xl p10 rounded-xl flex-1 dark:lg:shadow-white">
              <Image
                alt="Vamshi Krishna"
                src={code}
                width={100}
                height={100}
                className="mx-auto pt-5"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Code
              </h3>
              <p className="py-2 dark:text-gray-500">
                I enjoy creating, thinking and technology and learning new
                technologies. I enjoying pursuing more creative endeavours like
                photography, video editing, digital arts.
              </p>
            </div>
            <div className="text-center mb-10 shadow-2xl p10 rounded-xl flex-1 dark:lg:shadow-white">
              <Image
                alt="Vamshi Krishna"
                src={consulting}
                width={100}
                height={100}
                className="mx-auto pt-5"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  dark:text-white">
                Creating
              </h3>
              <p className="py-2 dark:text-gray-500">
                Outside of work I love creating, primarily through the mediums
                of videos, web pages. I use my Instagram as a medium of share
                all my digita art.
              </p>
              <h4 className="py-4 text-teal-600 ">Tools I Use</h4>
              <h4 className="text-gray-800 py-1 dark:text-gray-500">
                After Effects
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-500">ProCreate</p>
              <p className="text-gray-800 py-1 dark:text-gray-500">Adobe PP</p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex m-10 mb-0">
            <h4 className="py-4 text-3xl text-teal-600 mx-auto mb-0 font-bold">
              Previous Works
            </h4>
          </div>
          <h3 className="py-4 text-3xl text-teal-600 mx-auto mb-0">
            Mobile Applications:-
          </h3>
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap ">
            {links.previousMobileDevelopmentWorks.map((e) => (
              <PreviousMobileDevHolder key={e.link} link={e.link} src={e.src} />
            ))}
          </div>
          <h3 className="py-4 text-3xl text-teal-600 mx-auto mb-0">
            Web Applications:-
          </h3>
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
            {links.previousWebDevelopmentWorks.map((e) => (
              <PreviousWebPageHolder key={e} src={e.src} link={e.link} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-teal-600  mx-auto flex justify-between">
        <h2 className="mx-auto py-2 text-white font-medium md:text-lg">
          © 2023 Vamshi Krishna.K @ dumbun.xyz
        </h2>
      </footer>
    </div>
  );
}
