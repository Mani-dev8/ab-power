import Image from "next/image";
import Banner1 from "../../public/images/hero.png";
import TrustImg from "../../public/images/trust_img.png";
import OurServices from "../../public/images/our_services.jpg";
import ExperienceImg from "../../public/images/experienceteam.png";
import DotsFrame from "../../public/images/dots-frame.png";
import CeoImg from "../../public/images/ceo.png";
import ClientCentricImg from "../../public/images/client_centric.png";
import SantoshBhaiPatel from "../../public/images/santosh_bhai_patel.jpg";
import BudeshwariPatel from "../../public/images/budeshwari_patel.jpg";
import SafetyImg from "../../public/images/safety.png";
import ContactUs from "../../public/images/contact_us.png";
import ButtonPrimary from "@/components/commons/ButtonPrimary";
import Header from "@/components/commons/Header";
import SliderAutoScroll from "@/components/commons/SliderAutoScroll";
import { OurClients } from "@/components/commons/OurClients";
import Link from "next/link";
export default function Home() {
  const date = new Date().getFullYear();
  return (
    <div className={`h-[calc(100vh-80px)]`}>
      <div className="h-full">
        <div className="h-full absolute top-0  w-full py-12 px-12 bg-primary-900">
          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full ">
            <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-thin uppercase mb-10">
              Welcome to
            </h1>
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold  uppercase">
              A.B Power
            </h1>
            <a href="#trust-partner">
              <ButtonPrimary
                title="Know more"
                className={` mt-20 border-white text-white`}
              />
            </a>
          </div>
          {/* <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
            <a href="/pages/about-us" className="border-b border-white">
              Find out more
            </a>{" "}
            <a href="/contact" className="border-b border-white">
              Get in touch
            </a>
          </div> */}

          <Image
            src={Banner1}
            alt="banner-image"
            className={`w-full h-full absolute inset-0 object-cover opacity-50 `}
          />
        </div>
      </div>
      <div
        id="trust-partner"
        className="grid grid-cols-1 md:grid-cols-2 py-16 lg:px-8 lg:py-20 "
      >
        <div className="bg-white p-4 lg:p-24 flex justify-start items-center">
          <a href="/blog/this-is-latest-post/">
            <Image
              src={TrustImg}
              alt="trust-img"
              className={`h-96 object-cover `}
            />
          </a>
        </div>
        <div className="bg-gray-100 p-4 md:p-24 flex justify-start items-center">
          <div className="max-w-md">
            <div className="w-20 hidden md:block h-1 absolute left-[50.4%] bg-primary-700 mt-4" />
            <h2 className="font-display text-primary-700 font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              Your Trusted Partner in Tower Construction &amp; and Maintenance
            </h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              At A.B Power, we take pride in delivering exceptional tower
              construction and maintenance services that exceed industry
              standards. With a commitment to safety, quality, and innovation,
              we are your trusted partner for all your telecommunication
              infrastructure needs.
            </p>
            <Link
              href="/about-us"
              className="inline-block border-2 border-primary-800 font-light text-primary-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary-800 hover:text-white"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div>
            <Image
              src={CeoImg}
              alt="ceo-image"
              className="object-contain w-full h-56 sm:h-96"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-base tracking-tight text-primary-700 sm:text-4xl sm:leading-none">
                Meet Our CEO -
                <br className="hidden md:block" />
                <span className={`font-bold`}>Nilkanth Mahto,</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                He is committed to driving the company forward, embracing
                technological advancements, and ensuring that A.B Power remains
                a leader in the field.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div className={`flex gap-x-3 items-center `}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-50">
                  <svg
                    className="w-10 h-10 text-primary-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>

                <p className="text-sm text-gray-900">
                  Founder & CEO founded A.B Power with a vision to revolutionize
                  the tower construction and maintenance industry.
                </p>
              </div>
              <div className={`flex gap-x-3 items-center `}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-50">
                  <svg
                    className="w-10 h-10 text-primary-700"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-900">
                  Nilkanth Mahto brings 8 years of expertise to the helm of the
                  company. Under Nilkanth's leadership, A.B Power has achieved
                  great achievements, milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-primary-700 sm:text-4xl sm:leading-none uppercase">
                Our Services
              </h2>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 border-primary-400">
                <div className="h-full p-5 border border-l-0 ">
                  <h6 className="mb-2 text-primary-600 font-semibold leading-5">
                    Tower Construction
                  </h6>
                  <p className="text-sm text-gray-900">
                    Our experienced team specializes in the design and
                    construction of towers for telecommunications, broadcasting,
                    and other industries. From concept to completion, we ensure
                    that your tower is built with precision, efficiency, and
                    adherence to all safety regulations.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 border-primary-400">
                <div className="h-full p-5 border border-l-0 ">
                  <h6 className="mb-2 text-primary-600 font-semibold leading-5">
                    Tower Maintenance
                  </h6>
                  <p className="text-sm text-gray-900">
                    Regular maintenance is crucial to the longevity and
                    performance of your towers. Our skilled technicians conduct
                    thorough inspections, preventive maintenance, and necessary
                    repairs to keep your towers in optimal condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={OurServices} alt="our-services" />
          </div>
        </div>
      </div>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
        <Image
          src={DotsFrame}
          alt="dots-frame-img"
          className={`absolute  opacity-30 lg:opacity-100 -bottom-20 right-0`}
        />
        <h2 className="text-center mb-12 lg:mb-20 font-sans text-3xl font-bold tracking-tight text-primary-700 sm:text-4xl sm:leading-none uppercase">
          Our Management Team
        </h2>
        <div>
          <span className="absolute -right-0 top-1/2 opacity-10 lg:opacity-100 lg:top-10 z-[-1]">
            <svg
              width={150}
              height={150}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                fill="#a7ca6c"
              />
            </svg>
          </span>

          <span className={"absolute top-28 -left-7 z-[-1]"}>
            <svg
              width={150}
              height={200}
              viewBox="0 0 107 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="104.999"
                cy={132}
                r="1.66667"
                transform="rotate(180 104.999 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 104.999 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 104.999 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy={88}
                r="1.66667"
                transform="rotate(180 104.999 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 104.999 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy={45}
                r="1.66667"
                transform="rotate(180 104.999 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy={16}
                r="1.66667"
                transform="rotate(180 104.999 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy={59}
                r="1.66667"
                transform="rotate(180 104.999 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 104.999 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="104.999"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 104.999 1.66665)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 90.3333 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 90.3333 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 90.3333 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 90.3333 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 90.3333 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 90.3333 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 90.3333 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 90.3333 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 90.3333 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="90.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 90.3333 1.66665)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy={132}
                r="1.66667"
                transform="rotate(180 75.6654 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 31.9993 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 75.6654 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 31.9993 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 75.6654 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 31.9993 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy={88}
                r="1.66667"
                transform="rotate(180 75.6654 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 31.9993 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 75.6654 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 31.9993 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy={45}
                r="1.66667"
                transform="rotate(180 75.6654 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 31.9993 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy={16}
                r="1.66667"
                transform="rotate(180 75.6654 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 31.9993 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy={59}
                r="1.66667"
                transform="rotate(180 75.6654 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 31.9993 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 75.6654 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 31.9993 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="75.6654"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 75.6654 1.66665)"
                fill="#a7ca6c"
              />
              <circle
                cx="31.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 31.9993 1.66665)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy={132}
                r="1.66667"
                transform="rotate(180 60.9993 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 17.3333 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 60.9993 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 17.3333 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 60.9993 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 17.3333 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy={88}
                r="1.66667"
                transform="rotate(180 60.9993 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 17.3333 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 60.9993 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 17.3333 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy={45}
                r="1.66667"
                transform="rotate(180 60.9993 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 17.3333 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy={16}
                r="1.66667"
                transform="rotate(180 60.9993 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 17.3333 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy={59}
                r="1.66667"
                transform="rotate(180 60.9993 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 17.3333 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 60.9993 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 17.3333 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="60.9993"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 60.9993 1.66665)"
                fill="#a7ca6c"
              />
              <circle
                cx="17.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 17.3333 1.66665)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy={132}
                r="1.66667"
                transform="rotate(180 46.3333 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy={132}
                r="1.66667"
                transform="rotate(180 2.66536 132)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 46.3333 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy="117.333"
                r="1.66667"
                transform="rotate(180 2.66536 117.333)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 46.3333 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy="102.667"
                r="1.66667"
                transform="rotate(180 2.66536 102.667)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy={88}
                r="1.66667"
                transform="rotate(180 46.3333 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy={88}
                r="1.66667"
                transform="rotate(180 2.66536 88)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 46.3333 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy="73.3333"
                r="1.66667"
                transform="rotate(180 2.66536 73.3333)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy={45}
                r="1.66667"
                transform="rotate(180 46.3333 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy={45}
                r="1.66667"
                transform="rotate(180 2.66536 45)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy={16}
                r="1.66667"
                transform="rotate(180 46.3333 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy={16}
                r="1.66667"
                transform="rotate(180 2.66536 16)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy={59}
                r="1.66667"
                transform="rotate(180 46.3333 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy={59}
                r="1.66667"
                transform="rotate(180 2.66536 59)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 46.3333 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy="30.6666"
                r="1.66667"
                transform="rotate(180 2.66536 30.6666)"
                fill="#a7ca6c"
              />
              <circle
                cx="46.3333"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 46.3333 1.66665)"
                fill="#a7ca6c"
              />
              <circle
                cx="2.66536"
                cy="1.66665"
                r="1.66667"
                transform="rotate(180 2.66536 1.66665)"
                fill="#a7ca6c"
              />
            </svg>
          </span>
        </div>
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div>
            <div className="card">
              <Image
                src={SantoshBhaiPatel}
                alt="santosh-bhai-patel-photo"
                className={`w-44 sm:w-60 object-cover aspect-[3/4] mb-4`}
              />
              <div className="text-primary-900 text-lg lg:text-xl font-bold">
                Santosh Bhai Patel
              </div>
              <div className="text-primary-600">Project Head</div>

              <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
                <i className="fa-brands fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
                <i className="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
                <i className="fa-brands fa-dribbble fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="card relative">
              <Image
                src={DotsFrame}
                alt="dots-frame-img"
                className={`absolute z-[-1]  bottom-28 -left-36 opacity-30`}
              />
              <Image
                src={BudeshwariPatel}
                alt="santosh-bhai-patel-photo"
                className={`w-44 sm:w-60 object-cover aspect-[3/4] mb-4`}
              />
              <div className="text-primary-900 text-lg lg:text-xl font-bold">
                Budeshwari Patel
              </div>
              <div className="text-primary-600">Accounts Head</div>

              <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
                <i className="fa-brands fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
                <i className="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
                <i className="fa-brands fa-dribbble fa-lg cursor-pointer transition duration-200 hover:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*start Our clients */}
      <OurClients />
      {/*end Our clients */}

      {/*  */}
      <div className="mx-auto text-center pt-12 pb-24 md:pt-14 md:pb-28">
        <div className={`max-w-2xl mx-auto `}>
          <div className=" w-24 h-2 bg-primary-800 mb-4 mx-auto" />
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl  text-primary-700 mb-8">
            Why Choose " A.B Power " ?
          </h2>
          <p className={`text-primary-600`}>
            At A.B Power, we bring a wealth of expertise to every project. With
            a track record of successful tower constructions, upgrades, and
            maintenance, our team has the knowledge and experience to ensure
            your project is executed with precision and excellence.
          </p>
        </div>
        <div className="flex flex-wrap bg-black mt-10 lg:mt-20">
          <figure className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 transition-all ease-linear duration-300">
            <div className="relative z-10">Safety First</div>
            <Image
              src={SafetyImg}
              alt="safety"
              className={`absolute inset-0 w-full h-full object-cover opacity-50`}
            />
          </figure>
          <figure className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 transition-all ease-linear duration-300">
            <div className="relative z-10">Client-Centric Approach</div>
            <Image
              src={ClientCentricImg}
              alt="safety"
              className={`absolute inset-0 w-full h-full object-cover opacity-50`}
            />
          </figure>
          <figure className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75 transition-all ease-linear duration-300">
            <div className="relative z-10">Experienced Team</div>
            <Image
              src={ExperienceImg}
              alt="safety"
              className={`absolute inset-0 w-full h-full object-cover opacity-50`}
            />
          </figure>
        </div>
      </div>
      {/*  */}
      <h1 className="text-primary-700 text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 lg:mb-16">
        Lets Build Together
      </h1>
      <div className="relative w-full py-12 px-12 mt-8">
        <div className="relative z-10 text-center py-12 md:py-24">
          <p className="text-white mb-10 text-base md:text-lg  max-w-3xl mx-auto">
            Ready to discuss your tower construction and maintenance needs?
            Contact us today to learn more about how A.B Power can be your
            partner in building and maintaining robust and reliable
            telecommunication infrastructure.
          </p>
          <Link
            href="contact-us"
            className="inline-block bg-primary-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            Contact Us
          </Link>
        </div>
        <Image
          src={ContactUs}
          alt="contact-us"
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
      <div className="bg-primary-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
          <div>
            <div className="text-white opacity-50 text-4xl font-display">
              A.B Power
            </div>
          </div>
          <div>
            <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
              More info
            </div>
            <Link href="/about-us" className="block mb-4">
              About Us
            </Link>{" "}
            <Link href="/projects" className="block mb-4">
              porjects
            </Link>
          </div>
          <div>
            <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
              Helpful Links
            </div>
            <Link href="/contact-us" className="block mb-4">
              Contact Us
            </Link>{" "}
          </div>
          <div>
            <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
              Find out more
            </div>
            <a href="#" className="block mb-4">
              International Service
            </a>{" "}
            <a href="#" className="block mb-4">
              FAQ
            </a>
          </div>
        </div>
        <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-24">
          ©{date} DESIGN BY MANISH MAHTO.
        </div>
      </div>
    </div>
  );
}
