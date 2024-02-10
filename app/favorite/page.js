import { fetchCategoryAndSubcategory } from "../lib/actions";
// import { organizeCategories } from "../lib/organizeCategories";
import { CategoryOrganize } from "../ui/CategoryOrganize";

export default async function FavoritePage() {
  // Відповідь з бази по переліку категорій та підкатегорій
  const dataCategoryAndSubcategory = await fetchCategoryAndSubcategory();
  console.log(dataCategoryAndSubcategory);

  // Структура категорій та підкатегорій
  // const categoryList = organizeCategories(dataCategoryAndSubcategory);
  // console.log(categoryList);

  return (
    <>
      <p>Favorite Page</p>
      <CategoryOrganize data={dataCategoryAndSubcategory} />
    </>
  );
}
