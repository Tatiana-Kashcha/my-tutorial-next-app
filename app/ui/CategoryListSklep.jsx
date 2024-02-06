"use client";

import { CategoryListItemsSklep } from "./CategoryListItemsSklep";
import Link from "next/link";

export const CategoryListSklep = ({ data }) => {
  return (
    <>
      <ul className="mb-[100px] w-[1224px] flex flex-wrap list-none gap-6">
        {data.map((category) => (
          <li key={category.id} className="cursor-pointer">
            <Link
              href={`/sklep/${category.title
                .toLowerCase()
                .replace(",", "")
                .replaceAll(" ", "-")}`}
            >
              <CategoryListItemsSklep data={category} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
