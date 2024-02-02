"use client";
import Image from "next/image";

export const CategoryListItems = ({ data }) => {
  return (
    <>
      {data.img_url ? (
        <div className="mb-2 flex items-center justify-center overflow-hidden box-border h-36 w-36 rounded-full border border-gray-600">
          <Image
            src={data.img_url}
            alt="Category"
            className="block object-cover h-full object-center"
            width={184}
            height={184}
          />
        </div>
      ) : (
        <div className="mb-2 flex items-center justify-center overflow-hidden box-border h-36 w-36 rounded-full border border-gray-600">
          <Image
            src={"/images/noImageIcon.jpg"}
            alt="Category"
            className="block object-cover h-full object-center"
            width={184}
            height={184}
          />
        </div>
      )}
      <p className="text-center">{data.title}</p>
    </>
  );
};
