"use client";

import { CategoryListItems } from "./CategoryListItems";
import Link from "next/link";

export function CategoryList({ data, stylization }) {
  return (
    <>
      <ul className={`${stylization} list-none gap-6`}>
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
}

// import { CategoryListItems } from "./CategoryListItems";
// import Link from "next/link";

// export const CategoryList = ({ data }) => {
//   return (
//     <>
//       <ul className="mb-[108px] flex overflow-x-auto list-none gap-6">
//         {data.map((category) => (
//           <li key={category.id} className="cursor-pointer">
//             <Link
//               href={`/sklep/${category.title
//                 .toLowerCase()
//                 .replace(",", "")
//                 .replaceAll(" ", "-")}`}
//             >
//               <CategoryListItems data={category} />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
