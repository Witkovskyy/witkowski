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

        <h1>My projects</h1>
        <GitHubRepos/>
        <p>My CV's (Polish and English) </p>
        <a href="/public/Łukasz Witkowski CV - English.pdf">English</a>
        <a href="/public/Lukasz_Witkowski_CV_24_04_2025.pdf">Polish</a>
      </motion.div>
    );
  }