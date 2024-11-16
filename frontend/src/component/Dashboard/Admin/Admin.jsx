"use client"
import Link from "next/link";
import { LiaFilterSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { useContext } from "react";
import { UserContext } from "@/component/context/context";
import Cookies from "js-cookie";
export default function Admin (){
    
    const key = Cookies.get("token")
    console.log(key)
    return(
        <div className="mt-[30px]">
            <div className="flex justify-between w-full items-center">
                <div className="flex gap-1">
                <p className="font-[700]">Dashboard</p>
                </div>
                <div className="flex gap-2">
                    <div
                    className="bg-[#00A78B] text-white py-[10px] px-[25px] cursor-pointer rounded-[7px]"
                    onClick={() => setOpenProduct(true)}>
                    + Add New Product
                    </div>
                    {/* <div> */}
                    <Link className="bg-[#00A78B] text-white py-[10px] px-[25px] cursor-pointer rounded-[7px]" href={"/dashboard/products/createnewproduct"}>+ Create Product Category</Link>
                    {/* </div> */}
                </div>
                
            </div>
            <div className="mt-[40px] flex gap-3">
                <div className="w-[30%] flex items-center gap-[15px]">
                    <div className="flex gap-2 items-center text-[#005446] cursor-pointer rounded-[7px] py-[7px] font-[600] px-[15px] border border-[#005446]">
                    <LiaFilterSolid className="font-[600]"/>
                    <p>Filters</p>
                    <RiArrowDownSLine />
                    </div>
                    <div className="flex gap-2 items-center text-[#005446] cursor-pointer rounded-[7px] py-[7px] font-[600] px-[15px] border border-[#005446]">
                    <CiCalendar className="font-[600]"/>
                    <p>Today</p>
                    <RiArrowDownSLine />
                    </div>
                
                </div>
                <div className="w-[70%] flex gap-2 px-[10px] rounded-[7px] cursor-pointer items-center border border-[#CECECE]">
                <GoSearch />
                    <input className="outline-none w-[50%]" type="text" name="" id="" placeholder="Search specific product" />
                </div>
            </div>

        </div>
    )
}