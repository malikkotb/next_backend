import { NextResponse } from "next/server"
export async function GET() {
    // return new Response("Hello from backend");
    return NextResponse.json({ "message": "Hello from backend ts"})
}