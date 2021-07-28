import Link from "next/link";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <nav>
      <div className="pt-10 flex items-center justify justify-between lg:justify-start text-white">
        <button
          onClick={() => setMenu(!menu)}
          className="toggle lg:hidden cursor-pointer "
        >
          <svg
            className="fill-current text-white"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="60" height="10"></rect>
            <rect y="60" width="80" height="10"></rect>
          </svg>
        </button>
        <div className="w-2/12 flex space-x-2 mx-auto lg:mx-0">
          <span className="p-1 px-3 rounded inline-block bg-gray-500">E</span>
          <Link href="/">
            <p className="self-center cursor-pointer">Epictrus</p>
          </Link>
        </div>
        <div className="text-right lg:hidden">
          <button onClick={() => setSearch(!search)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>

        <div
          className={`w-full h-full lg:h-auto bg-gradient-to-b lg:bg-none lg:w-10/12 fixed top-0  lg:static items-center transition-all ${
            !menu ? "-left-full" : "left-0"
          }`}
        >
          <button
            className="absolute right-8 top-10 lg:hidden"
            onClick={() => setMenu(!menu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul className="flex flex-col p-10 lg:flex-row justify-center lg:justify-start lg:space-x-16 space-y-4 lg:space-y-0">
            <li className=" hover:underline">
              <Link href="/uidesign">UI Design</Link>
            </li>
            <li className="cursor-pointer hover:underline">Front-end</li>
            <li className="cursor-pointer hover:underline">Back-end</li>
            <li
              className="relative cursor-pointer"
              onClick={() => setDropdown(!dropdown)}
            >
              Lainnya &#8595;
              {dropdown ? (
                <ul className="absolute mt-1 w-[100px] roudned-lg bg-gray-800">
                  <li className="hover:bg-gray-600">
                    <Link
                      className="border-b-2 px-2 py-1 flex border-gray-500"
                      href="#"
                    >
                      Internet
                    </Link>
                  </li>
                  <li className="hover:bg-gray-600">
                    <Link
                      className="border-b-2 px-2 pb-1 flex border-gray-500"
                      href="#"
                    >
                      Books
                    </Link>
                  </li>
                  <li className="hover:bg-gray-600">
                    <Link className="px-2 pb-1 flex" href="#">
                      Open Source
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
        <div
          className={`absolute lg:static lg:w-3/12 w-full px-4 text-center left-0 transition-all ${
            search ? "top-10" : "-top-full"
          }`}
        >
          <input
            className="bg-search w-full bg-gray-800 text-white pl-8 py-2 rounded-md lg:rounded-2xl"
            placeholder="Search"
          />

          <button
            className="absolute right-4 top-2 lg:hidden"
            onClick={() => setSearch(!search)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
