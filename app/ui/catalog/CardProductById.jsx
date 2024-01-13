"use client";
import Image from "next/image";

export const CardProductById = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((product) => (
        <div key={product.id}>
          <div className="mb-2 relative flex items-center justify-center overflow-hidden block w-[274px] h-[254px] border border-gray-200 ">
            <Image
              src={
                product.img_url ? product.img_url : "/images/noImageIcon.jpg"
              }
              alt="Car"
              className="block object-cover h-full object-center"
              width={274}
              height={254}
              priority
            />
          </div>
          <p>Model: {product.make}</p>
          <p>Price $: {product.prise}</p>
        </div>
      ))}
    </>
  );
};
