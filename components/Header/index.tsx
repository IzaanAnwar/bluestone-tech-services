"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SVGAttributes, useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  console.log({ sticky });

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center  ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent "
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8 "
                }  `}
              >
                <BlueStoneLogo fill="currentColor" />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : `text-dark hover:text-primary dark:text-white dark:hover:text-white/70`
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-base  text-dark group-hover:text-primary dark:text-white dark:hover:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* <Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link> */}
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

function BlueStoneLogo(props: SVGAttributes<SVGAElement>) {
  return (
    <svg
      viewBox="287.967 108.966 90.953 12.875"
      width="90.953"
      height="12.875"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 290.308 116.578 L 290.308 118.919 L 293.819 118.919 C 293.978 118.919 294.128 118.891 294.267 118.833 C 294.404 118.777 294.531 118.69 294.643 118.573 C 294.755 118.461 294.841 118.334 294.9 118.195 C 294.96 118.058 294.989 117.908 294.989 117.749 C 294.989 117.585 294.96 117.435 294.9 117.298 C 294.841 117.162 294.755 117.037 294.643 116.925 C 294.531 116.808 294.404 116.72 294.267 116.664 C 294.128 116.607 293.978 116.578 293.819 116.578 L 290.308 116.578 Z M 287.967 111.897 L 287.967 109.556 L 293.819 109.556 C 294.301 109.556 294.749 109.642 295.161 109.815 C 295.575 109.987 295.954 110.244 296.3 110.586 C 296.642 110.928 296.899 111.306 297.071 111.718 C 297.244 112.131 297.33 112.58 297.33 113.067 C 297.33 113.517 297.255 113.938 297.105 114.328 C 296.956 114.72 296.731 115.081 296.431 115.408 C 296.731 115.736 296.956 116.096 297.105 116.487 C 297.255 116.878 297.33 117.3 297.33 117.749 C 297.33 118.231 297.244 118.681 297.071 119.094 C 296.899 119.509 296.642 119.888 296.3 120.23 C 295.954 120.572 295.575 120.829 295.161 121.001 C 294.749 121.174 294.301 121.26 293.819 121.26 L 287.967 121.26 L 287.967 114.238 L 293.819 114.238 C 293.978 114.238 294.128 114.21 294.267 114.152 C 294.404 114.096 294.531 114.008 294.643 113.891 C 294.755 113.779 294.841 113.652 294.9 113.514 C 294.96 113.376 294.989 113.226 294.989 113.067 C 294.989 112.904 294.96 112.754 294.9 112.616 C 294.841 112.481 294.755 112.356 294.643 112.243 C 294.531 112.126 294.404 112.039 294.267 111.983 C 294.128 111.925 293.978 111.897 293.819 111.897 L 287.967 111.897 Z M 298.5 109.556 L 300.841 109.556 L 300.841 118.919 L 306.693 118.919 L 306.693 121.26 L 298.5 121.26 L 298.5 109.556 Z M 307.864 116.578 L 307.864 109.556 L 310.204 109.556 L 310.204 116.578 C 310.204 116.902 310.261 117.201 310.374 117.477 C 310.487 117.754 310.658 118.006 310.888 118.236 C 311.117 118.465 311.37 118.637 311.646 118.749 C 311.922 118.863 312.222 118.919 312.545 118.919 C 312.868 118.919 313.168 118.863 313.442 118.749 C 313.718 118.637 313.968 118.465 314.193 118.236 C 314.422 118.006 314.596 117.754 314.711 117.477 C 314.828 117.201 314.886 116.902 314.886 116.578 L 314.886 109.556 L 317.227 109.556 L 317.227 116.578 C 317.227 116.888 317.197 117.192 317.136 117.49 C 317.075 117.79 316.983 118.081 316.862 118.367 C 316.627 118.947 316.29 119.453 315.85 119.884 C 315.63 120.104 315.395 120.299 315.142 120.467 C 314.889 120.637 314.619 120.782 314.333 120.904 C 314.048 121.021 313.756 121.11 313.456 121.17 C 313.158 121.23 312.854 121.26 312.545 121.26 C 312.231 121.26 311.926 121.23 311.626 121.17 C 311.326 121.11 311.033 121.021 310.748 120.904 C 310.462 120.782 310.193 120.637 309.94 120.467 C 309.688 120.299 309.451 120.104 309.23 119.884 C 308.79 119.453 308.453 118.947 308.219 118.367 C 308.098 118.081 308.009 117.79 307.951 117.49 C 307.892 117.192 307.864 116.888 307.864 116.578 Z M 318.397 111.897 L 318.397 109.556 L 326.59 109.556 L 326.59 111.897 L 318.397 111.897 Z M 326.59 114.238 L 326.59 116.578 L 320.738 116.578 L 320.738 118.919 L 326.59 118.919 L 326.59 121.26 L 318.397 121.26 L 318.397 114.238 L 326.59 114.238 Z M 328.912 118.17 C 328.949 118.226 329.032 118.297 329.158 118.382 C 329.286 118.467 329.459 118.568 329.679 118.685 C 329.918 118.807 330.166 118.902 330.426 118.969 C 330.683 119.036 330.953 119.074 331.234 119.079 L 331.309 119.079 C 331.491 119.079 331.672 119.061 331.85 119.027 C 332.03 118.993 332.208 118.938 332.385 118.863 C 332.559 118.788 332.691 118.685 332.783 118.554 C 332.876 118.423 332.924 118.264 332.929 118.077 L 332.929 118.039 C 332.929 117.889 332.896 117.747 332.829 117.613 C 332.76 117.479 332.657 117.356 332.517 117.243 C 332.376 117.126 332.225 117.014 332.061 116.905 C 331.897 116.797 331.721 116.691 331.533 116.588 C 331.346 116.485 331.154 116.383 330.958 116.285 C 330.761 116.185 330.56 116.087 330.354 115.989 C 330.106 115.881 329.871 115.761 329.65 115.63 C 329.427 115.497 329.216 115.352 329.015 115.193 C 328.813 115.038 328.635 114.871 328.48 114.693 C 328.322 114.514 328.186 114.322 328.069 114.116 C 327.966 113.924 327.89 113.718 327.838 113.497 C 327.787 113.277 327.76 113.039 327.76 112.787 L 327.76 112.656 C 327.769 112.337 327.824 112.036 327.922 111.752 C 328.021 111.468 328.163 111.204 328.35 110.961 C 328.537 110.713 328.757 110.494 329.009 110.305 C 329.261 110.117 329.544 109.954 329.857 109.818 C 330.152 109.692 330.457 109.597 330.772 109.531 C 331.085 109.467 331.412 109.435 331.749 109.435 L 331.889 109.435 C 332.769 109.463 333.518 109.669 334.136 110.052 C 334.281 110.142 334.403 110.221 334.501 110.293 C 334.6 110.363 334.675 110.427 334.726 110.483 L 333.659 112.449 C 333.64 112.417 333.573 112.37 333.457 112.309 C 333.342 112.248 333.181 112.173 332.975 112.084 C 332.769 112 332.573 111.934 332.385 111.889 C 332.198 111.842 332.02 111.817 331.852 111.813 L 331.777 111.813 C 331.594 111.813 331.423 111.836 331.263 111.881 C 331.103 111.928 330.953 111.995 330.812 112.084 C 330.672 112.173 330.564 112.281 330.491 112.407 C 330.416 112.534 330.377 112.679 330.373 112.843 L 330.373 112.852 C 330.373 113.02 330.41 113.169 330.485 113.295 C 330.56 113.423 330.672 113.531 330.822 113.62 C 330.972 113.704 331.14 113.793 331.328 113.883 C 331.515 113.974 331.721 114.064 331.945 114.153 C 332.058 114.2 332.178 114.251 332.304 114.306 C 332.431 114.362 332.563 114.42 332.704 114.481 C 333.008 114.617 333.292 114.762 333.554 114.918 C 333.818 115.072 334.062 115.239 334.286 115.417 C 334.506 115.595 334.7 115.782 334.868 115.981 C 335.035 116.177 335.176 116.386 335.288 116.606 C 335.396 116.812 335.475 117.032 335.528 117.263 C 335.58 117.496 335.606 117.739 335.606 117.992 L 335.606 118.076 C 335.588 118.788 335.372 119.397 334.96 119.902 C 334.754 120.155 334.516 120.38 334.245 120.573 C 333.974 120.768 333.673 120.932 333.34 121.063 C 333.036 121.189 332.718 121.285 332.387 121.35 C 332.055 121.414 331.711 121.447 331.356 121.447 L 331.168 121.447 C 330.686 121.428 330.229 121.364 329.798 121.257 C 329.366 121.148 328.959 120.993 328.575 120.791 C 328.2 120.595 327.938 120.417 327.788 120.258 L 328.912 118.17 Z M 346.149 109.556 L 346.149 111.897 L 342.638 111.897 L 342.638 121.26 L 340.297 121.26 L 340.297 111.897 L 336.786 111.897 L 336.786 109.556 L 346.149 109.556 Z M 353.171 121.26 C 352.783 121.26 352.402 121.223 352.028 121.149 C 351.653 121.074 351.285 120.965 350.924 120.82 C 350.569 120.67 350.232 120.489 349.915 120.278 C 349.596 120.066 349.3 119.823 349.024 119.547 C 348.752 119.275 348.512 118.98 348.301 118.663 C 348.091 118.345 347.91 118.006 347.76 117.646 C 347.61 117.285 347.499 116.92 347.427 116.547 C 347.356 116.176 347.32 115.797 347.32 115.408 C 347.32 115.02 347.356 114.639 347.427 114.264 C 347.499 113.891 347.61 113.526 347.76 113.17 C 347.91 112.81 348.091 112.471 348.301 112.153 C 348.512 111.836 348.752 111.541 349.024 111.27 C 349.3 110.994 349.596 110.75 349.915 110.538 C 350.232 110.327 350.569 110.146 350.924 109.996 C 351.285 109.851 351.653 109.742 352.028 109.667 C 352.402 109.594 352.783 109.556 353.171 109.556 C 353.556 109.556 353.935 109.594 354.308 109.667 C 354.682 109.742 355.049 109.851 355.409 109.996 C 355.77 110.146 356.107 110.327 356.424 110.538 C 356.739 110.75 357.034 110.994 357.31 111.27 C 357.586 111.541 357.83 111.836 358.04 112.153 C 358.251 112.471 358.429 112.81 358.574 113.17 C 358.724 113.526 358.836 113.891 358.911 114.264 C 358.986 114.639 359.024 115.02 359.024 115.408 C 359.024 115.797 358.986 116.176 358.911 116.547 C 358.836 116.92 358.724 117.285 358.574 117.646 C 358.429 118.006 358.251 118.345 358.04 118.663 C 357.83 118.98 357.586 119.275 357.31 119.547 C 357.034 119.823 356.739 120.066 356.424 120.278 C 356.107 120.489 355.77 120.67 355.409 120.82 C 355.049 120.965 354.682 121.074 354.308 121.149 C 353.935 121.223 353.556 121.26 353.171 121.26 Z M 353.171 118.919 C 353.654 118.919 354.102 118.833 354.514 118.66 C 354.927 118.489 355.306 118.231 355.653 117.889 C 355.995 117.548 356.252 117.168 356.424 116.753 C 356.597 116.34 356.683 115.89 356.683 115.408 C 356.683 114.921 356.597 114.472 356.424 114.058 C 356.252 113.646 355.995 113.269 355.653 112.927 C 355.306 112.585 354.927 112.328 354.514 112.156 C 354.102 111.983 353.654 111.897 353.171 111.897 C 352.685 111.897 352.235 111.983 351.822 112.156 C 351.407 112.328 351.027 112.585 350.681 112.927 C 350.339 113.269 350.083 113.646 349.915 114.058 C 349.745 114.472 349.661 114.921 349.661 115.408 C 349.661 115.89 349.745 116.34 349.915 116.753 C 350.083 117.168 350.339 117.548 350.681 117.889 C 351.027 118.231 351.407 118.489 351.822 118.66 C 352.235 118.833 352.685 118.919 353.171 118.919 Z M 362.535 114.678 L 362.535 121.26 L 360.194 121.26 L 360.194 108.966 L 367.216 116.138 L 367.216 109.556 L 369.557 109.556 L 369.557 121.841 L 362.535 114.678 Z M 370.728 111.897 L 370.728 109.556 L 378.92 109.556 L 378.92 111.897 L 370.728 111.897 Z M 378.92 114.238 L 378.92 116.578 L 373.068 116.578 L 373.068 118.919 L 378.92 118.919 L 378.92 121.26 L 370.728 121.26 L 370.728 114.238 L 378.92 114.238 Z"
        fill={props.fill}
        className={props.className}
        id="path52"
        transform="matrix(1, 0, 0, 1, -8.881784197001252e-16, 0)"
      />
    </svg>
  );
}
