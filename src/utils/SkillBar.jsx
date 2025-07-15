import { motion } from 'framer-motion';
import styles from '../styles/SkillBar.module.css';

export default function SkillBar({ label, percent }) {
    return (
        <div className={styles.barContainer}>
            <span>{label}</span>
            <div className={styles.barBackground}>
                <motion.div
                    className={styles.barFill}
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );
}