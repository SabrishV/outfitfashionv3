"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { LiaTimesCircle } from "react-icons/lia";
import { TbX } from "react-icons/tb";


const DeleteProduct = ({ deleteProduct, setDeleteProduct }) => {
 
  return (

    <div
    // onClick={() => setOpenProduct(false)}
    className={`flex px-5 w-full h-screen transform transition-transform duration-300 ease-in-out bounce ${
      deleteProduct ? "translate-y-0" : "translate-y-[-100%]"
    } fixed z-[200] top-0 left-0 bottom-0 justify-center items-center`}
  >
  <div
    className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll`}
  >
    <div
      className={`modal bg-black  bg-opacity-40 fixed inset-0 flex items-center  justify-center`}
    >
      <div
        className={`modal-content  lg:w-[35%] w-full rounded-md overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
      >
        <div className=" bg-[#ffff] p-6 items-center">
            
          {/* <h2 className="text-[20px] font-[700] flex justify-center items-center text-[#008B74] ">Update Product</h2> */}
         <div className="w-full justify-center items-center">
          {/* <span
           
            className="text-[40px] cursor-pointer w-full text-center text-[red] flex justify-center"
            >
            <LiaTimesCircle />
          </span> */}

         </div>
         <div className="flex items-center justify-center">
         <Image src={"/navbar/Frame 1000007914.svg"} height={70} width={70} alt="hsf"/>

         </div>

        <div className="text-center">
            <p className="flex justify-center text-[20px] font-[600] text-center mt-[10px]">
          Are you sure you do not want to delete this product?
            </p>

            <p>This action cannot be undone. </p>

            <div className="flex justify-center gap-3 my-[40px]">
        <button
        //  onClick={() => setSaveProduct(true)}
        className="bg-[#008B74] border border-[#008b74] px-[20px] rounded-[7px] py-[10px] text-white">Save changes</button>
                <button 
                 onClick={() => setDeleteProduct(false)}
                className=" border border-[#008b74] px-[20px] rounded-[7px] py-[10px] text-[#008b74]">Cancel</button>
        </div>
        </div>
        </div>
       
       
      </div>
    </div>
  </div>
  </div>

    
  );
};

export default DeleteProduct;