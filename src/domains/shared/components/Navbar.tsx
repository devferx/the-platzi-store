import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@store/index";
import { useState } from "react";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
];

export const Navbar = () => {
  const totalCount = useSelector((state: RootState) => state.cart.totalItems);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to="/"
        >
          <img
            src="https://i.ibb.co/CWykK0z/store.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            The Fake Store
          </span>
        </Link>
        <div className="md:hidden">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
            isOpen ? "hidden" : ""
          }`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:gap-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            {links.map((link) => (
              <li key={link.url}>
                <NavLink
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500 ${
                      isActive
                        ? "font-bold text-blue-700 "
                        : "text-gray-900 dark:text-white"
                    }`
                  }
                  to={link.url}
                  aria-current="page"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                to="/cart"
              >
                Cart ({totalCount})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
