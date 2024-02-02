import { Heading } from "../components/text";
import { SadCat } from "../components/cat";
import { CustomButton } from "../components/buttons";
import { Navbar } from "../components/nav";

function ErrorPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col gap-4">
        <Heading
          text="ERROR: 404"
          className="text-4xl font-bold text-red-500"
        />
        <SadCat />
        <CustomButton
          text="Back"
          className="text-white text-opacity-50 bg-opacity-40 border-2 border-opacity-5 bg-zinc-800 border-zinc-400"
          path="/"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
