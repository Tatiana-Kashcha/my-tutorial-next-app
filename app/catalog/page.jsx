import Image from "next/image";
import { fetchCatalog } from "../lib/data";
// import clsx from "clsx";
import { CatalogList } from "../ui/catalog/CatalogList";

export const metadata = {
  title: "Catalog",
  description: "My Catalog Page",
};

export default async function CatalogPage() {
  const CardsCatalog = await fetchCatalog();
  // console.log(CardsCatalog);
  return (
    <div className="flex flex-col ">
      <Image
        src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
        alt="Car"
        width={100}
        height={40}
        // priority
      />
      <h2 className="mb-4">Catalog Page</h2>

      <CatalogList data={CardsCatalog} />

      {/* <div className="flex flex-wrap relative list-none gap-5  p-0 mb-0 justify-around">
        {CardsCatalog.map((fetchCatalog, i) => {
          return (
            <ul
              key={fetchCatalog.id}
              className={clsx(
                " text-decoration-none mt-0 mb-0 ml-0 mr-0 cursor-pointer hover:scale-105 border  shadow-lg hover:shadow-blue-500/50 hover:border-blue-600 rounded-lg border-solid border-gray-300"
              )}
            >
              <li className="  mb-3 rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer">
                <Image
                  src={fetchCatalog.img_url}
                  alt={`${fetchCatalog.prise.toString()}'s profile picture`}
                  className=" block w-[274px] h-[254px]   "
                  width={274}
                  height={254}
                />
                <p className="p-2 px-2 border-t-0 border-r-1 border-b-1 border-l-1 border-eee border-solid">
                  {" "}
                  MODEL:
                  {" " + fetchCatalog.make}
                </p>
                <p className="m-0 p-2 px-2 border-t-0 border-r-1 border-b-1 border-l-1 border-eee border-solid">
                  {" "}
                  PRISE:
                  {" " + "$" + fetchCatalog.prise}
                </p>
              </li>
            </ul>
          );
        })}
      </div> */}
    </div>
  );
}
