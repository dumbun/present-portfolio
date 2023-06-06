import Head from "next/head";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import blogSite from "../../public/blog-site.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";
import oldTerminalSite from "../../public/old-terminal-site.png";
import PreviousSiteGif from "../../public/previousSite.gif";
import dumbun from "../../public/vamshikrishna.png";
import pinterest from "../../public/pinterest-clone.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import web7 from "../../public/web7.png";
import web8 from "../../public/web8.png";
import web9 from "../../public/web9.png";

import react from "react";

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
              K Vamshi Krishna
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Web and Mobile Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
              Im a Creator, and Technology Enthusiast. I ❤️ cofee and playing
              video games.
            </p>
          </div>
          <div className="flex-wrap text-5xl flex justify-center py-3 text-gray-600 gap-16">
            <a className="" href="mailto: vamshikrishna8289@gmail.com">
              <AiFillMail className="cursor-pointer dark:text-teal-800" />
            </a>
            <a className="" href="https://www.instagram.com/iam.vamshikrishna/">
              <AiFillInstagram className="cursor-pointer dark:text-teal-800" />
            </a>
            <a
              className=""
              href="https://www.linkedin.com/in/vamshi-krishna-k-b38709155/"
            >
              <AiFillLinkedin className="cursor-pointer dark:text-teal-800" />
            </a>
            <a className="" href="https://github.com/dumbun">
              <AiFillGithub className="cursor-pointer dark:text-teal-800" />
            </a>
            <a
              className=""
              href="https://developers.google.com/profile/u/vamshikrishna2000"
            >
              <AiFillGoogleCircle className="cursor-pointer dark:text-teal-800" />
            </a>
          </div>
          <div className="relative bg-gradient-to-b rounded-full w-80 h-80 mt-20 mx-auto from-teal-500 overflow-hidden md:h-96 md:w-96">
            <Image
              alt="Vamshi Krishna"
              src={dumbun}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

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
                className="mx-auto"
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
                className="mx-auto"
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
                className="mx-auto"
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
            <div className="basis-1/5 flex-1 ">
              <a href="https://github.com/dumbun/In-Touch-Messenger">
                <video
                  height={300}
                  src="https://user-images.githubusercontent.com/113350510/235297331-2d0205ce-de7c-4623-ab5f-943a069cbd97.webm"
                  autoPlay
                  loop
                  muted
                ></video>
              </a>
            </div>
            <div className="basis-1/5 flex-1 ">
              <a href="https://github.com/dumbun/sign-up-page-flutter">
                <video
                  height={500}
                  muted
                  loop
                  autoPlay
                  src="https://user-images.githubusercontent.com/113350510/235296044-f06a0186-3870-414e-87a2-bedf3f3f2db2.webm"
                ></video>
              </a>
            </div>
            <div className="basis-1/5 flex-1 ">
              <a href="https://github.com/dumbun/Personal-Expenses">
                <video
                  height={500}
                  muted
                  loop
                  autoPlay
                  src="https://user-images.githubusercontent.com/113350510/235297032-06109659-8ec1-45ba-988b-3fd95efade6f.webm"
                ></video>
              </a>
            </div>
          </div>
          <h3 className="py-4 text-3xl text-teal-600 mx-auto mb-0">
            Web Applications:-
          </h3>
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 ">
              <a href="https://dumbun.github.io/tindog/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/Random-Dicee/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/Drum-Kit/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/Rem-Px-Calculator/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/rock-paper-scissors/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/SIMON-Game/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/first_portfolio/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={PreviousSiteGif}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/stop-watch/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web7}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/Tip-Calculator/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web8}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/weather-app/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web9}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://dumbun.github.io/old-site/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={oldTerminalSite}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1">
              <a href="https://bright-lamb-tux.cyclic.app/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={blogSite}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1 ">
              <a href="https://pinterest-clone-fawn.vercel.app/">
                <Image
                  alt="Vamshi Krishna"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={pinterest}
                />
              </a>
            </div>
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
