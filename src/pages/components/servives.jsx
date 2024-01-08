
import Image from "next/image";
import code from "../../../public/code.png";
import consulting from "../../../public/consulting.png";
import design from "../../../public/design.png";

export default function ServicesSection() {
  return (
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
            alt="kamsali vamshi krishna"
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
            alt="kamsali vamshi krishna"
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
            alt="kamsali vamshi krishna"
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
  );
}
