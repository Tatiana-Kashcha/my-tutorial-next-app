"use server";

import { sql } from "@vercel/postgres";
// import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData) {
  const rawFormData = {
    make: formData.get("name"),
    prise: formData.get("price"),
    img_url1: formData.get("image1"),
    img_url2: formData.get("image2"),
    img_url3: formData.get("image3"),
    img_url4: formData.get("image4"),
  };

  const { make, prise, img_url1, img_url2, img_url3, img_url4 } = rawFormData;
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
          INSERT INTO public.catalog_list (id, make, prise, img_url1, img_url2, img_url3, img_url4)
          VALUES (DEFAULT, ${make}, ${priseNew}, ${img_url1}, ${img_url2}, ${img_url3}, ${img_url4})
        `;
    // revalidatePath("/catalog");

    // return { message: "Create new product." };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create product.");
  }
  revalidatePath("/catalog");
  redirect("/catalog");
}

export async function fetchProductById(id) {
  try {
    const data = await sql`
      SELECT make,
      id,
      prise,
      img_url1,
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

/////////////////////////////////////////////////////////////

export async function fetchCategory() {
  try {
    const data = await sql`
      SELECT
      id, title, img_url
      FROM mytest.category
      WHERE parent_id IS NULL
      ORDER BY id ASC `;

    const fetchCategory = data.rows;
    return fetchCategory;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchCategoryAndSubcategory() {
  try {
    const data = await sql`
      SELECT
      id, parent_id, title as name
      FROM mytest.category
      ORDER BY id ASC `;

    const fetchCategoryAndSubcategory = data.rows;
    return fetchCategoryAndSubcategory;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch data.");
  }
}

export async function fetchCatalog() {
  try {
    const data = await sql`
    SELECT 
    cat.id, cat.make, cat.price, cat.discount, cat.code,
    category.title as category_title,
    brand.title as brand_title,
    country.title as country_title,
    popular.title as popular_title,
    color.title as color_title,
    capacity.volume as capacity_volume,
    reality.title as reality_title,
    pack.title as pack_title,
    cat.quantity, cat.img_url
    FROM mytest.catalog cat
    LEFT JOIN mytest.category category ON category.id = cat.category_id
    LEFT JOIN mytest.brand brand ON brand.id = cat.brand_id
    LEFT JOIN mytest.country country ON country.id = cat.country_id
    LEFT JOIN mytest.popular popular ON popular.id = cat.popular_id
    LEFT JOIN mytest.color color ON color.id = cat.color_id
    LEFT JOIN mytest.capacity capacity ON capacity.id = cat.capacity_id
    LEFT JOIN mytest.reality reality ON reality.id = cat.reality_id
    LEFT JOIN mytest.pack pack ON pack.id = cat.pack_id
    ORDER BY id ASC`;

    const fetchCatalog = data.rows;
    return fetchCatalog;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch data.");
  }
}
