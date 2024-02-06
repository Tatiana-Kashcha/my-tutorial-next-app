"use client";

import { CategoryListItems } from "./CategoryListItems";
import Link from "next/link";

export const CategoryList = ({ data }) => {
  return (
    <>
      <ul className="mb-6 flex overflow-x-auto list-none gap-6">
        {data.map((category) => (
          <li key={category.id} className="cursor-pointer">
            <Link
              href={`/sklep/${category.title
                .toLowerCase()
                .replace(",", "")
                .replaceAll(" ", "-")}`}
            >
              <CategoryListItems data={category} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
