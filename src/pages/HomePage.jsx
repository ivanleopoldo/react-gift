import { useState } from "react";
import { RenderCat } from "../components/cat";
import { Heading } from "../components/text";
import { RunAwayButton } from "../components/buttons";

function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex overscroll-none flex-col w-screen h-screen">
      <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
        <Heading text="can i be ur boyfriend?" />
        <div className="flex p-8 w-52 h-52 rounded-xl border-2 border-opacity-25 sm:p-4 md:p-8 lg:p-8 bg-zinc-800 bg-opacity-15 border-zinc-800">
          <RenderCat n={count} />
        </div>
        <div className="flex justify-center md:w-1/3 lg:w-1/6 sm:1/2">
          <RunAwayButton n={count} callback={setCount} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
