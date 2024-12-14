"use client";

import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import Link from "next/link";
import { PiMagnifyingGlass } from "react-icons/pi";

const Listings = () => {
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
        console.log("Error fetching listings!");
      }

      const data = await response.json();
      console.log(data);

      setListings(data.reverse());
    } catch (error) {
      console.log(`${error}`);
    } finally {
      setFetchingListings(false);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl text-center">
            Recent Listings
          </h2>
        </header>

        {fetchinglistings || listings?.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-8 mt-14">
            <div className="bg-[#3C0C64]/5 size-10 rounded-full p-3 animate__animated animate__pulse animate__infinite animate__slow">
              <PiMagnifyingGlass
                size={40}
                className="text-[#3C0C64]/40 mt-1 ml-1"
              />
            </div>
            <p className="text-sm font-medium">
              Looking for available listings...
            </p>
          </div>
        ) : (
          <ul className="mt-14 grid gap-12 md:gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {listings?.map((listing) => (
              <li key={listing?._id} className="relative">
                <Link
                  href={`listings/${listing?._id}`}
                  className="group block overflow-hidden"
                >
                  <img
                    src={listing.images[0]}
                    alt=""
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px] rounded-md overflow-hidden"
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
        )}
      </div>
    </section>
  );
};

export default Listings;
