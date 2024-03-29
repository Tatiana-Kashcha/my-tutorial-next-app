import { sql } from "@vercel/postgres";
export async function fetchDataFilterColorsCategoryProduct(categoryId) {
  const queryParams = `
    WITH RECURSIVE subcat AS (
      SELECT $1::integer as id 
    UNION ALL
      SELECT category.id FROM subcat, category 
      WHERE category.parent_id = subcat.id
    )
    SELECT 
    color.id, color.title AS name, 
    COUNT(cat.id) AS total_products, color.code AS color
    
    FROM public.catalog cat 
    INNER JOIN (
      WITH RECURSIVE prodCat AS (
         SELECT category_id, 1 as n, id 
         FROM public.catalog cat
         WHERE cat.category_id IN (SELECT id FROM subcat)
      UNION
          SELECT category.parent_id, prodCat.n + 1, prodCat.id
          FROM public.category category, prodCat 
          WHERE prodCat.category_id = category.id AND category.parent_id IS NOT NULL
      )
      SELECT prodCat.id, array_agg(json_build_object('category', category.title, 'id', category.id) ORDER BY prodCat.n DESC) as cat_arr
      FROM public.category category
      INNER JOIN prodCat ON category.id = prodCat.category_id
      GROUP BY prodCat.id
  ) AS subcat ON cat.id = subcat.id 
  LEFT JOIN public.color color ON color.id = cat.color_id
    WHERE 
     
      cat.category_id IN (SELECT id FROM subcat) 
    GROUP BY color.id, color.title, color.code
    ORDER BY color.id ASC`;

  try {
    const data = await sql.query(queryParams, [categoryId]);
    const result = data.rows;
    return result;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch data.");
  }
}
