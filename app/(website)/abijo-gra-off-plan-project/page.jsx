import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Asset1 from "@/assets/his-grace-apartments-asset-1.jpg";
import Asset2 from "@/assets/his-grace-apartments-asset-2.jpg";
import Asset3 from "@/assets/his-grace-apartments-asset-3.jpg";

const Page = () => {
  return (
    <section className="bg-gray-100/70">
      <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-[65vh] px-4 py-6 sm:px-8 sm:py-8">
      <Image
              src={Asset1}
              alt="Harmony Homes NG"
              layout="fill"
              objectFit="cover"
            />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-[#3C0C64]/20"></div>
        <div className="relative">
          <h3 className="text-white text-sm sm:text-lg font-light">
            2 BED Smart Apartments + BQ
          </h3>
          <p className="text-white text-xs font-light mt-2">Abijo GRA Lekki</p>
          <p className="text-white text-xs font-light mt-2">
            Outright | Payment plan
          </p>
          <p className="text-white text-xs font-light mt-2">6 units available</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <h1 className="text-[#3C0C64] text-2xl sm:text-4xl text-left sm:text-center font-bold">
          {/* Your <span className="text-yellow-500">Dream</span> Home Awaits */}
          Luxury and security await <br /> make this home yours!
        </h1>
        <p className="w-full max-w-4xl text-gray-700 font-medium text-xs sm:text-sm text-left sm:text-center mt-6 sm:mt-8 mx-auto leading-relaxed">
          Discover the perfect blend of comfort and sophistication in this
          stunning 2-bedroom apartment with a boys&apos; quarters located in a
          well-secured and serene gated estate. Designed to exceed your
          expectations, this home offers everything you need for modern,
          hassle-free living. Perfect for professionals, growing families, or
          anyone who appreciates luxury living in a peaceful community, this
          property offers the perfect balance of privacy and convenience.
          {/* Experience the joy of living in a home where every detail has been
          carefully curated to meet your needs, while also offering unmatched
          security and comfort. Its proximity to key locations like shopping
          malls, schools, hospitals, and recreational centers makes it even more
          desirable. Whether you&apos;re looking for a family home or a serene
          retreat, this apartment has everything you need to live your best
          life. */}
        </p>

        <div className="flex flex-col md:items-center items-start justify-center gap-5 mt-8 sm:mt-10">
          <Link
            target="_blank"
            href={"https://wa.me/+2348182012345/"}
            className="bg-[#3C0C64] flex items-center gap-2 text-white text-xs sm:text-sm font-medium rounded-lg px-5 sm:px-6 py-3 sm:py-4"
          >
            {/* <GoArrowUpRight size={16} className="mt-0.5" /> */}
            Register Interest
          </Link>
          {/* <p className="text-[#3C0C64] text-sm font-medium">Donwload brochure</p> */}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 mt-20">
          <div className="h-72 relative rounded-lg bg-gray-200 overflow-hidden">
            <Image
              src={Asset1}
              alt="Harmony Homes NG"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-72 relative rounded-lg bg-gray-200 overflow-hidden">
            <Image
              src={Asset2}
              alt="Harmony Homes NG"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-72 relative rounded-lg bg-gray-200 overflow-hidden">
            <Image
              src={Asset3}
              alt="Harmony Homes NG"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-[#3C0C64] text-2xl sm:text-4xl text-left sm:text-center font-bold">
            Pricing Options
          </h3>
          <p className="text-gray-700 font-medium text-xs sm:text-sm text-left sm:text-center mt-5 sm:mt-6">
            Choose the plan that works best for you and <br className="hidden sm:block" /> take the next
            step towards luxury living in a secure, gated estate!{" "}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 mt-12 sm:mt-14">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Outright
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-gray-500 text-sm">
                  Enjoy unbeatable value with our outright payment plan. Secure
                  your dream home today at the best price.
                </p>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {" "}
                    70M{" "}
                  </strong>

                  {/* <span className="text-sm font-medium text-gray-700">
                    /month
                  </span> */}
                </p>

                <Link
                  className="mt-4 block rounded border border-[#3C0C64] bg-[#3C0C64] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#3C0C64] focus:outline-none focus:ring-0 active:text-[#3C0C64] sm:mt-6"
                  target="_blank"
                  href={"https://wa.me/+2348182012345/"}
                >
                  Buy Now
                </Link>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-sm font-medium text-gray-900 sm:text-base">
                  Perks:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      One-time payment{" "}
                    </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      No additional fees{" "}
                    </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      Immediate ownership{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  6 months
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-gray-500 text-sm">
                  This flexible option lets you enjoy the comfort of your new
                  home without the pressure of a lump-sum payment.
                </p>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {" "}
                    74M{" "}
                  </strong>

                  {/* <span className="text-sm font-medium text-gray-700">
                    /month
                  </span> */}
                </p>

                <Link
                  className="mt-4 block rounded border border-[#3C0C64] bg-[#3C0C64] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#3C0C64] focus:outline-none focus:ring active:text-[#3C0C64] sm:mt-6"
                  target="_blank"
                  href={"https://wa.me/+2348182012345/"}
                >
                  Buy Now
                </Link>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-sm font-medium text-gray-900 sm:text-base">
                  Perks:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      Affordable installments{" "}
                    </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      Flexible schedule{" "}
                    </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      Ownership upon completion{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  12 months
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-gray-500 text-sm">
                  Spread the cost over 12 months. Take advantage of the most
                  flexible payment plan available.
                </p>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {" "}
                    78M{" "}
                  </strong>

                  {/* <span className="text-sm font-medium text-gray-700">
                    /month
                  </span> */}
                </p>

                <Link
                  className="mt-4 block rounded border border-[#3C0C64] bg-[#3C0C64] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#3C0C64] focus:outline-none focus:ring active:text-[#3C0C64] sm:mt-6"
                  target="_blank"
                  href={"https://wa.me/+2348182012345/"}
                >
                  Buy Now
                </Link>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-base">
                  Perks:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      Extended timeline{" "}
                    </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      Budget-friendly payments{" "}
                    </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-[#3C0C64]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-500 text-sm">
                      {" "}
                      Convenient and stress-free{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
