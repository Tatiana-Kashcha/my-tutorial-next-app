import { sql } from '@vercel/postgres';

export async function fetchCategoryForProductList() {
  try {
    const data = await sql`
    SELECT cat.id, cat.make, subcat.cat_arr as category_array
    FROM public.catalog cat 
    INNER JOIN (
        WITH RECURSIVE prodCat AS (
           SELECT category_id, 1 as n, id 
           FROM public.catalog cat 
        UNION
            SELECT category.parent_id, prodCat.n + 1, prodCat.id
            FROM public.category category, prodCat 
            WHERE prodCat.category_id = category.id AND category.parent_id IS NOT NULL
        )
        SELECT prodCat.id, array_agg(category.title ORDER BY prodCat.n DESC) as cat_arr
        FROM public.category category
        INNER JOIN prodCat ON category.id = prodCat.category_id
        GROUP BY prodCat.id
    ) AS subcat ON cat.id = subcat.id `;

    const result = data.rows;
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
