import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = req.cookies;
  const res = await req.json();
  cookieStore.set('theme', res);
  return NextResponse.json({ theme: res });
}