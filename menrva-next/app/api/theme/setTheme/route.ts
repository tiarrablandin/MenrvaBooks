import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const res = await req.json();
  cookieStore.set('theme', res, { sameSite: "lax" });
  return NextResponse.json({ theme: res });
}