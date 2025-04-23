import GitHubRepos from "../utils/repoFetch";
import styles from "../styles/Portfolio.module.css";


export default function Portfolio() {
    return (
      <div className={styles.contentContainer}>
        <h1>My projects</h1>
        <GitHubRepos/>
      </div>
    );
  }