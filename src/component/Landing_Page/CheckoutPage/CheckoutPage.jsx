"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function CheckoutPagee() {
  const [cartTotal, setCartTotal] = useState(459.00);
  const itemSubtotal = 327.18;
  const taxes = 71.82;
  const shipping = 60.00;

  return (
    <div className="flex justify-center items-start px-8 py-12">
      <div className="flex w-full max-w-5xl space-x-8">
        
        {/* Left Section - Customer Info & Shipping Address */}
        <div className="w-2/3 space-y-8">
          <div>
            <h2 className="text-lg font-semibold">CUSTOMER INFO</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 mt-2"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold">SHIPPING ADDRESS</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Full Address"
                className="col-span-2 border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="border border-gray-300 rounded-md p-3"
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
          <Link href="/Shoppingbag">
            <button className="border border-black px-6 py-2 rounded-md">
              Return to cart
            </button>
            </Link>
            <Link href="/payment">
            <button className="bg-black text-white px-6 py-2 rounded-md">
              Submit
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Cart Summary */}
        <div className="w-1/3 bg-gray-100 p-6 rounded-md">
          <h2 className="text-lg font-semibold mb-6">YOUR CART</h2>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 relative">
              <Image
                src="/checkout/shirt.svg"  // Replace with your actual image path
                alt="T-Shirt"
                fill
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="font-semibold">T-Shirt</p>
            <p className="ml-auto font-semibold">₹ 399.00</p>
          </div>

          <div className="border-b border-gray-300 mb-4"></div>

          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>Item Subtotal</p>
              <p>₹ {itemSubtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Taxes</p>
              <p>₹ {taxes.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Shipping</p>
              <p>₹ {shipping.toFixed(2)}</p>
            </div>
          </div>

          <div className="border-b border-gray-300 my-4"></div>

          <div className="flex justify-between text-lg font-semibold">
            <p>Total</p>
            <p>₹ {cartTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
