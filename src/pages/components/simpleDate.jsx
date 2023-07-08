export default function SimpleDate(props) {
  return (
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {props.content}
    </time>
  );
}
