import React, { ReactNode } from "react";
import cx from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import GlobalConsumer from "../hooks/global.context";
import useAuth from "../hooks/auth.hook";

import { useNavigate } from "react-router-dom";

const TopNav = ({ title = "" }: { title?: string | ReactNode }) => {
  const user = useTracker(() => Meteor.user());
  const { logout } = useAuth();
  const navigate = useNavigate();
  const {
    sidebar: { setIsSidebarOpen },
  } = GlobalConsumer();

  const userNavigation = [
    // { name: "Your Profile", href: "#" },
    // { name: "Settings", href: "#" },
    {
      name: "Sign out",
      href: "",
      onClick: () => logout(() => navigate("/")),
    },
  ];

  const onOpenClick = () => {
    if (setIsSidebarOpen) setIsSidebarOpen(true);
  };

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white border-b border-gray-200">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={onOpenClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between px-4">
        <div className="flex flex-1 items-center">
          {/* <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form> */}
          {title && <h1 className="md:ml-8 text-2xl">{title}</h1>}
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          {/* {isLoading && <div>Loading...</div>}

          {error && <div>{error.message}</div>}

          {!error && !isLoading && !user && (
            <div>
              <a href="/api/auth/login">Login</a>
            </div>
          )} */}

          {user && (
            <>
              {/* <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button> */}

              {/* {totalRecipes ? (
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className="relative">
                    <span className="sr-only">Shopping Cart</span>
                    <span className="flex justify-center items-center bg-red-500 h-5 w-5 text-xs text-white rounded-lg absolute translate-x-4 -translate-y-2">
                      {totalRecipes}
                    </span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </button>
              ) : undefined} */}

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      height={100}
                      width={100}
                      src={`https://ui-avatars.com/api/?name=${user.username}`}
                      alt={user.username || ""}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            onClick={item.onClick}
                            className={cx(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
