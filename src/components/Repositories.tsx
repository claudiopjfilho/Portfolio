import React from "react";
import RepoBanner from "./RepoBanner";
import { useEffect, useState } from "react";
interface Repo {
  name: string;
  description: string;
  homepage: string;
}
export default function Repositories() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/claudiopjfilho/repos")
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {repos.map(repos => {
          return (
            <RepoBanner
              name={repos.name}
              description={repos.description}
              homepage={repos.homepage}
            />
          );
        })}
      </div>
    </div>
  );
}
