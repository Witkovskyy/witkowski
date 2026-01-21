import React from "react";
import styles from "../styles/SkillBar.module.css";
import { motion } from "framer-motion";

interface SkillBarProps {
  percent: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ percent }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <span className={styles.percentText}>{percent}%</span>
      </div>

      <div className={styles.barBackground}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;