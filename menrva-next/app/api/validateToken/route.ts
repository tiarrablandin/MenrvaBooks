import { fetchUserByTag } from "@/lib/services/apiService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { theme: string} }) {
    const cookieStore = req.cookies;
    const jwt = cookieStore.get('jwt')?.value;
    const tag = cookieStore.get('tag')?.value;

    if (!jwt) {
        return NextResponse.json({ error: 'No JWT found, user not logged in' }, { status: 401 });
    } else if (!tag) {
        return NextResponse.json({ error: 'No tag found, user not logged in' }, { status: 401 });
    }

    try {
        const user = await fetchUserByTag(tag);
        return NextResponse.json({ user: user, jwt: jwt }, { status: 200 });
    } catch (error: any) {
        console.error(`JWT: ${jwt} USER: ${tag}`)
        return NextResponse.json({ error: 'Failed to fetch user details' }, { status: 500 });
    }
}