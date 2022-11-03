const SearchBox = () => {
  return (
    <form>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-300">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="px-4 py-2 pl-10 w-full lg:min-w-500 text-gray-700 rounded-full border border-gray-200 focus:border-gray-400 outline-none bg-gray-100"
          placeholder="Search for clothes, shoes and more"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default SearchBox;
