import Image from "next/image";
import { RxNotionLogo } from "react-icons/rx";
import ept from "../../../public/ept.svg";
import dd from "../../../public/divinduty.svg";
import LatestTag from "./latestTag";
import SmallCalenderIcon from "./smallCalenderIcon";
import BlinkingDate from "./blinkingDate";
import SimpleDate from "./simpleDate";

export default function TimeLine() {
  return (
    <section>
      <div id="timeline" className="py-10">
        <h3 className="text-3xl py-10 dark:text-white text-teal-600  ">
          Experience
        </h3>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <SmallCalenderIcon />
            <h3 className="flex items-center mb-1  text-lg font-semibold text-gray-900 dark:text-white">
              Self-Finance Application <LatestTag />
            </h3>
            <BlinkingDate />
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <i>
                self-finance application is a mobile application which is secure
                offline user friendly to the shop keeper or small finance
                companies owners to store there customer data with mobile
                friendly application and help them to calculate their monthly
                interest with out any hassle and see the data whenever required.
              </i>
            </p>
            <a
              href="https://ebony-wholesaler-6b8.notion.site/Self-finance-app-dd8b4092b35e408fa4538713b4361a6d"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <RxNotionLogo className="w-3.5 h-3.5 mr-2.5" /> Notion
            </a>
            <a
              href="https://github.com/dumbun/Self-Fiance/archive/refs/heads/main.zip"
              className="ml-3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-3.5 h-3.5 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download ZIP
            </a>
          </li>
          <li className="mb-10 ml-6">
            <SmallCalenderIcon />
            <h3 className="flex items-center mb-1  text-lg font-semibold text-gray-900 dark:text-white">
              <span>
                <a href="https://www.linkedin.com/company/redparrottechnology/">
                  Redparrot Technology
                </a>
              </span>
            </h3>
            <SimpleDate content="started on May 5th, 2023 - Present" />
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Flutter Developer at Banglore ~ Remote
              <ol>
                <li>
                  <i>
                    I have gained valuable experience as a Flutter developer
                    since May 5th. During my time there, I worked on both the
                    front-end and back-end development of various projects. I
                    actively contributed to the development of two live andriod
                    applications, namely{" "}
                    <strong className="text-teal-600">
                      EPT School Managemen
                    </strong>{" "}
                    and <strong className="text-teal-600">Divine Duty</strong> ,
                    which are currently available on the Play Store.
                  </i>
                </li>
              </ol>
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=guru.ept.mobile&hl=en_IN&gl=US"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <ol>
                <Image
                  className="mx-auto mb-2 mr-2"
                  src={ept}
                  height={40}
                  width={40}
                  alt="Vamshi Krishna ept"
                />
                <p className="my-auto ">Try out !</p>
              </ol>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=global.redparrot.divineduty"
              className="ml-3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <ol>
                <Image
                  className="mx-auto mb-2 "
                  src={dd}
                  height={40}
                  width={40}
                  alt="Vamshi Krishna ept"
                />
                Try out !
              </ol>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
