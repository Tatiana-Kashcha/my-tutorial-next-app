import { sql } from '@vercel/postgres';

export async function fetchCatalogByFiltersAndCategory(
  initialMin,
  initialMax,
  searchMin = initialMin,
  searchMax = initialMax,
  sort
) {
  const orderBySort = (() => {
    switch (sort) {
      case 'id':
        return 'id ASC';
      case 'Cena min-maks':
        return 'discounted_price ASC';
      case 'Cena maks-min':
        return 'discounted_price DESC';
      case 'Nazwa a-z':
        return 'make ASC';
      case 'Nazwa z-a':
        return 'make DESC';
      default:
        return 'id ASC';
    }
  })();

  const queryParams = `
    SELECT 
      cat.id, cat.make, cat.price, cat.discount,
      ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) AS discounted_price,
      popular.title as popular_title,
      cat.quantity, cat.img_url, subcat.cat_arr as category_array
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
    ) AS subcat ON cat.id = subcat.id 
      LEFT JOIN public.popular popular ON popular.id = cat.popular_id
      WHERE ROUND(COALESCE(cat.price * (1 - cat.discount / 100), cat.price), 2) BETWEEN $1 AND $2
      ORDER BY ${orderBySort}`;

  try {
    const data = await sql.query(queryParams, [searchMin, searchMax]);
    const result = data.rows;
    return result;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch data.');
  }
}
