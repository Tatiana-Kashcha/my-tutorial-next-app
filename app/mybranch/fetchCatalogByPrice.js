'use server';
import { sql } from '@vercel/postgres';

// export async function fetchCatalogByPrice(formData) {
//   const rawFormData = {
//     price_min: formData.get('price_min'),
//     price_max: formData.get('price_max'),
//   };

//   const { price_min, price_max } = rawFormData;
//   const getPriceMinFilter = Number(price_min);
//   const getPriceMaxFilter = Number(price_max);

//   try {
//     const data = await sql`
//         SELECT
//         cat.id, cat.make, cat.price, cat.discount,
//         ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) AS discounted_price,
//         popular.title as popular_title,
//         cat.quantity, cat.img_url
//         FROM public.catalog cat
//         LEFT JOIN public.popular popular ON popular.id = cat.popular_id
//         WHERE ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) BETWEEN ${getPriceMinFilter} AND ${getPriceMaxFilter}
//         ORDER BY id ASC`;

//     const result = data.rows;
//     return result;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch data.');
//   }
// }

export async function fetchCatalogByPrice(min, max) {
  try {
    const data = await sql`
        SELECT
        cat.id, cat.make, cat.price, cat.discount,
        ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) AS discounted_price,
        popular.title as popular_title,
        cat.quantity, cat.img_url
        FROM public.catalog cat
        LEFT JOIN public.popular popular ON popular.id = cat.popular_id
        WHERE ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) BETWEEN ${min} AND ${max}
        ORDER BY id ASC`;

    const result = data.rows;
    // console.log(result);
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
