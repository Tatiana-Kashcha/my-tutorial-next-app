"use client";

import { CatalogListItems } from "./CatalogListItems";

export const CatalogList = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul className="mb-4 flex flex-wrap list-none gap-5">
        {data.map((product) => (
          <li
            key={product.id}
            className="rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer"
          >
            <CatalogListItems product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};
