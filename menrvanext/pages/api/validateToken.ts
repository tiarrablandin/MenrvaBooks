'use server';

import { fetchUserByTag } from "@/app/lib/services/apiService";
import { cookies } from "next/headers";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function validateToken(req: NextApiRequest, res: NextApiResponse) {
    console.log()
    const cookieStore = cookies();
    const jwt = cookieStore.get('jwt')?.value;
    const tag = cookieStore.get('tag')?.value;

    if (!jwt) {
        return res.status(401).json({ error: 'No JWT found, user not logged in' });
    } else if (!tag) {
        return res.status(401).json({ error: 'No tag found, user not logged in' });
    }

    try {
        const user = await fetchUserByTag(tag);
        res.status(200).json({ user: user, jwt: jwt });
    } catch(error: any) {
        console.error(`JWT: ${jwt} USER: ${tag}`)
        res.status(500).json({ error: 'Failed to fetch user details'});
    }
}