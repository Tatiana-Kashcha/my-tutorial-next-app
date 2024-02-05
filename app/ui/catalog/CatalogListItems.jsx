"use client";
import Image from "next/image";

export const CatalogListItems = ({ product }) => {
  const price = product.price / 100;
  const discountAmount = (price * product.discount) / 100;
  const discountedPrice = price - discountAmount;

  const newPrice = discountedPrice * 3;
  console.log(newPrice);

  return (
    <>
      <p className="mb-2">id: {product.id}</p>
      <p className="mb-2">{product.make}</p>
      <p className="mb-2">Price: {price.toFixed(2).replace(".", ",")}zł</p>
      <p className="mb-2">Discount: -{product.discount}%</p>
      <p className="mb-2">
        Amount: {discountAmount.toFixed(2).replace(".", ",")}zł
      </p>
      <p className="mb-2">
        DiscountedPrice: {discountedPrice.toFixed(2).replace(".", ",")}zł
      </p>
      <p className="mb-2">Kod: {product.code}</p>
      <p className="mb-2">Producent: {product.brand_title}</p>
      <p className="mb-2">Rodzaj: {product.category_title}</p>
      <p className="mb-2">Odcień: {product.color_title}</p>
      <p className="mb-2">Opakowanie: {product.pack_title}</p>
      <p className="mb-2">Ilość: {product.quantity}Szt</p>

      <div className="flex flex-wrap gap-5">
        {product.img_url ? (
          <div className="flex flex-wrap gap-5">
            {product.img_url.map((url) => (
              <div
                key={url}
                className="flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 "
              >
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
          <div className="flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 ">
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
