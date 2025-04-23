import React, { useEffect, useState } from "react";
import styles from "../styles/Repos.module.css";

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
      <ul className={styles.listparent}>
        {repos.slice(0,4).map((repo) => (
          <li key={repo.id} className={styles.repoItemContainer}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.listItem}>
              {(repo.name).replace(/_/g, " ")}
            <p>{repo.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;