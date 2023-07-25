import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { GithubLogo } from "phosphor-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
}

interface GitHubReposProps {
  username: string;
}

const GitHubRepos: React.FC<GitHubReposProps> = ({ username }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<Repository[]>(
          `https://api.github.com/users/claudiopjfilho/repos`,
          {
            headers: {
              // Authorization: `<seu-token>`,  Substitua <seu-token> pelo seu token de acesso pessoal
            },
          }
        );
        setRepos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepos();
  }, [username]);

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const displayedRepos = repos.slice(startIndex, endIndex);

  return (
    <div className="pb-20">
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row justify-between mx-6 my-4">
          <h2 className="ml-4 text-slate-300 text-2xl  font-bold mb-4">
            Meus Repositórios:
          </h2>
          <div className="flex gap-8 justify-between">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-24 h-12 bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded duration-700 cursor-pointer"
            >
              Anterior
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= repos.length}
              className=" h-12 md:w-24 bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded duration-700 cursor-pointer"
            >
              Próxima
            </button>
          </div>
        </div>

        {displayedRepos
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map(repo => (
            <div
              key={repo.id}
              className=" font-mono bg-sky-600 hover:bg-sky-700 p-4 mx-4 mb-4 transition duration-600 ease-in-out rounded-xl"
            >
              <h3 className="text-xl uppercase text-gray-900 font-bold mb-2 transition duration-500 ease-in-out">
                {repo.name}
              </h3>
              <p className=" text-gray-200 mb-2 font-mono">
                {repo.description}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                className=" text-gray-200 hover:text-cyan-600 hover:animate-pulse duration-1000 cursor-pointer"
              >
                <GithubLogo size={28} className="mb-2 text-gray-800" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GitHubRepos;
