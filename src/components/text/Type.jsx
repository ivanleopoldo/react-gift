import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

function CursorBlinker(props) {
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={twMerge(
        "inline-block mx-1 h-6 w-[2px] translate-y-1 bg-white",
        props.color,
      )}
    />
  );
}

function Type(props) {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    props.headerText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, props.headerText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
      delay: props.delay,
      onComplete: () => {
        setDone(true);
      },
    });

    return controls.stop;
  }, [count, props.delay, props.headerText.length]);

  return (
    <span
      className={twMerge(
        "text-xl lg:text-2xl md:text-2xl font-bold text-white inline",
        props.headerCustomCSS,
      )}
    >
      <motion.span style={{ fontFamily: "monospace" }}>
        {displayText}
      </motion.span>
      {done && (
        <>
          <br />
          <br />
        </>
      )}
      <TypeList
        texts={props.body}
        delay={props.delay + 1}
        bodyCustomCSS={props.bodyCustomCSS}
      />
      <CursorBlinker />
    </span>
  );
}

function TypeList(props) {
  const index = useMotionValue(0);

  const baseText = useTransform(index, (latest) => props.texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 2,
      ease: "easeIn",
      delay: props.delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (index.get() === props.texts.length - 1) {
            index.set(0);
          } else {
            index.set(index.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, index, props.delay, props.texts.length, updatedThisRound]);

  return (
    <span
      className={twMerge(
        "md:text-2xl lg:text-2xl font-bold text-white inline",
        props.bodyCustomCSS,
      )}
    >
      <motion.span style={{ fontFamily: "monospace" }}>
        {displayText}
      </motion.span>
    </span>
  );
}

export default Type;
