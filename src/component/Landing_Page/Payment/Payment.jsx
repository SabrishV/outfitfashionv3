"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiCreditCard } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";

export default function PaymentPage() {
  const [selectedCard, setSelectedCard] = useState("HDFC");

  return (
    <div className="flex justify-center items-start px-8 py-12">
      <div className="flex w-full max-w-5xl space-x-8">
        
        {/* Left Section - Payment Methods */}
        <div className="w-2/3 space-y-6">
          <Link href="/checkoutpage" className="flex items-center space-x-2 mb-4">
            <FiChevronLeft />
            <span className="text-lg font-semibold">Addresses</span>
          </Link>

          <div className="border rounded-lg p-4">
            <h2 className="flex items-center space-x-2 text-lg font-semibold mb-4">
              <FiCreditCard />
              <span>Registered cards</span>
            </h2>

            <div className="space-y-4">
              {/* Card Options */}
              {[
                { bank: "HDFC", name: "Hamesh R", lastDigits: "1234", expiry: "12/34" },
                { bank: "SBI", name: "Abiram R", lastDigits: "1234", expiry: "12/34" }
              ].map((card, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
                    selectedCard === card.bank ? "border-purple-600 bg-gray-100" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedCard(card.bank)}
                >
                  <div className="flex items-center space-x-3">
                    {selectedCard === card.bank ? (
                      <FaRegCheckCircle className="text-purple-600" />
                    ) : (
                      <div className="w-5 h-5 border border-gray-300 rounded-full" />
                    )}
                    <div>
                      <p className="font-semibold">{card.bank}</p>
                      <p className="text-sm text-gray-500">Last four digits: {card.lastDigits}</p>
                      <p className="text-sm text-gray-500">Name on card: {card.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{card.expiry}</p>
                </div>
              ))}
            </div>

            {/* Add new card and UPI */}
            <div className="border-t border-gray-300 mt-4 pt-4 space-y-4">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-5 h-5 border border-gray-300 rounded-full" />
                <p>Add new card</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-5 h-5 border border-gray-300 rounded-full" />
                <p>UPI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Invoice and Payment Button */}
        <div className="w-1/3">
          <div className="border rounded-lg p-4 space-y-4 bg-gray-50">
            <h2 className="text-lg font-semibold">Invoice</h2>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/checkout/shirt.svg" // Replace with actual image path
                  alt="T-Shirt"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">T-Shirt</p>
                <p className="text-gray-500 text-sm">Quantity: (x1)</p>
              </div>
              <p className="ml-auto text-lg font-semibold">₹459.00</p>
            </div>

            <div className="border-t border-gray-300"></div>

            <div className="flex justify-between font-semibold">
              <p>Total:</p>
              <p>₹459.00</p>
            </div>
          </div>
          <Link href="/paysuccess">
          <button className="w-full mt-6 py-3 text-white bg-purple-600 rounded-md font-semibold hover:bg-purple-700">
            Proceed to payment
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
