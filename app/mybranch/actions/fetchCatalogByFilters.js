import { sql } from '@vercel/postgres';

export async function fetchCatalogByFilters(
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
      cat.quantity, cat.img_url
      FROM public.catalog cat
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
