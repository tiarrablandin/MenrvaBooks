import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const cookieStore = req.cookies;
    const theme = cookieStore.get('theme')?.value as string;

    try {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        req.cookies.set('theme', newTheme)
        return NextResponse.json({ theme: newTheme }, { status: 200 });
    } catch (error: any) {
        console.error(`Theme: ${theme}`)
        return NextResponse.json({ error: 'Failed to fetch user details' }, { status: 500 });
    }
}