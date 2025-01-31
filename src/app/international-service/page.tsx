import React from "react";
import TanzaniaImg from "../../../public/images/tanzania.png";
import MalawiImg from "../../../public/images/malawi.jpg";
import MozambaicImg from "../../../public/images/mozambaic.jpg";
import Image from "next/image";
type Props = {};

function page({}: Props) {
  return (
    <section className="flex items-center py-10 bg-gray-100  font-poppins ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto text-left lg:py-10 ">
        <div className="mb-10 text-center">
          <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-primary-500 uppercase">
            international services
          </span>
        </div>
        <div>
          <>
            <h1 className="text-3xl text-center mb-8 font-bold capitalize text-primary-700 lg:mt-14">
              Tanzania
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]  gap-x-6 gap-y-4 mb-6">
              <Image
                src={TanzaniaImg}
                alt="electricity-tower-tanzania"
                className="h-80 object-cover rounded"
              />
              <div className="flex items-center ">
                <div>
                  <h3 className="inline-block mt-3 text-xs font-semibold text-primary-500 uppercase md:text-sm">
                    songea
                  </h3>

                  <p className=" mt-3 text-base leading-7 text-gray-700 block  lg:text-lg ">
                    At Ab Power Ltd, we take pride in being a leading force in
                    the construction and maintenance of electric towers,
                    dedicated to illuminating the landscape of Songea, Tanzania.
                    Our commitment to excellence, safety, and innovation
                    positions us as the preferred partner for all electrical
                    infrastructure needs in the region.
                  </p>
                  <div className="flex flex-wrap items-center mt-3 space-x-2 ">
                    <span className="text-xs font-semibold text-gray-700 uppercase lg:text-base ">
                      <span className="font-medium">BY </span> Tanzania KPTL
                    </span>
                    <span className="text-xs text-gray-700 lg:text-base">
                      |&nbsp; 2023
                    </span>
                  </div>
                </div>
                I
              </div>
            </div>
          </>
          <>
            <h1 className="text-3xl font-bold capitalize text-primary-700 lg:mt-24 mb-8 text-center">
              {" "}
              Malawi
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,30%]   gap-x-6 gap-y-4  mb-6">
              <div className="flex items-center ">
                <div>
                  <h3 className="inline-block mt-3 text-xs font-semibold text-primary-500 uppercase md:text-sm">
                    Blantyre
                  </h3>

                  <p className=" mt-3 text-base leading-7 text-gray-700 block  lg:text-lg ">
                    Our Blantyre Electric Tower Construction Project involves
                    the erection of 600 electric transmission towers spanning
                    200 kilometers. These towers will serve as vital components
                    in the enhancement of the power transmission network,
                    ensuring a reliable and efficient flow of electricity to
                    meet the growing energy demands of Blantyre and its
                    surrounding areas.
                  </p>
                  <div className="flex flex-wrap items-center mt-3 space-x-2 ">
                    <span className="text-xs font-semibold text-gray-700 uppercase lg:text-base ">
                      <span className="font-medium">BY </span> L&T
                    </span>
                    <span className="text-xs text-gray-700 lg:text-base">
                      |&nbsp; 2023
                    </span>
                  </div>
                </div>
              </div>
              <Image
                src={MalawiImg}
                alt="electricity-tower-tanzania"
                className="h-80 object-cover rounded"
              />
            </div>
          </>
          <>
            <h1 className="text-3xl font-bold capitalize text-primary-700 lg:mt-24 mb-8 text-center">
              {" "}
              Mozambique
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr]  gap-x-6 gap-y-4 mb-6">
              <Image
                src={MozambaicImg}
                alt="electricity-tower-tanzania"
                className="h-80 object-cover rounded"
              />
              <div className="flex items-center ">
                <div>
                  <h3 className="inline-block mt-3 text-xs font-semibold text-primary-500 uppercase md:text-sm">
                    mozambique
                  </h3>
                  <p className=" mt-3 text-base leading-7 text-gray-700 block  lg:text-lg ">
                    Embark on a transformative journey in Tanzania with the
                    Tanzania Electric Tower Construction Project, we are proud
                    to be at the forefront of electrifying the nation and
                    building a sustainable future. This project signifies our
                    commitment to delivering cutting-edge solutions for reliable
                    and efficient power distribution.
                  </p>
                  <div className="flex flex-wrap items-center mt-3 space-x-2 ">
                    <span className="text-xs font-semibold text-gray-700 uppercase lg:text-base ">
                      <span className="font-medium">BY </span> L&T
                    </span>
                    <span className="text-xs text-gray-700 lg:text-base">
                      |&nbsp; 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}

export default page;
