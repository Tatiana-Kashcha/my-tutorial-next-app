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
      <p className="mb-[72px] text-center">Przeglądaj według kategorii</p>

      <CategoryList data={dataCategory} />
      <CatalogList data={dataCatalog} />
    </div>
  );
}
