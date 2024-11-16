"use client"
import { useState } from "react"
import SaveProduct from "./SaveResponse"

export default function Category (){
    const [saveProduct, setSaveProduct] = useState(false)

    return(
        <div className="">
            <p className="mt-[20px] font-[700]">Create new product category</p>
            <p className="text-[14px]">Fill in the important details below</p>
            <div className="py-[20px]">
            <label htmlFor="" className=" font-[600] text-[16px] mt-[30px]">Product Category Name</label>
                <input className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full" type="text" name="" placeholder="enter category" id="" />
            </div>

            <div className="py-[20px]">
            <label htmlFor="" className=" font-[600] text-[16px] mt-[30px]">Description</label>
            <textarea className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full" name="" placeholder="Enter description" id="" cols="30" rows="10"></textarea>
            <p className="flex w-full justify-end text-right">Max. 2000 Characters</p>
            </div>

            <div className="py-[20px]">
            <label htmlFor="" className=" font-[600] text-[16px] mt-[30px]">Product Images</label>
            </div>

        <div className="flex flex-col w-full gap-3">
          <div className="py-[90px!important] px-5 border border-dotted border-[#008B74] border-4 flex flex-col items-center justify-center  rounded-xl">
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
             
              <div
               
              >
                <div className="">
                  <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                    <span className="flex flex-col text-[16px] cursor-pointer justify-center text-center font-[600]">
            
                      Upload here{" "}
                    </span>
                    <input
  type="file"
  className="md:mx-0 mx-auto md:w-auto w-full text-[#008B74] border-none bg-transparent"
/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-3 my-[40px]">
        <button
         onClick={() => setSaveProduct(true)}
        className="bg-[#008B74] border border-[#008b74] px-[35px] rounded-[7px] py-[15px] text-white">Save changes</button>
                <button className=" border border-[#008b74] px-[35px] rounded-[7px] py-[15px] text-[#008b74]">Cancel</button>
        </div>
    
        <SaveProduct 
          saveProduct={saveProduct} 
          setSaveProduct={setSaveProduct} />
        </div>
    )
}