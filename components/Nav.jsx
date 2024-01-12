"use client";

import Link from "next/link";
import Image from "next/image";
import Dropdownmenu from "./Dropdownmenu";

const Nav = () => {
  const handleSearchChange = () => {};

  const signIn = () => {};

  const isloggedIn = true;
  return (
    <nav className="bg-background-color-5  backdrop-blur-md flex-between w-full sticky top-0 z-50 px-10 py-4">
      <div className="flex-center">
        <Link
          href="/"
          className="flex gap-2 flex-center pr-4 border-solid border-r-2 border-slate-50"
        >
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">NFT Marketplace</p>
        </Link>
        <div className="flex gap-3 md:gap-5 pl-4">
          <Link href="/studio/create">Create</Link>
          <Link href="/studio/drop">Explore</Link>
        </div>
      </div>

      <div className="sm:flex hidden">
        <div className="flex gap-3">
          <form className="relative w-full flex-center search_bar">
            <input
              type="text"
              placeholder="Search for a tag or a username"
              onChange={handleSearchChange}
              required
              className="search_input peer"
            />
            <span>
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            </span>
          </form>

          {isloggedIn ? (
            // <div className="dropdown relative">
            //   <button
            //     id="dropdownHoverButton"
            //     data-dropdown-toggle="dropdownHover"
            //     type="button"
            //   >
            //     <Image
            //       src="/assets/images/profile.jpg"
            //       width={37}
            //       height={37}
            //       className="rounded-full"
            //       alt="profile"
            //     />
            //   </button>
            //   <div
            //     id="dropdownHover"
            //     className="z-10 hidden absolute top-16 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            //   >
            //     <ul
            //       className="py-2 text-sm text-gray-700 dark:text-gray-200"
            //       aria-labelledby="dropdownHoverButton"
            //     >
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Dashboard
            //         </a>
            //       </li>
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Settings
            //         </a>
            //       </li>
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Earnings
            //         </a>
            //       </li>
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Sign out
            //         </a>
            //       </li>
            //     </ul>
            //   </div>
            // </div>
            <Dropdownmenu />
          ) : (
            <>
              <button
                type="button"
                key="key"
                onClick={() => {
                  signIn(provider.id);
                }}
                className="gray_btn"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
