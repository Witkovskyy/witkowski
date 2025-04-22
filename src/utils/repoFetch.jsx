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
    <div>
      <h2>My projects</h2>
      <ul className={styles.listparent}>
        {repos.slice(0,4).map((repo) => (
          <li key={repo.id} className={styles.repo_item_container}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.list_item}>
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;