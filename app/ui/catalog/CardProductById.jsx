"use client";
import Image from "next/image";

export const CardProductById = ({ data }) => {
  // console.log(data);

  return (
    <div className="flex items-center justify-center">
      {data.map((product) => (
        <div key={product.id}>
          <div className="mb-4 flex flex-wrap gap-5 p-0 ">
            <div className="relative flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 ">
              <Image
                src={
                  product.img_url1
                    ? product.img_url1
                    : "/images/noImageIcon.jpg"
                }
                alt="Car"
                className="block object-cover h-full object-center"
                width={274}
                height={254}
                // priority
              />
            </div>
            <div className="relative flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 ">
              <Image
                src={
                  product.img_url2
                    ? product.img_url2
                    : "/images/noImageIcon.jpg"
                }
                alt="Car"
                className="block object-cover h-full object-center"
                width={274}
                height={254}
                // priority
              />
            </div>
            <div className="relative flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 ">
              <Image
                src={
                  product.img_url3
                    ? product.img_url3
                    : "/images/noImageIcon.jpg"
                }
                alt="Car"
                className="block object-cover h-full object-center"
                width={274}
                height={254}
                // priority
              />
            </div>
            <div className="relative flex items-center justify-center overflow-hidden w-[274px] h-[254px] border border-gray-200 ">
              <Image
                src={
                  product.img_url4
                    ? product.img_url4
                    : "/images/noImageIcon.jpg"
                }
                alt="Car"
                className="block object-cover h-full object-center"
                width={274}
                height={254}
                // priority
              />
            </div>
          </div>
          <p>Model: {product.make}</p>
          <p>Price $: {product.prise}</p>
        </div>
      ))}
    </div>
  );
};
