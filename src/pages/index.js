import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Socials from "../pages/components/socials";
import dumbun from "../../public/vamshikrishna.png";
import TimeLine from "./components/timeline";
import PreviousWebPageHolder from "../pages/components/perviousWebPageHolder";
import PreviousMobileDevHolder from "../pages/components/previousMobileDevHolder";
import react from "react";
import { previousMobileDevelopmentWorks, previousWebDevelopmentWorks } from "../apis/previousWorks";
import ServicesSection from "./components/servives";

export default function Home() {
  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1BE9PHaQ-VBFAj45oAPkAs2OEdTNzCDww/";
    link.download = "vamshi-krishna-resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [darkMode, setDarkMode] = react.useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kamsali Vamshi Krishna</title>
        <meta
          name="description"
          content="Hello there! my name is vamshi krishna, I'm a developer and a MSC computing student in Edinburgh Napier University"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">KVS</h1>
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
                <button
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                  onClick={onButtonClick}
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              <span>Kamsali Vamshi Krishna</span>
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
              alt="kamsali vamshi krishna"
              src={dumbun}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <TimeLine />
        <ServicesSection />
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
            {previousMobileDevelopmentWorks.map((e) => (
              <PreviousMobileDevHolder key={e.link} link={e.link} src={e.src} />
            ))}
          </div>
          <h3 className="py-4 text-3xl text-teal-600 mx-auto mb-0">
            Web Applications:-
          </h3>
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
            {previousWebDevelopmentWorks.map((e) => (
              <PreviousWebPageHolder key={e} src={e.src} link={e.link} />
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-teal-600  mx-auto flex justify-between">
        <h2 className="mx-auto py-2 text-white font-medium md:text-lg">
          © 2023 kamsali vamshi krishna @ kamsalivamshikrishna.com
        </h2>
      </footer>
    </div>
  );
}
