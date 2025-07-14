import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

export default function About() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%" }} 
      className={styles.contentContainer}>

      <h1>Hi, it's great to see you here!</h1>
      <motion.p 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{delay: 0.5, duration: 1}}
      className={styles.paragraph}>
        My name is Łukasz. I'm currently stydying computer science at PUT Poznań.
        Your average Unity enjoyer. Trying to make it into the bussiness.
        Apart from IT, I'm a music and sports geek.
      </motion.p>
    </motion.div>
  );
  }