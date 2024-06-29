'use server';

import { cookies } from "next/headers";
import { authenticate } from "../services/apiService";


// * PARAMETERS ARE PASSED IN FROM FORM AS FORM DATA
export default async function login(identifier: string, password: string) {
    try {
        const response = await authenticate(identifier, password);

        if (!response) {
            throw new Error("Authentication failed")
        }
        const { token, user } = response;

        const cookieStore = cookies();
        cookieStore.set('jwt', token, {
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'lax',
        });

        cookieStore.set('tag', user.tag, { sameSite: 'lax' });

        cookieStore.set('role', user.role, { sameSite: 'lax' });

        return { user: JSON.parse(JSON.stringify(user)), token: token };
    } catch (error) {
        console.error('login failed', error);
    }
}