import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../state/user";
import profilePhoto from "../../assets/profile_img.jpg";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
function Nav() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();

  const isAuth = Boolean(useSelector((state) => state.user));
  const datauser = useSelector((state) => state.user);
  const [profile, setProfile] = useState(true);
  const [toggleButton, setToggleButton] = useState(true);
  // const { amount } = useSelector((state) => state.cart);
  return (
    <>
      {!isNonMobileScreens ? (
        <nav className="bg-white border-gray-200 px-4 justify-between  py-2.5 rounded dark:bg-gray-900">
          <div className="flex flex-row flex-wrap items-center justify-between px-4">
            <div className="">
              <button
                type="button"
                className=" text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => {
                  setToggleButton(!toggleButton);
                }}
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {toggleButton ? (
              ""
            ) : (
              <ul className="z-50 absolute top-0 left-0 list-none flex flex-col pl-5 pr-40 pb-3 text-xl border border-gray-100 rounded-lg bg-gray-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button
                    type="button"
                    className="p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => {
                      setToggleButton(!toggleButton);
                    }}
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>

                {isAuth ? (
                  <li>
                    <button
                      type="button"
                      className="pl-2 rounded-full "
                      onClick={() => setProfile(!profile)}
                    >

                      <img
                        className="w-8 h-8 rounded-full"
                        src={profilePhoto}
                      />
                    </button>
                    {profile ? (
                      ""
                    ) : (
                      <div>
                        <div className=" py-3">
                          <h2 className="block text-sm text-gray-900 dark:text-white">
                            {datauser.name + " " + datauser.apellidos}
                          </h2>
                          <h2 className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                            {datauser.email}
                          </h2>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                          <li>
                            <Link to="/loggout">
                              <Button
                                variant="contained"
                                onClick={() => {
                                  dispatch(setLogout()) 
                                  setToggleButton(!toggleButton)}}
                              >
                                logOut
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ) : (
                  ""
                )}

                <li className="flex flex-row ">
                  <HomeIcon className="m-3 " />{" "}
                  <Link
                    
                    className="block py-2 pl-3 pr-4 text-black focus:text-white border-b border-gray-100"
                    to="/"
                  >
                    Home{" "}
                  </Link>
                </li>
                <li className="flex flex-row  ">
                  <ShoppingBagIcon className="m-3 " />
                  <Link
                    className="block py-2 pl-3 pr-4 text-black focus:text-white border-b border-gray-100"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li className="flex flex-row  w-12/12">
                  <ImportContactsIcon className="m-3 " />
                  <Link
                    className="block py-2 pl-3 pr-4 text-black focus:text-white border-b border-gray-100 "
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                {!isAuth ? (
                  <div className="flex flex-row gap-6 mt-6">
                    <li>
                      <Link to="/login">
                        <Button variant="contained" color="inherit">
                          Login
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/register">
                        <Button variant="contained">Register</Button>
                      </Link>
                    </li>
                  </div>
                ) : (
                  ""
                )}
              </ul>
            )}

            <ShoppingCartIcon />
          </div>
        </nav>
      ) : (
        <ul className="list-none md:text-xl flex flex-row justify-between xs:gap-20 2xl:px-40 py-5 md:px-10">
          <div className="flex flex-row flex-wrap gap-x-10">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>

          <div className="flex flex-row flex-wrap gap-x-6">
            <li>
              <Link to="/cart">
                <ShoppingCartIcon />
                {/* {amount} */}
              </Link>
            </li>

            {isAuth ? (
              
                  <li>
                    <button
                      type="button"
                      className="pl-2 rounded-full "
                      onClick={() => setProfile(!profile)}
                    >

                      <img
                        className="w-8 h-8 rounded-full"
                        src={profilePhoto}
                      />
                    </button>
                    {profile ? (
                      ""
                    ) : (
                      <div>
                        <div className="z-50 absolute top-16 right-0 p-5 bg-white">
                          <h2 className="block text-sm text-gray-900 dark:text-white">
                            {datauser.name + " " + datauser.apellidos}
                          </h2>
                          <h2 className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                            {datauser.email}
                          </h2>
                          <ul className="py-2" aria-labelledby="user-menu-button">
                          <li>
                            <Link to="/loggout">
                              <Button
                                variant="contained"
                                onClick={() => {
                                  dispatch(setLogout()) 
                                  setToggleButton(!toggleButton)}}
                              >
                                logOut
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        </div>
                       
                      </div>
                    )}
                  </li>
                ) : (
                  <div className="flex flex-row gap-6">
                  <li>
                    <Link to="/login">
                      <Button variant="contained" color="inherit">
                        Login
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <Button variant="contained">Register</Button>
                    </Link>
                  </li>
                </div>
                )}
          </div>
        </ul>
      )}
    </>
  );
}

export default Nav;
