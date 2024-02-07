import { CategoryListShop } from "../ui/CategoryListShop";
import { fetchCategory } from "../lib/actions";

export const metadata = {
  title: "Sklep Page",
  description: "This is Sklep Page",
};

export default async function SklepPage() {
  const dataCategory = await fetchCategory();

  return (
    <>
      <div>Sklep Page</div>
      <div>BLOCK OF CATEGORY LINKS</div>

      {/* <CategoryListShop data={dataCategory} /> */}

      <div className="mb-[100px] w-[1224px]">
        <CategoryListShop data={dataCategory} stylization="flex flex-wrap" />
      </div>
    </>
  );
}
