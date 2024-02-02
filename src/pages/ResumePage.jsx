import { Heading, Paragraph, Subtitle } from "../components/text";
import { Navbar } from "../components/nav";
import { CustomButton } from "../components/buttons";

function ResumePage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="">
        <Navbar />
      </div>
      <section className="flex flex-col items-center pr-8 w-full md:pl-10 lg:justify-center lg:items-center lg:pt-20">
        <Heading
          text={"Why am I fit to be your boyfriend?"}
          className={
            "md:h-[130px] text-left pl-10 md:pl-10 sm:pl-5 font-bold lg:text-7xl md:text-6xl sm:text-5xl text-3xl bg-gradient-to-br from-purple-400 to-orange-400 bg-clip-text text-transparent"
          }
        />
      </section>
      <section className="flex flex-col gap-4 px-10 pt-5 pb-10 md:px-20 md:pt-10 lg:px-80 lg:pt-0">
        <Paragraph className="font-light text-justify">
          You told me you love me and I have to take responsibility for that
          because I love you too. Since both of us are ready to commit to each
          other, I want to be able to ask you this officially in my own nerdy
          way. In order to be able to convince you, please refer to the
          following text.
        </Paragraph>
        <Heading text={"Why am I in love with you?"} className="font-medium" />
        <Subtitle
          text={
            "Reasons why you make me so weak in the knees I can hardly speak"
          }
        />
        <div className="px-5">
          <Heading text="Physical" className="text-xl font-light" />
          <ul className="px-5 pr-0 list-disc text-white md:px-10">
            <li>
              Your eyes are so pretty. I love it when you look into my eyes
              because it makes me melt.
            </li>
            <li>
              Your lips are small yet so plump and soft which makes me go crazy!
            </li>
            <li>
              Your body is perfect especially your hands, your waist, your butt,
              your thighs, just about everything about you.
            </li>
            <li>
              Your smell is very addicting. It&apos;s like those candles that
              makes you very calm and relaxed.
            </li>
            <li>
              Your voice which is very cute but at the same time very hot. At
              times, it turns me on and at other times it calms me down. When
              you laugh, it&apos;s the most perfect music (along with your
              moans).
            </li>
            <li>
              Your smile. That perfect smile always makes me realize why I truly
              am in love with you.
            </li>
          </ul>
          <br />
          <Heading text="Emotional" className="text-xl font-light" />
          <ul className="px-5 pr-0 list-disc text-white md:px-10">
            <li>
              That easily annoyed personality of yours is so cute. It gives me
              this urge to annoy you all the time.
            </li>
            <li>
              Your weirdness is very inline with mine and it is the most
              comforting thing.
            </li>
            <li>
              Sometimes clingy. I love when you tell me that you miss me or when
              you tell me you love me. It makes me feel so loved.
            </li>
            <li>
              That drive of yours to give your mom the best ever life. It
              allowed me to see your values and it made me want to support and
              help you with everything.
            </li>
            <li>
              The sleepy and lazy part of you is so cute. It makes me want to
              take care of you.
            </li>
            <li>
              Freaky and horny most of the time. I love that to be honest, it
              makes me feel wanted. The fact that you go along with my kinks and
              stuff and the fact that you can make me go crazy for you is
              amazing.
            </li>
            <li>Your sense of humor. I am charmed by it.</li>
            <li>Your mean side. I get turned on by it.</li>
          </ul>
        </div>
        <Heading text={"Why should you accept me?"} className="font-medium" />
        <Paragraph className="font-light">
          I am confident in making your happy. I am confident that I can give
          provide at least a life that you would be satisfied with. I will
          support you in everything you do and I will help you with all of your
          problems and I believe that I can satisfy your needs both in bed and
          emotionally.
        </Paragraph>
        <Paragraph className="font-light">
          I may not be the best guy but I want to become someone better for you
          (Generic, I know but it is really how I feel). I know that, lately, I
          haven&apos;t been as good as before but I want to become better. I
          love you very much and I hope that you can accept me.
        </Paragraph>
        <CustomButton
          className="bg-purple-800"
          text={"Back"}
          path={"/confirmation"}
        />
      </section>
    </div>
  );
}

export default ResumePage;
