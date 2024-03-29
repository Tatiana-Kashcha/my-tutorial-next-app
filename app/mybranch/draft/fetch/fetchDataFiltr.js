import { sql } from '@vercel/postgres';

export async function fetchDataFiltr(categoryId) {
  const queryParams = `
    WITH RECURSIVE subcat AS (
      SELECT $1::integer as id 
    UNION ALL
      SELECT category.id FROM subcat, category 
      WHERE category.parent_id = subcat.id
    )
    SELECT 

    

    
    FROM public.catalog cat 
    LEFT JOIN public.color color ON color.id = cat.color_id
    LEFT JOIN public.popular popular ON popular.id = cat.popular_id
    LEFT JOIN public.capacity capacity ON capacity.id = cat.capacity_id
    LEFT JOIN public.brand brand ON brand.id = cat.brand_id
    WHERE 
      cat.category_id IN (SELECT id FROM subcat)
`;

  try {
    const data = await sql.query(queryParams, [categoryId]);

    const result = data.rows;
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}

// color.id, color.title AS name, color.code AS color,
// GROUP BY color.id, color.title, color.code
// ORDER BY color.id ASC
