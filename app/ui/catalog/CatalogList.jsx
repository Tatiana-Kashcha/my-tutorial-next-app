"use client";
import Image from "next/image";
import { CatalogListItems } from "./CatalogListItems";

export const CatalogList = ({ data }) => {
  return (
    <>
      <ul className="mb-4 flex flex-wrap relative list-none gap-5  p-0 mb-0 justify-around">
        {data.map((car) => (
          <li
            key={car.id}
            className="mb-3 rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer"
          >
            <CatalogListItems car={car} />
            <Image
              src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
              alt="Car"
              width={100}
              height={40}
              // priority
            />
          </li>
        ))}
      </ul>
    </>
  );
};
