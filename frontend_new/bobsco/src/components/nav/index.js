import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-white bg-gray-100">
      {({ open }) => (
        <>
          <div className="max-w-12xl sm:h-12 h-20 grid sm:grid-cols-2">
            <div className="text-center h-full text-white bg-primaryDarkBlue  flex justify-center items-center">
              <p>Welcome to Bobsco Edu</p>
            </div>
            <div className="bg-primaryRed h-full flex justify-center items-center  text-white gap-6">
              <p className="hover:cursor-pointe">
                <a href="mailto:enquiry@vedhikeschools.com">
                  enquiry@vedhikeschools.com
                </a>
              </p>
              <p>+91 484 452 77 99</p>
            </div>
          </div>
          <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 bg-white shadow-2xl">
            <div className="relative flex h-28 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="relative h-20 w-auto"
                    src="images/logo.png"
                    alt="Bobsco Edu Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block ps-14">
                  <div className="flex space-x-4">
                    <a
                      key="Courses"
                      href="course"
                      target="blank"
                      onClick=""
                      className=" text-gray-900  hover:text-primaryRed hover:underline-offset-8 hover:underline font-semibold py-8 text-lg"
                      aria-current="page"
                    >
                      Courses
                    </a>
                    <a
                      key="E-Vedhik"
                      href="/evedhik"
                      target=""
                      onClick=""
                      className=" text-gray-900  hover:text-primaryRed hover:underline-offset-8 hover:underline text-lg font-semibold py-8"
                      aria-current="page"
                    >
                      evedhik
                    </a>

                    <a
                      key="Testimonial"
                      href="#"
                      target=""
                      onClick=""
                      className=" text-gray-900  hover:text-primaryRed hover:underline-offset-8 hover:underline text-lg font-semibold py-8"
                      aria-current="page"
                    >
                      Testimonial
                    </a>
                    <a
                      key="About"
                      href="#"
                      target=""
                      onClick=""
                      className=" text-gray-900  hover:text-primaryRed hover:underline-offset-8 hover:underline text-lg font-semibold py-8"
                      aria-current="page"
                    >
                      About
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
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
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-primaryRed text-white mx-3 rounded-lg"
                                : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-primaryRed text-white mx-3 rounded-lg"
                                : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-primaryRed text-white mx-3 rounded-lg"
                                : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
