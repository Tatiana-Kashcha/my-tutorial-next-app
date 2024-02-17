import { sql } from '@vercel/postgres';

// export async function fetchCatalogByPrice(min = 44, max = 50) {
//   try {
//     const data = await sql`
//       SELECT
//       cat.id, cat.make, cat.price, cat.discount,
//       ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) AS discounted_price,
//       popular.title as popular_title,
//       cat.quantity, cat.img_url
//       FROM public.catalog cat
//       LEFT JOIN public.popular popular ON popular.id = cat.popular_id
//       WHERE discounted_price BETWEEN ${min} AND ${max} //не можно використовувати псевдоніми в умові!
//       ORDER BY id ASC`;

//     const result = data.rows;
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch data.');
//   }
// }

export async function fetchCatalogByPrice(min = 44, max = 50) {
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
    console.log(result);
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
