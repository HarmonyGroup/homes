"use client";

import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";

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
    <section>
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl text-center">
            Recent Listings
          </h2>
        </header>

        <ul className="mt-14 grid gap-12 md:gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {listings?.map((listing) => (
            <li key={listing?._id} className="relative">
              <a href="#" className="group block overflow-hidden">
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
              </a>
            </li>
          ))}
          {/* <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Listings;
