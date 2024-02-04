import Image from "next/image";
import { fetchCarCatalog } from "../lib/data";

import { CatalogCarList } from "../ui/catalog/CatalogCarList";

export const metadata = {
  title: "Catalog",
  description: "My Catalog Page",
};

export default async function CatalogPage() {
  const CardsCatalog = await fetchCarCatalog();

  return (
    <div className="flex flex-col ">
      <Image
        src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
        alt="Car"
        width={100}
        height={40}
      />
      <h2 className="mb-4">Catalog Page {new Date().toTimeString()}</h2>

      <CatalogCarList data={CardsCatalog} />
    </div>
  );
}
