import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

function CustomButton(props) {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.3, type: "spring" }}
      onClick={() => navigate(props.path)}
      className={twMerge(
        "text-white px-6 py-2.5 rounded-lg font-bold",
        props.className
      )}
    >
      {props.text}
    </motion.button>
  );
}

export default CustomButton;

CustomButton.defaultProps = {
  text: "Button",
  className: "",
  path: "/",
};
