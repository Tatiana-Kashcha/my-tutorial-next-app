import { fetchCategory, fetchCatalog } from "./lib/actions";
import { Catalog1List } from "./ui/catalog/Catalog1List";
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
      <p className="mb-14 text-center">Przeglądaj według kategorii</p>
      <CategoryList data={dataCategory} />
      <Catalog1List data={dataCatalog} />
    </div>
  );
}
