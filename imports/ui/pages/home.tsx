import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import cl from "classnames";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";

// const features = [
//   {
//     name: "Analytics",
//     href: "#",
//     description:
//       "Get a better understanding of where your traffic is coming from.",
//     icon: ChartBarIcon,
//   },
//   {
//     name: "Engagement",
//     href: "#",
//     description: "Speak directly to your customers in a more meaningful way.",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Security",
//     href: "#",
//     description: "Your customers' data will be safe and secure.",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: "Integrations",
//     href: "#",
//     description: "Connect with third-party tools that you're already using.",
//     icon: Squares2X2Icon,
//   },
//   {
//     name: "Automations",
//     href: "#",
//     description:
//       "Build strategic funnels that will drive your customers to convert",
//     icon: ArrowPathIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch Demo", href: "#", icon: PlayIcon },
//   { name: "Contact Sales", href: "#", icon: PhoneIcon },
// ];
// const resources = [
//   {
//     name: "Help Center",
//     description:
//       "Get all of your questions answered in our forums or contact support.",
//     href: "#",
//     icon: LifebuoyIcon,
//   },
//   {
//     name: "Guides",
//     description:
//       "Learn how to maximize our platform to get the most out of it.",
//     href: "#",
//     icon: BookmarkSquareIcon,
//   },
//   {
//     name: "Events",
//     description:
//       "See what meet-ups and other events we might be planning near you.",
//     href: "#",
//     icon: CalendarIcon,
//   },
//   {
//     name: "Security",
//     description: "Understand how we take your privacy seriously.",
//     href: "#",
//     icon: ShieldCheckIcon,
//   },
// ];
// const recentPosts = [
//   { id: 1, name: "Boost your conversion rate", href: "#" },
//   {
//     id: 2,
//     name: "How to use search engine optimization to drive tnpm straffic to your site",
//     href: "#",
//   },
//   { id: 3, name: "Improve your customer experience", href: "#" },
// ];

// function cl(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const Home = () => (
  <div className="relative bg-gray-50">
    <Popover className="relative bg-white shadow">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Logo />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={cl(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={cl(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {features.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-primary"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Docs
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={cl(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={cl(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-primary"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base text-gray-500">
                                Recent Posts
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li
                                    key={item.id}
                                    className="truncate text-base"
                                  >
                                    <a
                                      href={item.href}
                                      className= text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className= text-primary hover:text-primary-300"
                              >
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group> */}
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              to="/signin"
              className="whitespace-nowrap text-base text-gray-500 hover:text-gray-900"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base text-white shadow-sm hover:bg-primary-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div> */}
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <Link
                  to="/signup"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base text-white shadow-sm hover:bg-primary-700"
                >
                  Sign up
                </Link>

                <p className="mt-6 text-center text-base text-gray-500">
                  Existing customer?
                  <Link
                    to="/signin"
                    className="pl-2 text-primary hover:text-primary-300"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

    <main className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline capitalize">
              The way you eat and do groceries
            </span>{" "}
            <span className="block text-primary xl:inline">
              managed in FLOW
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Creating groceries lists and remembering all of your favourite
            recipes takes more time than you'd like? You need help to optimize
            the energy you get out of your body?
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base text-white hover:bg-primary-700 md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base text-primary hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/img/home-image.jpg"
          alt=""
        />
      </div>
    </main>
  </div>
);

export default Home;
