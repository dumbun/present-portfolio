import Image from "next/image";

export default function previousWebPageHolder(props) {
  return (
    <div className="basis-1/4 flex-1">
      <a href={props.link}>
        <Image
          alt="Vamshi Krishna"
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={props.src}
        />
      </a>
    </div>
  );
}
