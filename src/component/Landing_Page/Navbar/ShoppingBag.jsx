"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TbMenu2, TbUser } from "react-icons/tb";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";

const ShoppingBag = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 59.0;
  const total = quantity * price;

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(newQuantity);
  };

  return (
    <div className="px-[3%]">
      {/* Header */}
      

      {/* Breadcrumb */}
      <div className="mt-[30px]">
        <div className="flex space-x-[5px] ps-[60px]">
          <Link className="text-[#888888] cursor-pointer" href={"/"}>HOME /</Link>
          <Link href={"/Shoppingbag"} className="cursor-pointer font-[700]">SHOPPING CART</Link>
        </div>
      </div>

      {/* Cart Table */}
      <div className="mt-[30px]">
        {/* Table Headers */}
        <div className="grid grid-cols-4 text-center items-center font-[700] text-[20px] mb-[15px] px-[150px]">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        
        <div className="border-b border-[#EBEBEB] my-[30px]"></div>

        {/* Table Row */}
        <div className="grid grid-cols-4 text-center items-center px-[150px]">
          {/* Product Column */}
          <div className="flex items-center justify-center space-x-[15px]">
            <MdOutlineClose className="text-[16px] cursor-pointer" />
            <div className="w-[50px] h-[50px] bg-red-500"></div>
            <p className="font-[700] text-[16px]">Plain White Shirt</p>
          </div>
          
          {/* Price Column */}
          <p className="font-[700] text-[16px]">₹{price.toFixed(2)}</p>
          
          {/* Quantity Column */}
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="font-[700] text-[16px] border border-[#EBEBEB] text-center w-[50px] mx-auto"
            min="1"
          />

          {/* Total Column */}
          <p className="font-[700] text-[16px]">₹{total.toFixed(2)}</p>
        </div>

        <div className="border-b border-[#EBEBEB] my-[30px]"></div>

        {/* Cart Totals */}
        <div className="flex flex-col items-end pr-[150px] space-y-[10px]">
          <h2 className="font-[700] text-[20px]">Cart Totals</h2>
          <div className="flex justify-between w-[300px] border-b border-[#EBEBEB] py-[10px]">
            <span className="font-[500]">Subtotal</span>
            <span className="font-[700]">₹{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-[300px] border-b border-[#EBEBEB] py-[10px]">
            <span className="font-[500]">Shipping Free</span>
            <span className="font-[700] text-[#ff0000]">FREE!!!</span>
          </div>
          <div className="flex justify-between w-[300px] py-[10px] font-[700] text-[20px]">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <Link href="/checkoutpage">
          <button className="bg-[#d3b4fc] text-[#000] px-[30px] py-[10px] font-[700] rounded-md mt-[20px]">
            PROCEED TO CHECKOUT
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
