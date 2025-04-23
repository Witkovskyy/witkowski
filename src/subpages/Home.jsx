import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

export default function Home() {
    return (
      <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%" }} 
      className={styles.contentContainer}> 


      <h1 className={styles.title}>Łukasz Witkowski</h1>
      <p>20 years old software developer wannabe</p>
      </motion.div>
    );
  }