import Image from "next/image";
import Tata from "../../../public/images/tata.png";
import Adani from "../../../public/images/adani.png";
import Kec from "../../../public/images/kec_international.png";
import Ige from "../../../public/images/ige_logo.png";
import Cabcon from "../../../public/images/cabcon.jpeg";
import Kalpataru from "../../../public/images/kalpataru.png";
import LAndT from "../../../public/images/l&t.png";

export const OurClients = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-center mb-12 lg:mb-20 font-sans text-3xl font-bold tracking-tight text-primary-700 sm:text-4xl sm:leading-none uppercase">
        Our Clients
      </h2>
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="p-8 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-32 h-40 mx-auto mb-4">
              <Image src={Tata} className="" alt="tata" />
            </div>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-52 h-40 mx-auto mb-4">
              <Image src={Adani} className="" alt="tata" />
            </div>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-60 h-40 mx-auto mb-4">
              <Image src={Kec} className="" alt="tata" />
            </div>
          </div>
        </div>
        <div className="p-8 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-60 h-40 mx-auto mb-4">
              <Image src={Ige} className="" alt="tata" />
            </div>
          </div>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-32  h-32 mx-auto mb-4">
              <Image src={LAndT} className="" alt="tata" />
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-60 h-40 mx-auto mb-4">
              <Image src={Kalpataru} className="" alt="tata" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row w-full border-t border-b lg:border-b-0 items-center justify-center ">
        <div className="p-8 mx-auto  lg:border-x lg:w-1/3">
          <div className="text-center">
            <div className="flex items-center justify-center  h-40 mx-auto mb-4">
              <Image
                src={Cabcon}
                alt="tata"
                className={`max-w-md`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
