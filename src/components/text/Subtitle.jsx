import { twMerge } from "tailwind-merge";

function Subtitle(props) {
  return (
    <div
      className={twMerge(
        "py-2 px-4 text-sm font-extralight text-opacity-80 bg-opacity-50 rounded-xl border border-opacity-25 text-zinc-500 bg-zinc-800 border-zinc-600",
        props.className,
      )}
    >
      {props.text}
    </div>
  );
}

export default Subtitle;
