import { NextResponse } from "next/server";


export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const token = searchParams.get("id");
  
   let url = process.env.BASE_URL +"/merchants"
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("An error occurred during the request:", error);

    return NextResponse.json(
      { message: "An error occurred during the request" },
      { status: 500 }
    );
  }
}

