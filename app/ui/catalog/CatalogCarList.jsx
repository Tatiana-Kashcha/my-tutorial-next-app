import { CatalogCarListItems } from "./CatalogCarListItems";

export const CatalogCarList = ({ data }) => {
  // console.log(data);
  return (
    <>
      <ul className="mb-4 flex flex-wrap relative list-none gap-5  p-0 justify-around">
        {data.map((car) => (
          <li
            key={car.id}
            className="mb-3 rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer"
          >
            <CatalogCarListItems car={car} />
          </li>
        ))}
      </ul>
    </>
  );
};
