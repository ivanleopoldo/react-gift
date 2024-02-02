import { Type, Heading, Paragraph } from "../components/text";
import { twMerge } from "tailwind-merge";

function LandingPage() {
  const texts = [
    "To making more memories with you <3",
    "Remember that I love you.",
    "Please study more.",
    "Goodluck in everything.",
    "I'll always support you.",
    "I might not be perfect but I'm giving my best to get better for you.",
    "I miss you.",
    "I love you.",
  ];
  const sizeVariants = {
    "1x1": "col-span-1 row-span-1",
    "1x2": "col-span-1 row-span-2",
    "2x1": "col-span-2 row-span-2 md:col-span-2 md:row-span-1",
    "2x2": "col-span-3 row-span-2 md:col-span-2 md:row-span-2",
    "2x3": "col-span-2 row-span-3 md:col-span-2 md:row-span-3",
    "3x1": "col-span-3 row-span-1",
  };

  const GridItem = ({ size, className, children }) => {
    return (
      <div
        className={twMerge(
          `${sizeVariants[size]} justify-center items-center rounded-xl lg:p-10 md:p-10 lg:bg-zinc-800 md:bg-zinc-800 h-full w-full flex overflow-hidden`,
          className,
        )}
      >
        <div className="flex w-full h-full">{children}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex-1 justify-center items-center p-8 w-full h-full">
        <div className="grid grid-cols-3 gap-4 w-full h-full md:grid-cols-4 md:grid-rows-5 md:gap-6 lg:grid-cols-4 lg:gap-10 auto-rows-[76px]">
          <GridItem className="justify-start items-start" size={"2x2"}>
            <Type
              headerText={"Dear Hiza, "}
              body={texts}
              delay={1}
              headerCustomCSS={"font-bold"}
              bodyCustomCSS={"font-light"}
            />
          </GridItem>
          <GridItem size={"2x3"}>
            <img
              src={"/assets/IMG_3146.JPG"}
              className="object-cover w-auto max-w-full h-auto max-h-full rounded-xl"
            />
          </GridItem>
          <GridItem size={"1x1"}>
            <img
              src={"/assets/IMG_2577.JPG"}
              className="object-cover w-auto max-w-full h-auto max-h-full rounded-xl"
            />
          </GridItem>
          <GridItem size={"1x2"}>
            <img
              src={"/assets/IMG_1103.JPG"}
              className="object-cover w-auto max-w-full h-auto max-h-full rounded-xl"
            />
          </GridItem>
          <GridItem size={"1x2"}>
            <img
              src={"/assets/IMG_2361.JPG"}
              className="object-cover w-auto max-w-full h-auto max-h-full rounded-xl"
            />
          </GridItem>
          <GridItem size={"2x1"}>
            <img
              src={"/assets/IMG_1307.JPG"}
              className="object-cover w-auto max-w-full h-auto max-h-full rounded-xl"
            />
          </GridItem>
          <GridItem size={"3x1"} className="py-2 px-5 bg-zinc-800">
            <Heading
              text={"We need more pictures!"}
              className="text-transparent bg-clip-text bg-transparent bg-gradient-to-l from-orange-400 to-purple-400"
            />
          </GridItem>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
