export const lefttoRightVariants = {
  hidden: { opacity: 0, x: "-10vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "Tween", delay: 0.2, duration: 2 },
  },
};

export const righttoLeftVariants = {
  hidden: { opacity: 0, x: "10vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "Tween", delay: 0.2, duration: 2 },
  },
};

export const downtoUpVariants = {
  hidden: { opacity: 0, y: "10vh" },
  hidden1: { opacity: 0, y: "1.5vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "Tween", delay: 0.2, duration: 2 },
  },
};

export const smalltoBigVariants = {
  hidden: { opacity: 0, transform: "scale(0.7)" },
  visible: {
    opacity: 1,
    transform: "scale(1)",
    transition: { type: "Tween", delay: 0.2, duration: 2 },
  },
};

export const rotateRightToLeftVariants = {
  hidden: { opacity: 0, transform: "rotate(-10deg)" },
  visible: {
    opacity: 1,
    transform: "rotate(-3deg)",
    transition: { type: "Tween", delay: 0.2, duration: 2 },
  },
};

export const rotateLeftToRightVariants = {
  hidden: { opacity: 0, transform: "rotate(10deg)" },
  visible: {
    opacity: 1,
    transform: "rotate(3deg)",
    transition: { type: "Tween", delay: 0.2, duration: 2 },
  },
};
