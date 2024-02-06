import { CategoryListSklep } from "../ui/CategoryListSklep";
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
      <CategoryListSklep data={dataCategory} />
    </>
  );
}
