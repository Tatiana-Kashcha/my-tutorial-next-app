"use server";

import { sql } from "@vercel/postgres";
// import { z } from "zod";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export async function createProduct(formData) {
  const rawFormData = {
    make: formData.get("name"),
    prise: formData.get("price"),
    img_url: formData.get("image"),
  };

  const { make, prise, img_url } = rawFormData;
  const priseNew = Number(prise);
  // console.log(make);
  // console.log(priseNew);
  // console.log(img_url);

  // if (typeof priseNew === "number") {
  //   console.log('Змінна priseNew має тип "number".');
  // } else {
  //   console.log("Змінна priseNew не є числовою.");
  // }

  try {
    await sql`
          INSERT INTO public.catalog_list (id, make, prise, img_url)
          VALUES (DEFAULT, ${make}, ${priseNew}, ${img_url}) 
        `;
    revalidatePath("/catalog");

    return { message: "Create new product." };
  } catch (error) {
    return { message: "Database Error: Failed to Create product." };
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
