"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import Image from "next/image";
import { LoaderIcon } from "lucide-react";
import { MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePerson, MdOutlinePhone } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { PiHouseLine } from "react-icons/pi";

const Page = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageDisplay, setImageDisplay] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchListing = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/listings/${id}`);
          const listingData = await response?.json();
          console.log(listingData);
          setListing(listingData);
          setImageDisplay(listingData?.images[0]);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchListing();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <LoaderIcon size={40} className="animate-spin text-default" />
      </div>
    );
  }

  return (
    <div className="bg-gray-100/70">
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex items-center gap-3.5 text-gray-500 text-xs font-medium">
            <Link href={"/"}>Home</Link>
            <IoIosArrowForward />
            <Link href={"/listings"}>Listings</Link>
            <IoIosArrowForward />
            <p className="line-clamp-1">{listing?.title}</p>
          </div>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-6 mt-12">
            <div className="col-span-1 md:col-span-2">
              <div className="relative w-full h-[450px] md:h-[700px] rounded-lg overflow-hidden">
                <Image
                  src={imageDisplay}
                  className="rounded-lg"
                  alt="Harmony homes"
                  layout="fill"
                  objectFit="fill"
                  //   objectPosition="center"
                />
              </div>
              <div className="flex items-center gap-4 mt-4 overflow-x-scroll">
                {listing?.images?.map((image, index) => (
                  <div
                    key={index}
                    className={`relative min-w-24 h-24 cursor-pointer rounded-lg overflow-hidden hover:border-4 hover:border-[#3C0C64]/10 transition-all duration-200 ease-in-out ${
                      image === imageDisplay
                        ? "border-4 border-[#3C0C64]/10"
                        : ""
                    }`}
                    onClick={() => setImageDisplay(image)}
                  >
                    <Image
                      src={image}
                      alt="product"
                      layout="fill"
                      objectFit="fill"
                      className={`rounded`}
                      //   objectPosition="center"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-0 w-full overflow-hidden">
                <div className="bg-[#3C0C64] text-white text-center font-semibold px-6 py-4">
                  Contact Agents
                </div>
                <div className="p-6">
                  <span className="text-base font-semibold">
                    {listing?.title}
                  </span>
                  <div className="flex items-center gap-4 text-gray-500 mt-4">
                    <div className="flex items-center gap-2">
                      <PiHouseLine size={16} />
                      <span className="text-xs font-medium capitalize">
                        {listing?.purpose}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineBed size={16} />
                      <span className="text-xs font-medium">
                        {listing?.bedrooms} beds
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BiBath size={16} />
                      <span className="text-xs font-medium">
                        {listing?.bathrooms} baths
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 border border-gray-200 rounded-lg p-4">
                    <p className="text-[15px] font-semibold">
                      Interested in this property?
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Fill the contact form below and our agengts will contact
                      you immediately.
                    </p>
                    <form className="space-y-6 mt-8">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-1">
                          <MdOutlinePerson
                            size={17}
                            fontWeight={"700"}
                            className=""
                          />
                          <label className="text-xs font-semibold">Name</label>
                        </div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter full name"
                          className="text-sm font-medium border border-gray-200 outline-none rounded p-2 placeholder:text-xs"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-1">
                          <MdOutlinePhone
                            size={15}
                            fontWeight={"700"}
                            className=""
                          />
                          <label className="text-xs font-semibold">Phone</label>
                        </div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter phone number"
                          className="text-sm border border-gray-200 outline-none rounded p-2 placeholder:text-xs"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-1">
                          <TbMessage2
                            size={15}
                            fontWeight={"700"}
                            className=""
                          />
                          <label className="text-xs font-semibold">
                            Message
                          </label>
                        </div>
                        <textarea
                          name=""
                          id=""
                          rows={"5"}
                          placeholder="Enter message"
                          className="text-sm border border-gray-200 outline-none rounded p-2 placeholder:text-xs"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full bg-[#3C0C64] text-white text-sm font-semibold rounded-md py-3"
                        >
                          Send
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                          Need faster response? call 08182012345
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
