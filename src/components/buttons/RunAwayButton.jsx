import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

function RunAwayButton({ n, callback }) {
  const controls = useAnimation();
  const threshold = 9;
  const navigate = useNavigate();

  const handleHover = () => {
    if (n < threshold) {
      controls.start({
        x: Math.floor(Math.random() * -300),
        y: Math.floor(Math.random() * -300),
        transition: { duration: 0.2, ease: "easeOut" },
      });
      callback(n + 1);
    }
  };

  return (
    <div className="flex flex-row gap-3 w-full">
      <motion.button
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1.1 }}
        onClick={() => navigate("/confirmation")}
        className={twMerge(
          "bg-green-500 w-full rounded-lg px-12 py-2.5 font-bold text-white text-sm",
          n === threshold &&
            "bg-gradient-to-br from-purple-400 to-purple-900 w-full text-center"
        )}
      >
        <p>YES</p>
      </motion.button>
      {n < threshold && (
        <motion.button
          onHoverStart={handleHover}
          onTapStart={handleHover}
          animate={controls}
          className="bg-red-500 w-full text-white font-bold text-sm rounded-lg px-12 py-2.5"
        >
          <p>NO</p>
        </motion.button>
      )}
    </div>
  );
}

export default RunAwayButton;
