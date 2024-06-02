import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const cookieStore = req.cookies;
    const theme = cookieStore.get('theme')?.value as string;
    console.log("***###***###***###" + theme);
    if (theme === undefined || theme === 'light') {
        cookieStore.set('theme', 'dark');
        return NextResponse.json({ theme: 'dark' }, { status: 200 });
    } else {
        cookieStore.set('theme', 'light');
        return NextResponse.json({ theme: 'light' }, { status: 200 });
    }
}