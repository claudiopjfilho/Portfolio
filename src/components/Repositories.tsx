import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;

  language: string;
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
              Authorization: `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`, // Substitua <seu-token> pelo seu token de acesso pessoal
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
    <div>
      <div className="container mx-auto mt-8">
        <div className="flex justify-between mx-6 my-4">
          <h2 className="ml-4 text-indigo-700 text-2xl  font-bold mb-4">
            Meus Repositórios:
          </h2>
          <div className="flex gap-8">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
              Anterior
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= repos.length}
              className="bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Próxima
            </button>
          </div>
        </div>

        {displayedRepos.map(repo => (
          <div
            key={repo.id}
            className="bg-gray-700 hover:bg-gray-800 p-4 mx-4 mb-4 transition duration-500 ease-in-out rounded-xl"
          >
            <h3 className="text-xl uppercase text-gray-200 font-bold mb-2 transition duration-500 ease-in-out">
              {repo.name}
            </h3>
            <p className="text-gray-200 mb-2">{repo.description}</p>
            <p className="text-gray-200">Estrelas: {repo.stargazers_count}</p>
            <p className="text-gray-200">Linguagem: {repo.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos;
