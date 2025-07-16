import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { animate, motion, AnimatePresence } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import DrawMessage from "../utils/DrawMainPage";
import LowNavMain from "../utils/LowNavMain";
// import { handleExitAnimation } from "../NavBar";

const variants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

export default function Home() {

    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 21, { duration: 3 , delay: 1 })
        return () => controls.stop()
    }, [])

    return (
      
      <AnimatePresence>

      {/* {!handleExitAnimation &&  */}
      <motion.div
      key="home-page"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ position: "absolute", width: "100%" }} 
      className={styles.contentContainer}> 

      <h1 className={styles.title}>Łukasz Witkowski</h1>
      <motion.p
      key="home-message"
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{delay: 0.5, duration: 1}}
      >
        <motion.span key="age">{rounded}</motion.span> years old software developer wannabe
      </motion.p>
      </motion.div>
        <DrawMessage/>
    {/* } */}
      <LowNavMain/>
      
      </AnimatePresence>
    );
  }