import { fetchCategoryAndSubcategory } from "../lib/actions";
// import { organizeCategories } from "../lib/organizeCategories";
import { CategoryOrganize } from "../ui/CategoryOrganize";

export default async function FavoritePage() {
  const dataCategoryAndSubcategory = await fetchCategoryAndSubcategory();
  // console.log(dataCategoryAndSubcategory);

  // const organizedCategories = organizeCategories(dataCategoryAndSubcategory);
  // console.log(organizedCategories);

  return (
    <>
      <p>Favorite Page</p>
      <CategoryOrganize data={dataCategoryAndSubcategory} />
    </>
  );
}
