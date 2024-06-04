'use server';

import { cookies } from "next/headers";

// * PARAMETERS ARE PASSED IN FROM FOR AS FORMDATA
export default async function logout() {
  try {
    const cookieStore = cookies();
    cookieStore.delete('jwt');
    cookieStore.delete('tag');
    cookieStore.delete('role');

    return { successful: true };
  } catch (error) {
    console.error('logout failed', error);
    return { successful: false };
  }
}