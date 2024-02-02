import { fetchCategory, fetchCatalog1 } from "./lib/actions";
import { Catalog1List } from "./ui/catalog/Catalog1List";
import { CategoryList } from "./ui/CategoryList";

export const metadata = {
  title: "Home",
  description: "My Home Page",
};

export default async function HomePage() {
  const dataCategory = await fetchCategory();
  const dataCatalog1 = await fetchCatalog1();

  return (
    <div className="flex flex-col ">
      <h2 className="mb-4">Home Page</h2>
      <CategoryList data={dataCategory} />
      <Catalog1List data={dataCatalog1} />
    </div>
  );
}
