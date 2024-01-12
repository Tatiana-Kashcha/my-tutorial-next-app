"use client";
// import Image from "next/image";

export const CatalogList = ({ data }) => {
  return (
    <>
      <ul className="mb-4 flex flex-wrap relative list-none gap-5  p-0 mb-0 justify-around">
        {data.map((car) => (
          <li
            key={car.id}
            className="mb-3 rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer"
          >
            <div className="mb-2 flex items-center justify-center overflow-hidden block w-[274px] h-[254px] border border-gray-200 ">
              <img
                src={car.img_url}
                alt="Car"
                className="block object-cover h-full object-center"
              />
            </div>
            <p>Model: {car.make}</p>
            <p>Price $: {car.prise}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
