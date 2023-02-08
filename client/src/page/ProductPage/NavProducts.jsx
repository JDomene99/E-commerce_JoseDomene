import React, { useState} from 'react'
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function NavProducts() {
    const [aside, setAside] = useState(true);
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
      }

      const sortHightToLow = async () => {
        setProduct([]);
        const response = await getProductsSorter(-1);
        setProduct(response);
      };
    
      const sortLowToHight = async () => {
        setProduct([]);
        const response = await getProductsSorter(1);
        setProduct(response);
      }; 


      const [toglleIcon, setToglleIcon] = useState(false);
  return (
    <nav className="flex flex-row flex-wrap justify-between mx-auto w-full">
   

    <div>
      <button onClick={() => setAside(!aside)}>
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24px"
          height="24px"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M21 8.25H10m-5.25 0H3"
          ></path>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M3 15.75h10.75m5 0H21"
          ></path>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="block py-2 pl-3 pr-4 text-black"
            onClick={() => setToglleIcon(!toglleIcon)}
          >
            Sort By
            {toglleIcon ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
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
          <Menu.Items className="absolute left-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={sortHightToLow}
                  >
                    Price: high-low
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={sortLowToHight}
                  >
                    Price: low-high
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  </nav>
  )
}

export default NavProducts