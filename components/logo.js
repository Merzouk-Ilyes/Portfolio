import React,{useEffect} from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

function Logo({ dark, setDark }) {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };
  const colorVariants = dark
    ? {
        hidden: { fill: "#000" },
        visible: {
          fill: "#fff",
          stroke: "#fff",
          transition: {
            duration: 5,
            ease: "easeInOut",
          },
        },
      }
    : {
        hidden: { fill: "#fff" },
        visible: {
          fill: "#000",
          stroke: "#000",
          transition: {
            duration: 5,
            ease: "easeInOut",
          },
        },
      };

  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => { 
    console.log("logoDark !!!")
    
    const currentTheme = theme === "system" ? systemTheme : theme;
    currentTheme === "dark" ? setDark(true) : setDark(false);
  }, []);
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 148.8 72.2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        variants={colorVariants}
        initial="hidden"
        animate="visible"
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        fontSize="9pt"
        stroke="#000"
        strokeWidth="0.25mm"
        style={{ strokeWidth: "0.25mm" }}
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M 85.9 0 L 85.9 2 Q 82.7 2.1 81.1 2.75 A 3.555 3.555 0 0 0 79.062 4.832 A 4.785 4.785 0 0 0 78.95 5.15 Q 78.497 6.593 78.417 9.362 A 43.179 43.179 0 0 0 78.4 10.6 L 78.4 60.2 Q 78.4 63.194 78.78 64.942 A 8.265 8.265 0 0 0 78.95 65.6 A 4.175 4.175 0 0 0 79.51 66.781 A 3.306 3.306 0 0 0 81.1 68 Q 82.491 68.522 85.092 68.741 A 37.37 37.37 0 0 0 85.9 68.8 L 85.9 70.8 Q 83.239 70.61 79.27 70.555 A 210.863 210.863 0 0 0 78.85 70.55 Q 74.6 70.5 70.2 70.5 Q 65.4 70.5 61.2 70.55 Q 57 70.6 54.4 70.8 L 54.4 68.8 Q 57.347 68.627 59.054 68.153 A 8.723 8.723 0 0 0 59.55 68 A 3.554 3.554 0 0 0 61.732 66.031 A 4.55 4.55 0 0 0 61.9 65.6 Q 62.406 64.082 62.485 61.283 A 38.321 38.321 0 0 0 62.5 60.2 L 62.5 6.1 L 63.2 6.1 L 38.4 70.9 L 36.8 70.9 L 9.8 6.5 L 9.8 54.4 A 81.349 81.349 0 0 0 9.853 57.441 Q 9.96 60.286 10.283 62.214 A 18.644 18.644 0 0 0 10.4 62.85 Q 11 65.8 13.05 67.05 Q 15.1 68.3 19.5 68.8 L 19.5 70.8 A 34.961 34.961 0 0 0 18.195 70.69 Q 16.631 70.584 14.5 70.55 Q 11.4 70.5 8.7 70.5 Q 6.4 70.5 4 70.55 Q 1.6 70.6 0 70.8 L 0 68.8 Q 3.2 68.3 4.8 67.1 A 4.82 4.82 0 0 0 6.121 65.543 Q 6.49 64.874 6.738 64.023 A 10.495 10.495 0 0 0 6.95 63.15 A 22.639 22.639 0 0 0 7.24 61.231 Q 7.463 59.228 7.495 56.509 A 78.695 78.695 0 0 0 7.5 55.6 L 7.5 10.6 Q 7.5 6.9 6.95 5.15 A 3.943 3.943 0 0 0 6.258 3.829 A 3.601 3.601 0 0 0 4.75 2.75 Q 3.1 2.1 0 2 L 0 0 Q 1.6 0.1 4 0.2 Q 6.4 0.3 8.7 0.3 Q 13 0.3 17.15 0.2 Q 20.716 0.114 23.581 0.028 A 734.656 734.656 0 0 0 24.5 0 L 45.5 50.7 L 43 53 L 63.1 0.3 L 66.6 0.3 L 70.2 0.3 Q 74.6 0.3 78.85 0.2 Q 82.888 0.105 85.617 0.01 A 315.26 315.26 0 0 0 85.9 0 Z M 123.5 0 L 123.5 2 A 27.813 27.813 0 0 0 121.823 2.1 Q 120.168 2.252 119.068 2.602 A 6.601 6.601 0 0 0 118.65 2.75 A 3.417 3.417 0 0 0 116.633 4.755 A 4.392 4.392 0 0 0 116.5 5.15 A 9.552 9.552 0 0 0 116.258 6.289 Q 116.063 7.537 116.015 9.362 A 47.495 47.495 0 0 0 116 10.6 L 116 60.2 Q 116 63.194 116.38 64.942 A 8.265 8.265 0 0 0 116.55 65.6 A 4.175 4.175 0 0 0 117.11 66.781 A 3.306 3.306 0 0 0 118.7 68 Q 120.091 68.522 122.692 68.741 A 37.37 37.37 0 0 0 123.5 68.8 L 123.5 70.8 Q 120.934 70.61 117.105 70.555 A 196.223 196.223 0 0 0 116.7 70.55 Q 112.6 70.5 108.4 70.5 Q 103.5 70.5 99.35 70.55 Q 95.638 70.595 93.166 70.759 A 55.519 55.519 0 0 0 92.6 70.8 L 92.6 68.8 A 33.241 33.241 0 0 0 94.273 68.656 Q 96.25 68.431 97.4 68 A 3.377 3.377 0 0 0 99.396 66.031 A 4.821 4.821 0 0 0 99.55 65.6 A 9.598 9.598 0 0 0 99.828 64.373 Q 100.039 63.097 100.087 61.283 A 41.801 41.801 0 0 0 100.1 60.2 L 100.1 10.6 Q 100.1 6.9 99.55 5.15 A 3.943 3.943 0 0 0 98.858 3.829 A 3.601 3.601 0 0 0 97.35 2.75 Q 95.7 2.1 92.6 2 L 92.6 0 Q 94.926 0.089 98.492 0.179 A 869.52 869.52 0 0 0 99.35 0.2 Q 103.5 0.3 108.4 0.3 Q 112.6 0.3 116.7 0.2 Q 120.596 0.105 123.228 0.01 A 292.79 292.79 0 0 0 123.5 0 Z"
          vectorEffect="non-scaling-stroke"
        />
      </motion.g>
    </svg>
  );
}

export default Logo;
