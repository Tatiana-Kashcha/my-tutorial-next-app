"use client";
import { organizeCategories } from "../lib/organizeCategories";

// Тимчасовий компонент, щоб подивитися структуру категорій та підкатегорій в консолі.
export function CategoryOrganize({ data }) {
  const categoryList = organizeCategories(data);
  console.log(categoryList);

  return (
    <>
      <p>Категорії та підкатегорії дивись тут в консолі</p>
    </>
  );
}
