// export function getUpdateDataSelectValuesId(selectedValues, product) {
//   const titleToProductSelectIdMap = {
//     'Popularne produkty': product?.popular_id,
//     Kolekcja: product?.collection_id,
//     Odcień: product?.color_id,
//     Producent: product?.brand_id,
//     Pojemność: product?.capacity_id,
//     'Dyspersyjna warstwa': product?.disp_id,
//     Gradacja: product?.grad_id,
//     Kraj: product?.country_id,
//     Opakowanie: product?.pack_id,
//   };

//   const titleToSelectIdMap = {
//     'Popularne produkty': 'popular_id',
//     Kolekcja: 'collection_id',
//     Odcień: 'color_id',
//     Producent: 'brand_id',
//     Pojemność: 'capacity_id',
//     'Dyspersyjna warstwa': 'disp_id',
//     Gradacja: 'grad_id',
//     Kraj: 'country_id',
//     Opakowanie: 'pack_id',
//   };

//   const dataSelectValuesId = selectedValues.reduce((acc, item) => {
//     const idKey = titleToSelectIdMap[item.title];
//     console.log(idKey);

//     if (idKey) {
//       acc[idKey] = item.id !== undefined ? item.id : undefined;
//     }
//     return acc;
//   }, {});

//   console.log(dataSelectValuesId);

//   const updateDataSelectValuesId = Object.keys(titleToSelectIdMap).reduce(
//     (acc, key) => {
//       const idKey = titleToSelectIdMap[key];
//       acc[idKey] =
//         dataSelectValuesId[idKey] !== undefined
//           ? dataSelectValuesId[idKey]
//           : titleToProductSelectIdMap[key];
//       return acc;
//     },
//     {}
//   );
//   console.log(updateDataSelectValuesId);

//   return updateDataSelectValuesId;
// }

// використання dataSelectValuesId.hasOwnProperty(idKey) замість dataSelectValuesId[idKey] !== undefined має значення.

// Пояснення
// dataSelectValuesId[idKey] !== undefined
// Цей вираз перевіряє, чи значення властивості idKey в об'єкті dataSelectValuesId не дорівнює undefined.
// Це працює для більшості випадків, але не враховує ситуацію, коли значення властивості спеціально задане як undefined.
// Якщо властивість існує і має значення undefined, цей вираз поверне false, і відповідно, значення в titleToProductSelectIdMap не буде перезаписане.

// dataSelectValuesId.hasOwnProperty(idKey)
// Цей метод перевіряє, чи об'єкт dataSelectValuesId має власну властивість з ключем idKey.
// Він повертає true навіть якщо значення цієї властивості дорівнює undefined. Таким чином, ми
// можемо відрізнити випадок, коли властивість існує з значенням undefined, від випадку, коли властивість взагалі не задана.

export function getUpdateDataSelectValuesId(selectedValues, product) {
  const titleToProductSelectIdMap = {
    "Popularne produkty": product?.popular_id,
    Kolekcja: product?.collection_id,
    Odcień: product?.color_id,
    Producent: product?.brand_id,
    Pojemność: product?.capacity_id,
    "Dyspersyjna warstwa": product?.disp_id,
    Gradacja: product?.grad_id,
    Kraj: product?.country_id,
    Opakowanie: product?.pack_id,
  };

  const titleToSelectIdMap = {
    "Popularne produkty": "popular_id",
    Kolekcja: "collection_id",
    Odcień: "color_id",
    Producent: "brand_id",
    Pojemność: "capacity_id",
    "Dyspersyjna warstwa": "disp_id",
    Gradacja: "grad_id",
    Kraj: "country_id",
    Opakowanie: "pack_id",
  };

  const dataSelectValuesId = selectedValues.reduce((acc, item) => {
    const idKey = titleToSelectIdMap[item.title];
    console.log(idKey);

    if (idKey) {
      acc[idKey] = item.id !== undefined ? item.id : undefined;
    }
    return acc;
  }, {});

  console.log(dataSelectValuesId);

  const updateDataSelectValuesId = Object.keys(titleToSelectIdMap).reduce(
    (acc, key) => {
      const idKey = titleToSelectIdMap[key];
      acc[idKey] = dataSelectValuesId.hasOwnProperty(idKey)
        ? dataSelectValuesId[idKey]
        : titleToProductSelectIdMap[key];
      return acc;
    },
    {}
  );
  console.log(updateDataSelectValuesId);

  return updateDataSelectValuesId;
}
