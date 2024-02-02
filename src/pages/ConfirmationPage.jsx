import { Heading, Subtitle } from "../components/text";
import { CustomButton } from "../components/buttons";

function ConfirmationPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Heading text="Are you sure?" />
            <Subtitle text="Once accepted there is no turning back" />
          </div>
          <div className="flex gap-2 justify-end w-full">
            <CustomButton
              text="Not Sure"
              className="border-2 border-opacity-20 bg-zinc-800 text-zinc-600 border-zinc-600"
              path="/resume"
            />
            <CustomButton text="NO" className="bg-red-500" path="/" />
            <CustomButton text="YES" className="bg-green-600" path="/landing" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
