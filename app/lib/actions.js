import { sql } from "@vercel/postgres";
// import { z } from "zod";

export async function createProduct(formData) {
  const rawFormData = {
    make: formData.get("name"),
    prise: formData.get("price"),
    img_url: formData.get("image"),
  };

  const { make, prise, img_url } = rawFormData;
  console.log(make);
  console.log(prise);
  console.log(img_url);

  try {
    await sql`
          INSERT INTO public.catalog_list (make, prise, img_url)
          VALUES (${make}, ${prise}, ${img_url})
          returning id
        `;
    return {
      message: "Create new product.",
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Create product.",
    };
  }
}

export async function fetchProductById(id) {
  try {
    const data = await sql`
      SELECT make,
      id,
      prise,
      img_url
      FROM 
      public.catalog_list
      WHERE id IN (${id});`;

    const result = data.rows;
    // console.log(result);
    return result;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch product.");
  }
}
