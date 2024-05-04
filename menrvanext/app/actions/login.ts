'use server';

import { cookies } from "next/headers";
import { authenticate } from "../lib/services/apiService";
import { redirect } from "next/navigation";

export default async function login(identifier: string, password: string) {
    // const identifier = formData.get('identifier') as string || 'null';
    // const password = formData.get('password') as string;
    console.log(`IN LOGIN: ${identifier} ${password}`)

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

        console.log(`SUCCESSFULLY LOGGED IN USER: ${JSON.stringify(user)}`);
        console.log(jwt);

        // return new Response(JSON.stringify(user), {
        //     status: 200,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
        return { user: JSON.parse(JSON.stringify(user)) };
    } catch (error) {
        console.error('login failed', error);
        // return new Response(JSON.stringify({ error: 'Authentication failed' }), {
        //     status: 401,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
    }
}