import { NextResponse } from "next/server";

export async function POST(request) {


  const payload = await request.json();
  


  console.log(payload)
  let params;
  
  function generateRandomMerchantId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  params = {
    merchant_id: generateRandomMerchantId(10), // Adjust the length as needed
  merchant_name: payload.merchantName,
  merchant_email: payload.merchantEmail,
  merchant_password: payload.merchantPassword,
  merchant_phone: payload.merchantPhone,
  merchant_address: payload.merchantAddress,
  gstin: payload.merchantGstin
  };


let url = process.env.BASE_URL + "/merchant"
 try {
    const res = await fetch(url, {
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
    console.log(data)
    return NextResponse.json(data);
  
  } catch (error) {
  
    return NextResponse.json(
      { message: "An error occurred during the request" },
      { status: 500 }
    );
  } 
}
