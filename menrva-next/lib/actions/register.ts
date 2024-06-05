'use server';

import { cookies } from "next/headers";
import { registerUser } from "../services/apiService";

// * PARAMETERS ARE PASSED IN FROM FORM AS FORMDATA
export default async function register(email: string, firstName: string, lastName: string, tag: string, password: string) {
  try {
    console.log("************************************ 1")
    const { jwt, user } = await registerUser(email, firstName, lastName, tag, password);

    const cookieStore = cookies();
    cookieStore.set('jwt', jwt, {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'lax'
    });

    cookieStore.set('tag', user.tag);

    cookieStore.set('role', user.role);

    return { user: JSON.parse(JSON.stringify(user)) };
  } catch (error) {
    console.error('registration failed', error);
    return { error: error }
  }
}