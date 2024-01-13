import Image from "next/image";
import { fetchCatalog } from "../lib/data";

import { CatalogList } from "../ui/catalog/CatalogList";

export const metadata = {
  title: "Catalog",
  description: "My Catalog Page",
};

export default async function CatalogPage() {
  const CardsCatalog = await fetchCatalog();

  return (
    <div className="flex flex-col ">
      <Image
        src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
        alt="Car"
        width={100}
        height={40}
      />
      <h2 className="mb-4">Catalog Page</h2>

      <CatalogList data={CardsCatalog} />
    </div>
  );
}
