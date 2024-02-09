import Image from "next/image";
import IconNoFavorite from "@/public/icons/IconNoFavorite.svg";
import IconFavorite from "@/public/icons/IconFavorite.svg";

export function HeartIconsFavorite({ isFavorite }) {
  return (
    <div className="w-[32px] h-[32px] flex justify-center items-center">
      {isFavorite ? (
        <Image src={IconFavorite} alt="Favorite Icon" width={24} height={24} />
      ) : (
        <Image
          src={IconNoFavorite}
          alt="Not Favorite Icon"
          width={24}
          height={24}
        />
      )}
    </div>
  );
}
