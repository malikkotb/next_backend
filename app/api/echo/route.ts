import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // here we want to echo any of the parameters 
  // that might be sent in the URL for a GET request
  
  const { searchParams } = new URL(request.url) // search parameters that we are receiving

  //  const name = searchParams.get('name');
  //  const instrument = searchParams.get('instrument');
  //  return NextResponse.json({ name, instrument})

  // this has any params that are received
  const obj = Object.fromEntries(searchParams.entries())

  
   return NextResponse.json(obj)

}
