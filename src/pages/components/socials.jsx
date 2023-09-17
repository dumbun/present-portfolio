import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

export default function Socials() {
  return (
    <div className="flex-wrap text-5xl flex justify-center py-3 text-gray-600 gap-16">
      <a className="" href="mailto: vamshikrishna8289@gmail.com">
        <AiFillMail className="cursor-pointer dark:text-teal-800" />
      </a>
      <a className="" href="https://www.instagram.com/iam.vamshikrishna/">
        <AiFillInstagram className="cursor-pointer dark:text-teal-800" />
      </a>
      <a
        className=""
        href="https://www.linkedin.com/in/vamshi-krishna-kamsali-b38709155/"
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
  );
}
