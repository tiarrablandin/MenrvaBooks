'use server';

import { registerUser } from "@/lib/services/apiService";
import { cookies } from "next/headers";

// * PARAMETERS ARE PASSED IN FROM FORM AS FORMDATA
export default async function register(email: string, firstName: string, lastName: string, tag: string, password: string) {
  try {
    const { jwt, user } = await registerUser(email, firstName, lastName, tag, password);

    const cookieStore = cookies();
    cookieStore.set('jwt', jwt, {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'lax'
    });

    cookieStore.set('tag', user.tag, { sameSite: 'lax' });

    cookieStore.set('role', user.role, { sameSite: 'lax' });

    return { user: JSON.parse(JSON.stringify(user)) };
  } catch (error) {
    console.error('registration failed', error);
    return { error: error }
  }
}