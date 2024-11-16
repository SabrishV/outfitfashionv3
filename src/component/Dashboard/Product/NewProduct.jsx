"use client";
import React, { useContext, useEffect, useState } from "react";
import { TbX } from "react-icons/tb";


const NewProduct = ({ openProduct, setOpenProduct }) => {
 
  return (

    <div
    // onClick={() => setOpenProduct(false)}
    className={`flex px-5 w-full h-screen transform transition-transform duration-300 ease-in-out bounce ${
      openProduct ? "translate-y-0" : "translate-y-[-100%]"
    } fixed z-[200] top-0 left-0 bottom-0 justify-center items-center`}
  >
  <div
    className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll`}
  >
    <div
      className={`modal bg-black  bg-opacity-40 fixed inset-0 flex items-center  justify-center`}
    >
      <div
        className={`modal-content  lg:w-[40%] h-[90vh] w-full rounded-md overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
      >
        <div className=" bg-[#ffff] p-6 items-center">
            
          <h2 className="text-[20px] font-[700] flex justify-center items-center text-[#008B74] ">Update Product</h2>
          <span
            onClick={() => setOpenProduct(false)}
            className="text-xl cursor-pointer text-[var(--text-color)]"
          >
            <TbX />
          </span>
          <form action="">
          <div className="border border-[#b4b3b3] mt-[20px] px-[10px] rounded-[10px]">
            <div className="py-[20px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px] mt-[30px]">Product Name<span>*</span></label>
                <input className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full" type="text" name="" placeholder="Tshirt" id="" />
            </div>
            <div className="pb-[10px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px]">Product Category Name<span>*</span></label>
                <select className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full" type="text" name="" id="">
                    <option value="men">Menswear</option>
                    <option value="women">Womenswear</option>
                    <option value="kid">Kidswear</option>
                </select>
            </div>
            <div className="pb-[10px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px]">Product Height<span>*</span></label>
            <div className="flex items-center py-[10px] mt-[10px] rounded-[10px] border border-[#b4b3b3]">
                <select className=" outline-none rounded-[10px] px-[5px] text-[black]" type="text" name="" id="">
                    <option value="inch">Inches</option>
                   
                </select>
                <p className="text-[#008B74]">|</p>
                <input className=" outline-none rounded-[10px] px-[5px] text-[black] w-full" type="text" name="" placeholder="24 inches" id="" />

            </div>
            </div>
            <div className="pb-[10px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px]">Product Weight<span>*</span></label>
            <div className="flex items-center py-[10px] mt-[10px] rounded-[10px] border border-[#b4b3b3]">
                <select className=" outline-none rounded-[10px] px-[5px] text-[black]" type="text" name="" id="">
                    <option value="inch">Kilogram</option>
                   
                </select>
                <p className="text-[#008B74]">|</p>
                <input className=" outline-none rounded-[10px] px-[5px] text-[black] w-full" type="text" name="" placeholder="1kg" id="" />

            </div>
            </div>
            <div className="pb-[10px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px]">Product Depth<span>*</span></label>
            <div className="flex items-center py-[10px] mt-[10px] rounded-[10px] border border-[#b4b3b3]">
                <select className=" outline-none rounded-[10px] px-[5px] text-[black]" type="text" name="" id="">
                    <option value="inch">Inches</option>
                   
                </select>
                <p className="text-[#008B74]">|</p>
                <input className=" outline-none rounded-[10px] px-[5px] text-[black] w-full" type="text" name="" placeholder="11inches" id="" />

            </div>
            </div>
            <div className="pb-[10px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px]">Fragile<span>*</span></label>
            <div className="flex items-center gap-[60px] py-[10px] mt-[10px]">
                <div className="flex gap-2">
                <input type="radio" name="" id="" />
                <p className="text-[#008B74] font-[700]">Yes</p>
                </div>
                <div className="flex gap-2">
                <input type="radio" name="" id="" />
                <p className="text-[#008B74] font-[700]">No</p>
                </div>

            </div>
            </div>
          </div>
            <div className="flex text-center justify-center gap-[70px] mt-[20px]">
                <button className="bg-[#008B74] border border-[#008b74] px-[35px] rounded-[7px] py-[15px] text-white">Save</button>
                <button className=" border border-[#008b74] px-[35px] rounded-[7px] py-[15px] text-[#008b74]">Cancel</button>
            </div>
          </form>

        </div>
        
       
       
      </div>
    </div>
  </div>
  </div>

    
  );
};

export default NewProduct;