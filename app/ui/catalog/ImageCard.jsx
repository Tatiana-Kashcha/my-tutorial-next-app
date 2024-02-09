import Image from "next/image";
import { MarkerCard } from "./MarkerCard";

export function ImageCard({ product }) {
  const stylizationMarkerCardText = "text-center text-white";
  const stylizationMarkerCardDiv =
    "absolute left-[-118px] top-[15px] -rotate-45 w-full";

  return (
    <>
      {product.img_url ? (
        <div className="relative flex items-center justify-center overflow-hidden w-[288px] h-[282px]">
          <MarkerCard
            product={product}
            stylizationText={stylizationMarkerCardText}
            stylizationDiv={stylizationMarkerCardDiv}
          />
          <Image
            src={product.img_url[0]}
            alt="Product"
            className="block object-cover h-full object-center"
            width={288}
            height={282}
          />
        </div>
      ) : (
        <div className="relative flex items-center justify-center overflow-hidden w-[288px] h-[282px]">
          <MarkerCard
            product={product}
            stylizationText={stylizationMarkerCardText}
            stylizationDiv={stylizationMarkerCardDiv}
          />
          <Image
            src={"/images/noImageIcon.jpg"}
            alt="Product"
            className="block object-cover h-full object-center"
            width={288}
            height={282}
          />
        </div>
      )}
    </>
  );
}
