import Image from "next/image";
import React from "react";
import TeamImg from "../../../public/images/team.jpg";
type Props = {};

function page({}: Props) {
  return (
    <section className="py-10 lg:py-20 bg-stone-100 font-poppins ">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="px-4 pl-4 mb-6 border-l-4 border-primary-500">
          <span className="text-sm text-gray-600 uppercase">Who we are?</span>
          <h1 className="mt-2 text-3xl font-black text-primary-700 md:text-5xl ">
            About Us
          </h1>
        </div>
        <p className="pr-4 pl-8 relative mb-5 text-base leading-7 text-gray-500 before:absolute before:left-0 before:top-1  before:w-4 before:h-4 before:bg-primary-600">
          A.B Power (PEP) is one of the leading engineering
          construction companies with over fifteen years of proven experience
          and expertise. A.B Power is executing major projects with comprehensive
          capabilities providing complete solutions covering design, testing,
          fabrication, and erection of transmission lines, railway pipelines,
          road projects on turnkey basis. A.B Power has recently established its
          footprints in India as well as in East Africa's Tanzania, Malawi and
          Mozambique.
        </p>
        <p className="pr-4 pl-8 relative mb-10 text-base leading-7 text-gray-500 before:absolute before:left-0 before:top-1  before:w-4 before:h-4 before:bg-primary-600">
          In India, the company is also running power transmission projects on
          Build, Operate, Own and Maintain (BOOM) model. The company has
          successfully developed four projects, Jhajjar KT Transco Pvt Ltd
          (Haryana), Kalpataru Sapura Transco Pvt Ltd (Madhya Pradesh),
          Laniquidar Transmission Ltd (West Bengal & Bihar) and Kohima-Mariani
          Transmission (Assam & Nagaland). Pa ji is contributing in this also!
          As an integral part of its long-term asset creation goal, A.B power has
          expanded its reach into its subsidiaries, KPTL, KEC, TATA PROJECTS,
          L&T JOTI, STARLIGTH.
        </p>
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="lg:max-w-md">
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white">
                    <span className="text-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">
                      25+
                    </p>
                    <h2 className="text-sm text-gray-700">
                      Projects and Plans
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white">
                    <span className="text-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fillRule="evenodd"
                          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                        />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">
                      1000
                    </p>
                    <h2 className="text-sm text-gray-700">Man Power</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white">
                    <span className="text-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-12 h-12"
                      >
                        <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">
                      4
                    </p>
                    <h2 className="text-sm text-gray-700">Total Countries</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white">
                    <span className="text-primary-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700">
                      15
                    </p>
                    <h2 className="text-sm text-gray-700">Year experience</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <Image
              src={TeamImg}
              className={`w-full h-full object-cover object-top`}
              alt="team-img"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 border-t border-b divide-y">
          <div className="grid py-8 sm:grid-cols-4">
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <h3 className="inline-block text-primary-700 ">
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Tanzania
                  </p>
                </h3>
              </div>
              <p className="text-gray-700">
                Download document to know the company details
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-row justify-end mt-4 sm:mb-0 w-full ">
              <a
                className="rounded-lg overflow-x-hidden relative w-48 h-10 cursor-pointer flex items-center border border-primary-700 bg-primary-700 group hover:bg-primary-800 active:bg-primary-700 active:border-primary-700"
                href="/documents/tanzania.pdf"
                download={"tanzania"}
              >
                <span className="text-gray-200 font-semibold ml-6 transform group-hover:translate-x-20 transition-all duration-300">
                  PDF Document
                </span>
                <span className="absolute right-0 h-full w-10 rounded-lg bg-primary-700 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <svg
                    className="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    view-box="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19" />
                    <line x1="5" x2="19" y1="12" y2="12" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <h3 className="inline-block text-primary-700 ">
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Malawi
                  </p>
                </h3>
              </div>
              <p className="text-gray-700">
                Download document to know the company details
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-row justify-end mt-4 sm:mb-0 w-full ">
              <a
                className="rounded-lg overflow-x-hidden relative w-48 h-10 cursor-pointer flex items-center border border-primary-700 bg-primary-700 group hover:bg-primary-800 active:bg-primary-700 active:border-primary-700"
                href="/documents/malawi.pdf"
                download={"malawi"}
              >
                <span className="text-gray-200 font-semibold ml-6 transform group-hover:translate-x-20 transition-all duration-300">
                  PDF Document
                </span>
                <span className="absolute right-0 h-full w-10 rounded-lg bg-primary-700 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <svg
                    className="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    view-box="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19" />
                    <line x1="5" x2="19" y1="12" y2="12" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <h3 className="inline-block text-primary-700 ">
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Mozambique
                  </p>
                </h3>
              </div>
              <p className="text-gray-700">
                Download document to know the company details
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-row justify-end mt-4 sm:mb-0 w-full ">
              <a
                className="rounded-lg overflow-x-hidden relative w-48 h-10 cursor-pointer flex items-center border border-primary-700 bg-primary-700 group hover:bg-primary-800 active:bg-primary-700 active:border-primary-700"
                href="/documents/mozambique.pdf"
                download={"mozambique"}
              >
                <span className="text-gray-200 font-semibold ml-6 transform group-hover:translate-x-20 transition-all duration-300">
                  PDF Document
                </span>
                <span className="absolute right-0 h-full w-10 rounded-lg bg-primary-700 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <svg
                    className="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    view-box="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19" />
                    <line x1="5" x2="19" y1="12" y2="12" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <h3 className="inline-block text-primary-700 ">
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Domestic
                  </p>
                </h3>
              </div>
              <p className="text-gray-700">
                Download document to know the company details
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-row justify-end mt-4 sm:mb-0 w-full ">
              <a
                className="rounded-lg overflow-x-hidden relative w-48 h-10 cursor-pointer flex items-center border border-primary-700 bg-primary-700 group hover:bg-primary-800 active:bg-primary-700 active:border-primary-700"
                href="/documents/paaji-enterprises.pdf"
                download={"paaji-enterprises"}
              >
                <span className="text-gray-200 font-semibold ml-6 transform group-hover:translate-x-20 transition-all duration-300">
                  PDF Document
                </span>
                <span className="absolute right-0 h-full w-10 rounded-lg bg-primary-700 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                  <svg
                    className="svg w-8 text-white"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    view-box="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="5" y2="19" />
                    <line x1="5" x2="19" y1="12" y2="12" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
