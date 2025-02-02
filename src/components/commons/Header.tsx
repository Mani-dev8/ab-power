"use client";
import React, { useState } from "react";

import ButtonPrimary from "./ButtonPrimary";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div
      className={`bg-white bg-opacity-10 relative z-50 ${
        pathName !== "/" && "border-b border-b-primary-200 pb-1"
      }`}
    >
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative  grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className="lg:flex items-center hidden space-x-8 ">
            {/* <li>
              <Link
                href="/about-us"
                aria-label="Our product"
                title="Our product"
                className={`font-medium tracking-wide ${
                  pathName !== "/" ? "text-primary-700" : "text-white"
                }  transition-colors duration-200 hover:text-primary-900`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                aria-label="Our product"
                title="Our product"
                className={`font-medium tracking-wide ${
                  pathName !== "/" ? "text-primary-700" : "text-white"
                }  transition-colors duration-200 hover:text-primary-900`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/international-service"
                aria-label="Product pricing"
                title="Product pricing"
                className={`font-medium tracking-wide ${
                  pathName !== "/" ? "text-primary-700" : "text-white"
                }  transition-colors duration-200 hover:text-primary-900`}
              >
                International Services
              </Link>
            </li> */}
          </ul>
          <Link
            href="/"
            aria-label="Company"
            title="A.B Power"
            className="inline-flex items-center lg:mx-auto text-primary-800 uppercase text-lg font-semibold"
          >
            <Image
              src={Logo}
              className={`${
                pathName === "/" && "brightness-0 invert"
              } w-16 my-2 lg:my-0 lg:w-[88px]  aspect-video mr-3 `}
              alt="logo"
            />
            {/* A.B Power */}
          </Link>
          <ul className={`items-center hidden ml-auto space-x-8 lg:flex `}>
            <Link
              href={"/contact-us"}
              className={`${pathName === "/contact-us" ? "hidden" : "block"} `}
            >
              <ButtonPrimary
                title="contact us"
                className={`  ${
                  pathName !== "/"
                    ? " border-primary-700 text-primary-700"
                    : "border-white text-white"
                } `}
              />
            </Link>
          </ul>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className={`w-5 ${
                  pathName !== "/" ? "text-primary-700" : "text-white"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full z-50">
          <div className="px-3.5 py-2 bg-white border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Link
                  href="/"
                  aria-label="Company"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <Image
                    src={Logo}
                    className={`w-16 aspect-video mr-3`}
                    alt="logo"
                  />
                  <span className="ml-2 text-xl font-bold tracking-wide text-primary-800 uppercase">
                    A.B Power
                  </span>
                </Link>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-primary-200 focus:bg-primary-200 focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 text-primary-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul className="space-y-5 pb-3">
                {/* <li>
                  <Link
                    href="/projects"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-primary-700 transition-colors duration-200 hover:text-primary-900"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-us"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-primary-700 transition-colors duration-200 hover:text-primary-900"
                  >
                    About Us
                  </Link>
                </li>

                <li
                  className={`${
                    pathName === "/international-section" ? "hidden" : "block"
                  }`}
                >
                  <Link
                    href="/international-service"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-primary-700 transition-colors duration-200 hover:text-primary-900"
                  >
                    International Services
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contact-us"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-primary-700 transition-colors duration-200 hover:text-primary-900"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
