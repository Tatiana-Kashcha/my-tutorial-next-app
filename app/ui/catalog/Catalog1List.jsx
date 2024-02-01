"use client";

import { Catalog1ListItems } from "./Catalog1ListItems";

export const Catalog1List = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul className="mb-4 flex flex-wrap list-none gap-5">
        {data.map((product) => (
          <li
            key={product.id}
            className="mb-3 rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer"
          >
            <Catalog1ListItems product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};