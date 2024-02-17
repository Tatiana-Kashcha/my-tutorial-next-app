'use server';

import { sql } from '@vercel/postgres';
// export function gettingPriceFilter(formData) {
//   const rawFormData = {
//     price_min: formData.get('price_min'),
//     price_max: formData.get('price_max'),
//   };

//   const { price_min, price_max } = rawFormData;
//   const getPriseMin = Number(price_min);
//   const getPriseMax = Number(price_max);
//   console.log(getPriseMin);
//   console.log(getPriseMax);

//   return [getPriseMin, getPriseMax];
// }

export async function gettingPriceFilter(formData) {
  const rawFormData = {
    price_min: formData.get('price_min'),
    price_max: formData.get('price_max'),
  };

  const { price_min, price_max } = rawFormData;
  const getPriseMin = Number(price_min);
  const getPriseMax = Number(price_max);

  try {
    const data = await sql`
      SELECT 
      cat.id, cat.make, cat.price, cat.discount,
      ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) AS discounted_price,
      popular.title as popular_title,
      cat.quantity, cat.img_url
      FROM public.catalog cat
      LEFT JOIN public.popular popular ON popular.id = cat.popular_id
      WHERE ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) BETWEEN ${getPriseMin} AND ${getPriseMax} 
      ORDER BY id ASC`;

    const result = data.rows;
    console.log(result);
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
