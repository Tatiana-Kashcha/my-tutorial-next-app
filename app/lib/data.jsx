import { sql } from "@vercel/postgres";

// const likes = 100;
// const { data } = await sql`SELECT * FROM posts WHERE prise > ${prise} LIMIT 5;`;

export async function fetchCatalog() {
  try {
    const data = await sql`
      SELECT make,
      id,
       prise,
       img_url1
FROM public.catalog_list;`;

    const fetchCatalog = data.rows;
    return fetchCatalog;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all fetchCatalog.");
  }
}

