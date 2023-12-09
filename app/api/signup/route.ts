import { NextResponse } from "next/server";

type UserDetails = {
  username?: string,
  email?: string,
  password?: string,
}


// this is server side
export async function POST(request: Request) {
  const data: UserDetails = await request.json() // in Express we would get this from request.body
  console.log('data: ', data);
  const { username, email, password } = data;


  // Here you could further process the form data.
  // i.e. save it in a database etc.

  // here we will just echo that information
  return NextResponse.json({ username, email, password})
}
