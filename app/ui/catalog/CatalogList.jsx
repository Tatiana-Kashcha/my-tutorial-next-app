"use client";

import { CatalogListItems } from "./CatalogListItems";

export const CatalogList = ({ data }) => {
  // console.log(data);
  return (
    <>
      <ul className="mb-4 flex flex-wrap relative list-none gap-5  p-0 mb-0 justify-around">
        {data.map((car) => (
          <li
            key={car.id}
            className="mb-3 rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer"
          >
            <CatalogListItems car={car} />
          </li>
        ))}
      </ul>
    </>
  );
};
