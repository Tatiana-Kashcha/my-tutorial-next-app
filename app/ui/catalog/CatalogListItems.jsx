"use client";
import Image from "next/image";

export const CatalogListItems = ({ car }) => {
  const url = car.img_url;
  console.log(url);
  return (
    <div>
      <div className="mb-2 flex items-center justify-center overflow-hidden block w-[274px] h-[254px] border border-gray-200 ">
        <Image
          src={car.img_url ? car.img_url : "/images/noImageIcon.jpg"}
          alt="Car"
          className="block object-cover h-full object-center"
          width={274}
          height={254}
        />
        {/* <img
          src={url}
          alt="Car"
          className="block object-cover h-full object-center"
          width={274}
          height={254}
        /> */}
      </div>
      <p>Model: {car.make}</p>
      <p>Price $: {car.prise}</p>
    </div>
  );
};
