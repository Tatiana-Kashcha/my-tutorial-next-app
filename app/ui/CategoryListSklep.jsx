"use client";

import { CategoryListItemsShop } from "./CategoryListItemsShop";
import Link from "next/link";

export function CategoryListSklep({ data, style }) {
  return (
    <>
      <ul className={`flex ${style} list-none gap-6`}>
        {data.map((category) => (
          <li key={category.id} className="cursor-pointer">
            <Link
              href={`/sklep/${category.title
                .toLowerCase()
                .replace(",", "")
                .replaceAll(" ", "-")}`}
            >
              <CategoryListItemsShop data={category} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// export const CategoryListSklep = ({ data }) => {
//   return (
//     <>
//       <ul className="mb-[100px] w-[1224px] flex flex-wrap list-none gap-6">
//         {data.map((category) => (
//           <li key={category.id} className="cursor-pointer">
//             <Link
//               href={`/sklep/${category.title
//                 .toLowerCase()
//                 .replace(",", "")
//                 .replaceAll(" ", "-")}`}
//             >
//               <CategoryListItemsSklep data={category} />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
