"use client";
import Link from "next/link";
import React from "react";

export default function AccountPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] pt-20"> {/* Increased padding-top for lower positioning */}
      <h1 className="text-[24px] font-semibold mb-6">Account Options</h1>

      <div className="space-y-4 w-[80%] max-w-[400px]">
        <Link href="/yourorder">
          <button className="w-full bg-[#3C1361] text-[#d3b4fc] py-4 font-bold rounded-lg text-center mb-2">
            Your Orders
          </button>
        </Link>
        <Link href="/login">
          <button className="w-full bg-[#3C1361] text-[#d3b4fc] py-4 font-bold rounded-lg text-center mb-2">
            Login and Info
          </button>
        </Link>
        <Link href="/contact">
          <button className="w-full bg-[#3C1361] text-[#d3b4fc] py-4 font-bold rounded-lg text-center mb-2">
            Contact Us
          </button>
        </Link>
        <Link href="/shipping">
          <button className="w-full bg-[#3C1361] text-[#d3b4fc] py-4 font-bold rounded-lg text-center">
            Address and Payment
          </button>
        </Link>
      </div>
    </div>
  );
}
