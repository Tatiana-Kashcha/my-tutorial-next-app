"use client";
import { usePathname } from "next/navigation";
import { CategoryListItems } from "./CategoryListItems";
import { CategoryListItemsShop } from "./CategoryListItemsShop";
import Link from "next/link";

export function CategoryList({ data, stylization }) {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <>
      <ul className={stylization}>
        {data.map((category) => (
          <li key={category.id} className="cursor-pointer">
            <Link
              href={`/sklep/${category.title
                .toLowerCase()
                .replace(",", "")
                .replaceAll(" ", "-")}`}
            >
              {pathname === "/sklep" ? (
                <CategoryListItemsShop data={category} />
              ) : (
                <CategoryListItems data={category} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// export function CategoryList({ data, stylization }) {
//   return (
//     <>
//       <ul className={stylization}>
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
// }

// export function CategoryList({ data, stylization }) {
//   return (
//     <>
//       <ul className={`${stylization} list-none gap-6`}>
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
// }

// export const CategoryList = ({ data }) => {
//   return (
//     <ul className="mb-[108px] flex overflow-x-auto list-none gap-6">
//       {data.map((category) => (
//         <li key={category.id} className="cursor-pointer">
//           <Link
//             href={`/sklep/${category.title
//               .toLowerCase()
//               .replace(",", "")
//               .replaceAll(" ", "-")}`}
//           >
//             <CategoryListItems data={category} />
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };
