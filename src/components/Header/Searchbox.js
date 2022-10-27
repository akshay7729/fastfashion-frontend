const SearchBox = () => {
  return (
    <form>
      <div className="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-300">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="px-4 py-2 pl-10 w-full min-w-500 text-gray-500 rounded-full border border-gray-300 focus:border-gray-400 outline-none"
          placeholder="Search Clothes"
        />
      </div>
      {/* <div class="max-w-md mx-auto">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 min-w-500 pl-10"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div> */}
    </form>
  );
};

export default SearchBox;
