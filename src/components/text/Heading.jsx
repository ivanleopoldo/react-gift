import { twMerge } from "tailwind-merge";

function Heading(props) {
  return (
    <div className={twMerge("font-black text-2xl text-white", props.className)}>
      {props.text}
    </div>
  );
}

export default Heading;
