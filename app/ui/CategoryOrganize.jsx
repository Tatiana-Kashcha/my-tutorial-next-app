"use client";
import { organizeCategories } from "../lib/organizeCategories";

export function CategoryOrganize({ data }) {
  const organizedCategories = organizeCategories(data);
  console.log(organizedCategories);

  return (
    <>
      <p>Категорії та підкатегорії дивись тут в консолі</p>
    </>
  );
}
