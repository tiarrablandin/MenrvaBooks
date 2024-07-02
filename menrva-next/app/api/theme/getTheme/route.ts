import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const theme = req.cookies.get('theme')?.value as string;
  return NextResponse.json({ theme: theme }, { status: 200 });
}