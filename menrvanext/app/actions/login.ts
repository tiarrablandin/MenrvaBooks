'use server';

import { cookies } from "next/headers";
import { authenticate } from "../lib/services/apiService";


// * PARAMETERS ARE PASSED IN FROM FOR AS FORMDATA
export default async function login(identifier: string, password: string) {
    try {
        const { jwt, user } = await authenticate(identifier, password);

        const cookieStore = cookies();
        cookieStore.set('jwt', jwt, {
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'lax'
        });

        cookieStore.set('tag', user.tag);

        return { user: JSON.parse(JSON.stringify(user)) };
    } catch (error) {
        console.error('login failed', error);
    }
}