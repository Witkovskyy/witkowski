import React, { useEffect, useState } from "react";
import styles from "../styles/Repos.module.css";
import { motion } from "framer-motion";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const username = "witkovskyy";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
      });
  }, []);


  return (
    <div className={styles.repoContainerParent}>
      <motion.ul 
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{delay: 0.5, duration: 1}}
      
      className={styles.listparent}>
        
        {repos.slice(0,8).map((repo) => (
          <motion.li 
            key={repo.id} 
            className={styles.repoItemContainer}
            // initial={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.90 }}
            >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.listItem}>
              
                <p className={styles.itemName}> 
                  {
                  (repo.name)
                  .replace(/_/g, " ")
                  .replace(/^./, str => str.toUpperCase())
                  }
                </p>
              
            <p className={styles.itemDescription}>{repo.description}</p>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default GitHubRepos;