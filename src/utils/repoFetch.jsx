import React, { useEffect, useState } from "react";

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
      <ul>
        {repos.slice(0,4).map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;