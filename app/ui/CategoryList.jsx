"use client";

import { CategoryListItems } from "./CategoryListItems";

export const CategoryList = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul className="mb-6 flex overflow-x-auto list-none gap-6">
        {data.map((category) => (
          <li key={category.id} className="cursor-pointer">
            <CategoryListItems data={category} />
          </li>
        ))}
      </ul>
    </>
  );
};
