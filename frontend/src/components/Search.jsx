const Search = () => {
  return (
    <div className="flex items-center justify-end p-2">
      <input
      placeholder="Buscar..."
        type="text"
        className="bg-gray-200 w-full rounded-xl p-2 shadow-lg focus:outline-none focus:ring-2 ring-slate-400"
      />
      <button
        type="button"
        className="absolute p-1 opacity-70 mr-2 rounded-full hover:bg-slate-200 transition-all duration-200 focus:outline-none focus:ring-2 ring-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
