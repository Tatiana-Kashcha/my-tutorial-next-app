import { sql } from '@vercel/postgres';

export async function fetchMinAndMaxPrice() {
  try {
    const data = await sql`
    SELECT
    MIN(discounted_price) AS min_price,
    MAX(discounted_price) AS max_price
FROM
    (
        SELECT
            cat.id,
            cat.make,
            cat.price,
            cat.discount,
            ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) AS discounted_price
        FROM
            public.catalog cat
    ) AS subquery`;

    const result = data.rows;
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
