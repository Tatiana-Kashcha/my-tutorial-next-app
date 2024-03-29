import { sql } from '@vercel/postgres';

export async function fetchCategoryProductById(id) {
  try {
    const data = await sql`
    WITH RECURSIVE prodCat AS (
      SELECT category_id, 1 as n 
      FROM public.catalog cat
      WHERE cat.id = ${id}  
    UNION
      SELECT category.parent_id, prodCat.n + 1 
      FROM public.category category, prodCat 
      WHERE prodCat.category_id = category.id AND category.parent_id IS NOT NULL
  )
  SELECT category.id as category_id, category.title as category_title
  FROM category
  INNER JOIN prodCat ON category.id = prodCat.category_id
  ORDER BY prodCat.n DESC`;

    const result = data.rows;
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
