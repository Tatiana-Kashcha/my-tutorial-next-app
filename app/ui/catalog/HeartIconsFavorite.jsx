"use client";
import { useFavorites } from "@/app/lib/useFavorites";
// import { IconNoFavorite } from "@/public/icons/IconNoFavorite";
// import { IconFavorite } from "@/public/icons/IconFavorite";

export function HeartIconsFavorite({ product }) {
  const [, isFavorite, toggleFavorite] = useFavorites();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(product.id);
      }}
      className="cursor-pointer"
    >
      {!isFavorite(product.id) && <p>NoFavorite</p>}
      {isFavorite(product.id) && <p>Favorite</p>}
    </div>
  );
}

// export function HeartIconsFavorite({ product }) {
//   const [, isFavorite, toggleFavorite] = useFavorites();
//   return (
//     // <div
//     //   onClick={(e) => {
//     //     e.stopPropagation();
//     //     toggleFavorite(product.id);
//     //   }}
//     //   className="fill-[#0B32BF] cursor-pointer stroke-[#0B32BF]"
//     // >
//     //   {isFavorite(product.id) ? <IconFavorite /> : <IconNoFavorite />}
//     // </div>

//     <div
//       onClick={(e) => {
//         e.stopPropagation();
//         toggleFavorite(product.id);
//       }}
//       className="cursor-pointer"
//     >
//       {isFavorite(product.id) ? <IconFavorite /> : <IconNoFavorite />}
//     </div>
//   );
// }

// export function HeartIconsFavorite({ isFavorite }) {
//   return (
//     <div className="w-[32px] h-[32px] flex justify-center items-center">
//       {isFavorite ? (
//         <Image src={iconFavorite} alt="Favorite Icon" width={24} height={24} />
//       ) : (
//         <Image
//           src={iconNoFavorite}
//           alt="Not Favorite Icon"
//           width={24}
//           height={24}
//         />
//       )}
//     </div>
//   );
// }
