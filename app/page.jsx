import { fetchCategory, fetchCatalog } from "./lib/actions";
import { CatalogList } from "./ui/catalog/CatalogList";
import { CategoryList } from "./ui/CategoryList";

export const metadata = {
  title: "Home",
  description: "My Home Page",
};

export default async function HomePage() {
  const dataCategory = await fetchCategory();
  const dataCatalog = await fetchCatalog();

  return (
    <div className="flex flex-col ">
      <h2 className="mb-4">Home Page</h2>

      <div className="mb-[108px]">
        <h2 className="mb-[72px] text-center">Przeglądaj według kategorii</h2>
        <CategoryList data={dataCategory} stylization="flex overflow-x-auto" />
      </div>
      <CatalogList data={dataCatalog} />
    </div>
  );
}
