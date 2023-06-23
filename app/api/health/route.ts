import { NextResponse } from "next/server";

export async function GET() {
  // just return ok
  return NextResponse.json("ok");
}
