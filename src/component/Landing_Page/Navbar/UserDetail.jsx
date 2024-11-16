"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const UserDetail = ({ user, setUser }) => {
  
  return (
    

    <div
    onClick={() => setUser(false)}
    className={`flex px-5 w-full h-screen transform transition-transform duration-300 ease-in-out bounce ${
      user ? "translate-y-0" : "translate-y-[-100%]"
    } absolute z-[200] top-0  bottom-0 justify-center items-center modal-content modal bg-[grey] rounded-md transform transition-transform duration-300 ease-in-out bounce  inset-0 flex modal-overlay w-full overflow-y-scroll`}
  >
 
   
      
       
       
        {/* <div className="border-b border-[var(--border-color)]"></div> */}
       <div className="bg-[#ffff] flex flex-col absolute right-[3%] text-center rounded-[10px] w-[20%] top-[60px]">
        <Link className="p-[20px] text-[14px] font-[600] " href={"/account"}>Account</Link>
        <div className="border-b border-[black]"></div>
        <Link className="p-[20px]  text-[14px] font-[600] " href={"/wishlist"}>Wish List</Link>
        <div className="border-b border-[black]"></div>
        <Link className="p-[20px]  text-[14px] font-[600]" href={"/yourorder"}>Your Orders</Link>
        
       </div>
  
  
  
  </div>

    
  );
};

export default UserDetail;