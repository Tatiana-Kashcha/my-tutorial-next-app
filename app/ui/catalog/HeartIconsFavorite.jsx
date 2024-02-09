import Image from "next/image";
import iconNoFavorite from "@/public/icons/IconNoFavorite.svg";
import iconFavorite from "@/public/icons/IconFavorite.svg";

export function HeartIconsFavorite({ isFavorite }) {
  return (
    <div className="w-[32px] h-[32px] flex justify-center items-center">
      {isFavorite ? (
        <Image src={iconFavorite} alt="Favorite Icon" width={24} height={24} />
      ) : (
        <Image
          src={iconNoFavorite}
          alt="Not Favorite Icon"
          width={24}
          height={24}
        />
      )}
    </div>
  );
}
