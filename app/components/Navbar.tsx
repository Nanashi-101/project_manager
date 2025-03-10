import React from "react";
import { Search, Settings } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute top-1/2 left-[4px] mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-200 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            placeholder="Search..."
            type="search"
          />
        </div>
      </div>

      <div className="flex items-center">
        <Link
          href="/settings"
          className="h-min w-min rounded p-2 transition-all duration-200 hover:bg-gray-200 dark:text-white dark:hover:text-black"
        >
          <Settings className="h-6 w-6 cursor-pointer" />
        </Link>
        <div className="mr-5 ml-2 hidden min-h-[2em] w-[0.1rem] bg-gray-300 md:inline-block"></div>
      </div>
    </div>
  );
}

export default Navbar;
