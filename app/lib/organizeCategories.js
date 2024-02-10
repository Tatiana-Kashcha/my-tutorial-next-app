export function organizeCategories(data) {
  const categoryList = [];
  data.forEach((category) => {
    categoryList[category.id] = {
      ...category,
      href: category.name
        .toLowerCase()
        .replaceAll(",", "")
        .replaceAll('"', "")
        .replaceAll(" ", "-"),
      subCategoryList: [],
    };
  });

  data.forEach((category) => {
    if (category.parent_id !== null) {
      categoryList[category.parent_id].subCategoryList.push(
        categoryList[category.id]
      );
    }
  });

  return categoryList.filter((category) => category.parent_id === null);
}

// Це робоча версія !!!!

// export function organizeCategories(data) {
//   const categoryList = [];
//   data.forEach((category) => {
//     categoryList[category.id] = { ...category, subCategoryList: [] };
//   });

//   data.forEach((category) => {
//     if (category.parent_id !== null) {
//       categoryList[category.parent_id].subCategoryList.push(
//         categoryList[category.id]
//       );
//     }
//   });

//   return categoryList.filter((category) => category.parent_id === null);
// }

////////////////////////////////////////////////////////////////////////////
// export function organizeCategories(data) {
//     const categoryMap = [];
//     data.forEach((category) => {
//       categoryMap[category.id] = { ...category, children: [] };
//     });

//     data.forEach((category) => {
//       if (category.parent_id !== null) {
//         categoryMap[category.parent_id].children.push(categoryMap[category.id]);
//       }
//     });

//     return categoryMap.filter((category) => category.parent_id === null);
//   }

////////////////////////////////////////////////////////////////////////////////
// function organizeCategories(data) {
//   // Створення масиву об'єктів категорій за їх id
//   const categoryMap = [];
//   data.forEach((category) => {
//     categoryMap[category.id] = { ...category, children: [] };
//   });

//   // Додавання підкатегорій та підпідкатегорій до відповідних батьківських категорій
//   data.forEach((category) => {
//     if (category.parent_id !== null) {
//       categoryMap[category.parent_id].children.push(categoryMap[category.id]);
//     }
//   });

//   // Повернення кореневих категорій з підкатегоріями (ті, які мають parent_id: null)
//   return categoryMap.filter((category) => category.parent_id === null);
// }
