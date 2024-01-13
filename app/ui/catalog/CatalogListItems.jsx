"use client";
import Image from "next/image";
import Link from "next/link";

export const CatalogListItems = ({ car }) => {
  //   const url = car.img_url;
  //   console.log(url);
  //   console.log(car);
  return (
    <div>
      <div className="mb-2 relative flex items-center justify-center overflow-hidden block w-[274px] h-[254px] border border-gray-200 ">
        <Image
          src={car.img_url ? car.img_url : "/images/noImageIcon.jpg"}
          alt="Car"
          className="block object-cover h-full object-center"
          width={274}
          height={254}
          priority
        />
      </div>
      <p>Model: {car.make}</p>
      <p>Price $: {car.prise}</p>

      <Link href={`/catalog/${car.id}`}>
        <button className="inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-green-600 hover:bg-green-500">
          View
        </button>
      </Link>
    </div>
  );
};
