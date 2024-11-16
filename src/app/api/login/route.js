import { NextResponse } from "next/server";

export async function POST(request) {


  const payload = await request.json();
  
  let params;
  

  params = {
    Email: payload.email,
    Username: payload.username,
    Password: payload.password,
  };

 console.log(payload)
 try {
    const res = await fetch(`http://127.0.0.1:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
   
  
      if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }  
    const data = await res.json();
 
    return NextResponse.json(data);
  
  } catch (error) {
  
    return NextResponse.json(
      { message: "An error occurred during the request" },
      { status: 500 }
    );
  } 
}
