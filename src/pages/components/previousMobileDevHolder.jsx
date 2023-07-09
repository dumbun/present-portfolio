export default function PreviousMobileDevHolder(props) {
  return (
    <div className="basis-1/5 flex-1 ">
      <a href={props.link}>
        <video height={500} muted loop autoPlay src={props.src}></video>
      </a>
    </div>
  );
}
