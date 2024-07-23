'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function addNewValueSelect(data) {
  const { inputNewData, inputNewColor = null, titleModal } = data;
  console.log(titleModal);

  const queryParamsAddColors = `
  INSERT INTO public.color (id, title, code)
  VALUES (DEFAULT, '${inputNewData}', '${inputNewColor}')`;

  try {
    if (titleModal === 'Odcień') {
      await sql.query(queryParamsAddColors);
    }

    revalidatePath('/super-admin/addProduct');
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to insert data.');
  }
}

export async function addNewValueSelect(data) {
  const { inputNewData, inputNewColor = null, titleModal } = data;

  try {
    await sql`
    INSERT INTO public.color (id, title, code)
    VALUES (DEFAULT, ${inputNewData}, ${inputNewColor})`;

    revalidatePath('/super-admin/addProduct');
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to insert data.');
  }
}

// У першому коді ви використовуєте лапки
//  навколо ${inputNewData} і ${inputNewColor}, а в другому коді - ні.

// Коли ви використовуєте параметри для підстановки в SQL-запит,
// зазвичай використовують безпечний метод, щоб уникнути SQL-ін'єкцій.
// У вашому випадку вам не потрібно обгортати значення змінних у лапки,
// оскільки це вже робить модуль sql, забезпечуючи безпечне вставлення значень в запит.

// Отже, в першому коді використано параметри замість змінних, а в другому
// ви використали змінні безпосередньо.
