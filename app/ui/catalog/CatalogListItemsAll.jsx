import Image from "next/image";
import { MarkerCard } from "./MarkerCard";

export const CatalogListItemsAll = ({ product }) => {
  const price = Number(product.price);
  const discountAmount = (price * product.discount) / 100;
  const discountedPrice = price - discountAmount;

  // const newPrice = discountedPrice * 3;
  const newPrice = discountedPrice + discountedPrice + discountedPrice;
  const stylizationMarkerCardText = "text-center text-white";
  const stylizationMarkerCardDiv =
    "absolute left-[-118px] top-[15px] -rotate-45 w-full";
  console.log(product);

  return (
    <>
      <p className="mb-2">id: {product.id}</p>
      <p className="mb-2">{product.make}</p>
      <p className="mb-2">Price: {price.toFixed(2).replace(".", ",")}zł</p>
      <p className="mb-2">Discount: -{product.discount}%</p>
      <p className="mb-2">
        DiscountAmount: {discountAmount.toFixed(2).replace(".", ",")}zł --
        {discountAmount}zł
      </p>
      <p className="mb-2">
        DiscountedPrice: {discountedPrice.toFixed(2).replace(".", ",")}zł --
        {discountedPrice}zł
      </p>
      <p className="mb-2">
        DiscountedPrice * 3: {newPrice.toFixed(2).replace(".", ",")}zł --
        {newPrice}zł
      </p>
      <p className="mb-2">Kod: {product.code}</p>
      <p className="mb-2">Producent: {product.brand_title}</p>
      <p className="mb-2">Rodzaj: {product.category_title}</p>
      <p className="mb-2">Odcień: {product.color_title}</p>
      <p className="mb-2">Opakowanie: {product.pack_title}</p>
      <p className="mb-2">Ilość: {product.quantity}Szt</p>
      <p>{product.popular_title}</p>

      <div className="flex flex-wrap gap-5">
        {product.img_url ? (
          <div className="flex flex-wrap gap-5">
            {product.img_url.map((url) => (
              <div
                key={url}
                className="relative flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 "
              >
                <MarkerCard
                  product={product}
                  stylizationText={stylizationMarkerCardText}
                  stylizationDiv={stylizationMarkerCardDiv}
                />
                <Image
                  src={url}
                  alt="Product"
                  className="block object-cover h-full object-center"
                  width={274}
                  height={254}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 ">
            <MarkerCard
              product={product}
              stylizationText={stylizationMarkerCardText}
              stylizationDiv={stylizationMarkerCardDiv}
            />
            <Image
              src={"/images/noImageIcon.jpg"}
              alt="Product"
              className="block object-cover h-full object-center"
              width={274}
              height={254}
            />
          </div>
        )}
      </div>
    </>
  );
};
