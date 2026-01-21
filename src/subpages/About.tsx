import React from "react";
import styles from "../styles/About.module.css";
import { motion, Variants } from "framer-motion";
import SkillBar from "../utils/SkillBar"; // Pamiętaj, żeby też zmienić ten plik na .tsx!

// Typowanie wariantów animacji
const variants: Variants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100vw", opacity: 0 },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 1, staggerChildren: 0.2 }
  }
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

interface Skill {
    id: number;
    name: string;
    percent: number;
}

export default function About() {
  const skills: Skill[] = [
    { id: 1, name: "JavaScript", percent: 75 },
    { id: 2, name: "TypeScript", percent: 70 },
    { id: 3, name: "React", percent: 70 },
    { id: 4, name: "Node.js", percent: 70 },
    { id: 5, name: "Next.js", percent: 70 },
    { id: 6, name: "Python", percent: 70 },
    { id: 7, name: "C#", percent: 50 },
    { id: 8, name: "HTML", percent: 80 },
    { id: 9, name: "CSS", percent: 80 },
    { id: 10, name: "Git", percent: 50 },
    { id: 11, name: "SQL", percent: 60 },
    { id: 12, name: "Unity", percent: 40 },
  ];

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
        transition={{ delay: 0.5, duration: 0.7 }}
        className={styles.paragraph}>
        My name is Łukasz. I'm currently studying computer science at PUT Poznań.
        Your average Unity enjoyer. Trying to make it into the business.
        Apart from IT, I'm a music and sports geek.
      </motion.p>

      <h2>My skills</h2>

      <motion.ul
        className={styles.skillsList}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.li key={skill.id} variants={item} className={styles.skillItem}>
            {skill.name}
            {/* Upewnij się, że SkillBar przyjmuje prop `percent` typu number */}
            <SkillBar percent={skill.percent} />
          </motion.li>
        ))}

      </motion.ul>
    </motion.div>
  );
}