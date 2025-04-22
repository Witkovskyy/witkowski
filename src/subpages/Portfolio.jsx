import GitHubRepos from "../utils/repoFetch";


export default function Portfolio() {
    return (
      <div>
        <h1>My projects</h1>
        <GitHubRepos/>
      </div>
    );
  }