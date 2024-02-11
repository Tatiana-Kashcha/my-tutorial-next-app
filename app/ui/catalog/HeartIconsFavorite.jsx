import { IconNoFavorite } from "@/public/icons/IconNoFavorite";
import { IconFavorite } from "@/public/icons/IconFavorite";

export function HeartIconsFavorite({ isFavorite }) {
  return (
    <div className="fill-[#0B32BF]">
      {isFavorite ? <IconFavorite /> : <IconNoFavorite />}
    </div>
  );
}

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
