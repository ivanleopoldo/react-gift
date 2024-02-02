import { twMerge } from "tailwind-merge";

function Paragraph(props) {
  return (
    <div
      className={twMerge("text-justify text-white indent-20", props.className)}
    >
      {props.children}
    </div>
  );
}

export default Paragraph;
