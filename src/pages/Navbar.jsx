import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="drawer z-10 ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-bgWhite ">
            <div className="flex-none lg:hidden ">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 space-x-5 lg:hidden ">
              <h1 className="text-xl font-bold">Aesop</h1>
            </div>
            <div className="flex-none justify-between hidden lg:block  w-full">
              <ul className="menu menu-horizontal items-center font-bold  w-full justify-between">
                <div className="flex">
                  <li>
                    <a>Skin Care</a>
                  </li>
                  <li>
                    <a>Hair</a>
                  </li>
                  <li>
                    <a>Fragrance</a>
                  </li>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Kits & Travel</a>
                  </li>
                  <li>
                    <a>Gifts</a>
                  </li>
                  <li>
                    <a>read</a>
                  </li>
                  <li>
                    <a>Stores</a>
                  </li>
                  <li>
                    <a>Facial Appoinments</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faSearch} />
                  </li>
                </div>
                <div className="flex">
                  <li>
                    <a>Log In</a>
                  </li>
                  <li>
                    <a>Cabinet</a>
                  </li>
                  <li>
                    <a>Cart</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className=" w-80 min-h-full bg-bgWhite font-semibold ">
            <li>
              <div className="flex justify-between border px-4 pt-2 pb-6">
                <a className="text-2xl">Aesop</a>
                <div className="space-x-4">
                  <FontAwesomeIcon icon={faSearch} />
                  <FontAwesomeIcon icon={faHeart} />
                  <a href="">Cart</a>
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-between border px-4 py-2">
                <a>Skin Care</a>
                <a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </li>
            <li>
              <div className="flex justify-between border px-4 py-2">
                <a>Hair</a>
                <a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </li>
            <li>
              <div className="flex justify-between border px-4 py-2">
                <a>Fragrance</a>
                <a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </li>
            <li>
              <div className="flex justify-between border px-4 py-2">
                <a>Home</a>
                <a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </li>
            <li>
              <div className="flex justify-between border px-4 py-2">
                <a>Kits & Travel</a>
                <a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </li>
            <li>
              <div className="flex justify-between border px-4 py-2">
                <a>Gifts</a>
                <a>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </li>
            <div className="grid grid-cols-2 gap-4 px-4 font-light ">
              <div className="space-y-5 py-5 ">
                <h1 className="hover:underline">Read</h1>
                <h1 className="hover:underline">Stores</h1>
                <h1 className="hover:underline">Facial Appoinments</h1>
              </div>
              <div className="space-y-5 py-5">
                <h1 className="hover:underline">Log in</h1>
                <h1 className="hover:underline">Live assistance</h1>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
