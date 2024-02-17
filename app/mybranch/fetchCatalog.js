import { sql } from '@vercel/postgres';

export async function fetchCatalog() {
  try {
    const data = await sql`
      SELECT 
      cat.id, cat.make, cat.price, cat.discount,
      ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) AS discounted_price,
      popular.title as popular_title,
      cat.quantity, cat.img_url
      FROM public.catalog cat
      LEFT JOIN public.popular popular ON popular.id = cat.popular_id
      ORDER BY id ASC`;

    const result = data.rows;
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
