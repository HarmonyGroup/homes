"use client";

import { useEffect, useState } from "react";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { TbCloudSearch } from "react-icons/tb";
import { IoList } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import Link from "next/link";

const Page = () => {
  const [fetchinglistings, setFetchingListings] = useState(true);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    try {
      const response = await fetch("/api/listings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Error fetching products!");
      }

      const data = await response.json();
      console.log(data);

      setListings(data.reverse());
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setFetchingListings(false);
    }
  };

  return (
    <div>
      <section className="bg-[#3C0C64]/5">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-[#3C0C64] md:text-3xl">
              Find a property
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label className="sr-only">Email</label>

                <input
                  type="text"
                  placeholder="Enter keywords here..."
                  className="w-full rounded-full border-gray-200 bg-white p-3 text-gray-700 text-sm shadow-sm transition focus:border-white focus:outline-none px-4"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#3C0C64] px-5 py-3 text-white transition focus:outline-none sm:mt-0 sm:w-auto"
              >
                <IoSearch />
                <span className="text-sm font-medium"> Search </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-20 md:py-24">
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <p className="text-gray-500 text-xs md:text-sm">
              Showing 0 - 0 of 0 properties
            </p>
          </div>
        </div> */}
        {listings?.length > 0 ? (
          <ul className="grid gap-12 md:gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {listings?.map((listing) => (
              <li key={listing?._id} className="relative">
                <Link href={`/listings/${listing?._id}`} className="group block overflow-hidden">
                  <img
                    src={listing.images[0]}
                    alt=""
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px] rounded-md overflow-hidden"
                  />
                  <div className="relative bg-white pt-3 mt-4 md:mt-5">
                    <span className="text-[#3C0C64] bg-[#3C0C64]/10 text-xs md:text-sm capitalize font-bold rounded-full px-5 py-2">
                      {listing?.purpose}
                    </span>
                    <h3 className="text-sm md:text-base font-semibold mt-5 md:mt-6">
                      {listing?.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-3">
                      <IoLocationSharp className="text-gray-500" size={15} />
                      <span className="text-gray-500 font-medium text-sm">
                        {listing?.address}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 text-center py-56 md:py-36">
            <div className="bg-[#3C0C64]/5 rounded-full p-3">
              <TbCloudSearch size={40} className="text-[#3C0C64]/30" />
            </div>
            <h4 className="text-lg font-bold text-[#3C0C64] mt-5">
              No listings found
            </h4>
            <p className="text-gray-500 text-sm">
              Sorry, we couldn&apos;t find any listings. <br /> Kindly check
              back later.
            </p>
          </div>
        )}
        <div></div>
      </section>
    </div>
  );
};

export default Page;
