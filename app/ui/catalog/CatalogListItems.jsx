import Image from "next/image";
import { MarkerCard } from "./MarkerCard";

export const CatalogListItems = ({ product }) => {
  const price = Number(product.price);
  const discountAmount = (price * product.discount) / 100;
  const discountedPrice = price - discountAmount;

  return (
    <div className="w-[288px] h-[519px]">
      {product.img_url ? (
        <div className="relative flex items-center justify-center overflow-hidden w-[288px] h-[282px]">
          <MarkerCard product={product} />
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
          <MarkerCard product={product} />
          <Image
            src={"/images/noImageIcon.jpg"}
            alt="Product"
            className="block object-cover h-full object-center"
            width={288}
            height={282}
          />
        </div>
      )}
      <div className="p-2 w-[288px] h-[237px] text-center">
        <p className="mb-2">{product.make}</p>
        <p className="mb-2">Price: {price.toFixed(2).replace(".", ",")}zł</p>
        <p className="mb-2">
          DiscountedPrice: {discountedPrice.toFixed(2).replace(".", ",")}zł
        </p>
        <p className="mb-2">{product.quantity}Szt</p>
        <p className="mb-2">({`Zawiera podatek`})</p>
      </div>
    </div>
  );
};
