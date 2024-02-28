import { fetchCategory, fetchCatalog } from "./lib/actions";
import { CatalogList } from "./ui/catalog/CatalogList";
import { CategoryList } from "./ui/CategoryList";

export const metadata = {
  title: "Home",
  description: "My Home Page",
};

export default async function HomePage() {
  const dataCategory = await fetchCategory();

  // const dataCatalogAll = await fetchCatalogAll();
  const dataCatalog = await fetchCatalog();

  const stylizationCategoryList =
    "mb-[108px] flex overflow-x-auto list-none gap-6";

  return (
    <div className="flex flex-col ">
      <h2 className="mb-4">Home Page</h2>

      <h2 className="mb-[72px] text-center">Przeglądaj według kategorii</h2>
      <CategoryList data={dataCategory} stylization={stylizationCategoryList} />

      <CatalogList data={dataCatalog} />
    </div>
  );
}
