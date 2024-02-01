"use client";
import Image from "next/image";

export const Catalog1ListItems = ({ product }) => {
  return (
    <>
      <p className="mb-2">{product.make}</p>
      <p className="mb-2">
        {(product.prise / 100).toFixed(2).replace(".", ",")}zł
      </p>
      <p className="mb-2">Kod: {product.code}</p>

      <div className="mb-4 flex flex-wrap gap-5">
        {product.img_url.map((url) => (
          <div className="flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 ">
            <Image
              src={url ? url : "/images/noImageIcon.jpg"}
              alt="Product"
              className="block object-cover h-full object-center"
              width={274}
              height={254}
            />
          </div>
        ))}
      </div>
    </>
  );
};
