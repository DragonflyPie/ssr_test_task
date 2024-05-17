"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleChange = (str: string) => {
    setQuery(str);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/info/${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-80">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"></div>
        <input
          type="number"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Укажите ИНН"
          required
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-1 right-1 rounded-lg bg-gray-100 bg-gray-300 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            className="h-4 w-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
