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
      img_url,
      img_url2,
      img_url3,
      img_url4
      FROM
      public.catalog_list
      WHERE id IN (${id})`;

    const result = data.rows;
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}

export async function deleteProduct(id) {
  try {
    await sql`
    DELETE FROM
    public.catalog_list
    WHERE id IN (${id})`;

    revalidatePath("/catalog");
    return { message: "Deleted Product." };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete product.");
  }
}
