"use client"
import Link from "next/link";
import { LiaFilterSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import NewMerchant from "./Newmarchant";
import { useState } from "react";
import { useFetchJson } from "@/component/lib/fetchjson";
export default function Merchant (){
    const [openMerchant, setOpenMerchant] = useState(false)
    const { data, error } = useFetchJson(`/api/merchant/allmerchants/`);

    console.log(data?.merchants)
    return(
        <div className="mt-[30px]">
            <div className="flex justify-between w-full items-center">
                <div className="flex gap-1">
                <p className="font-[700]">Mecrhants</p>
                </div>
                <div className="flex gap-2">
                    <div
                    className="bg-[#008B74] text-white py-[10px] px-[25px] cursor-pointer rounded-[7px]"
                    onClick={() => setOpenMerchant(true)}>
                    + Create New Merchant
                    </div>
                    {/* <div> */}
                    {/* <Link className="bg-[#008B74] text-white py-[10px] px-[25px] cursor-pointer rounded-[7px]" href={"/dashboard/products/createnewproduct"}>+ Create Product Category</Link> */}
                    {/* </div> */}
                </div>
                <NewMerchant 
          openMerchant={openMerchant} 
          setOpenMerchant={setOpenMerchant} />
                
            </div>
            <div className="mt-[40px] flex gap-3">
                <div className="w-[30%] flex items-center gap-[15px]">
                    <div className="flex gap-2 items-center text-[#008B74] cursor-pointer rounded-[7px] py-[7px] font-[600] px-[15px] border border-[#005446]">
                    <LiaFilterSolid className="font-[600]"/>
                    <p>Filters</p>
                    <RiArrowDownSLine />
                    </div>
                    <div className="flex gap-2 items-center text-[#008B74] cursor-pointer rounded-[7px] py-[7px] font-[600] px-[15px] border border-[#005446]">
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
            <div className="overflow-x-auto mt-[50px]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-all" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3">Merchant ID</th>
                <th scope="col" className="px-4 py-3">Merchant Email</th>
                <th scope="col" className="px-4 py-3">Merchant Name</th>
                <th scope="col" className="px-4 py-3">Merchant Address</th>
                <th scope="col" className="px-4 py-3">Gstin</th>
              </tr>
            </thead>
            <tbody>
             
            {
                data?.merchants?.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th scope="row" className=" items-center px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.merchant_id}
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{item.merchant_email}</span>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        {item.merchant_name}
                      </div>
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.merchant_address}</td>
                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.gstin}</td>
                   

                    <div>
      
    </div>
                  </tr>

                ))
              }

            </tbody>
          </table>
        </div>



        </div>
    )
}