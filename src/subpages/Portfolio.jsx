import GitHubRepos from "../utils/repoFetch";
import styles from "../styles/Portfolio.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

export default function Portfolio() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%" }}
      className={styles.contentContainer}>

      <h1 className={styles.portfolioHeader}>My projects</h1>
      <GitHubRepos />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.cv_container}
      >
        <p>My CV's (Polish and English) </p>
        <a
          href="/Łukasz Witkowski CV - English.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          English</a>
        <a
          href="/Lukasz_Witkowski_CV_24_04_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Polish</a>
      </motion.div>
    </motion.div>
  );
}