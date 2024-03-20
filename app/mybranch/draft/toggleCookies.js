'use server';

import { cookies } from 'next/headers';

export async function getCookies(name) {
  const cookieStore = cookies().get(name);
  return cookieStore;
}

export async function toggleCookies(name, value) {
  const cookieStore = await getCookies(name);

  if (cookieStore) {
    const arrayOfValues = cookieStore.value.split('.');

    if (arrayOfValues.includes(value)) {
      const newArray = arrayOfValues.filter(item => item !== value);

      const stringOfValues = newArray.join('.');
      cookies().set(name, stringOfValues);
    } else {
      const stringOfValues = arrayOfValues.join('.');
      const newString = stringOfValues.concat(`${value}.`);
      cookies().set(name, newString);
    }
  } else {
    cookies().set(name, value);
  }
}
