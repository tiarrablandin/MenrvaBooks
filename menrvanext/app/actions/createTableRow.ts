'use server'

import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const url = baseUrl + "/api";

export default async function createTableRow(name: string, entityType: string) {
    if (entityType === 'sub-genres') entityType = 'subgenres';
    if (entityType === 'keyword' || entityType === 'tag') entityType = entityType + 's';

    try {
        const token = cookies().get('jwt')?.value;
        const res = await fetch(`${url}/${entityType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: name
        });
        if (!res.ok) {
            throw new Error(`Failed to add new ${entityType}.`);
        }
        const createdRow = await res.json()
        return { createdRow: createdRow };
    } catch (error) {
        console.error('Failed to create comment:', error);
    }
}