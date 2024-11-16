"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Order } from "../Order/Data"
// import DeleteProduct from "./Delete";

export default function ActiveOrder() {
  const [deleteProduct, setDeleteProduct] = useState()

  const [expandedRow, setExpandedRow] = useState(null);

  const handleImageClick = (index) => {
    if (expandedRow === index) {
      // If the clicked row is already expanded, collapse it
      setExpandedRow(null);
    } else {
      // If the clicked row is not expanded, expand it and collapse the previously expanded row
      setExpandedRow(index);
    }
  };
  return (
    

    <div className="border  mt-[10px]">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">

        <div className="overflow-x-auto">
          <table className="w-full text-[14px] text-left">
          <thead className=" text-[#006F5D]">
  <tr>
    <th className="p-4 flex items-center">
      
        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="checkbox-all" className="sr-only">checkbox</label>
    </th>
    <th className="px-4 py-3">Order ID</th>
    <th className="px-4 py-3">Customer Name</th>
    <th className="px-4 py-3">Email</th>
    <th className="px-4 py-3">Mobile_no.</th>
    <th className="px-4 py-3">Address</th>
    <th className="px-4 py-3">Placed Time</th>
    <th className="px-4 py-3">Time</th>
    <th className="px-4 py-3">Delivery Status</th>
    <th className="px-4 py-3">Payment Status</th>
    <th className="px-4 py-3">Dispatch Time</th>
    <th className="px-4 py-3">Courier id</th>
    <th className="px-4 py-3">Received Time</th>
    <th className="px-4 py-3">Action</th>
  </tr>
</thead>


              {
                Order?.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="w-4 px-4 py-3">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th scope="row" className=" items-center  font-medium text-gray-900 whitespace-nowrap dark:text-white text-[14px]">
                      {/* <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3"/> */}
                      {item.order_id}
                    </th>
                    <td className="px-4 py-2">
                      <span className="bg-primary-100 text-primary-800 text-xs text-sm px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 text-[14px]">{item.customer_name}</span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center">
                        {/* <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div> */}
                        {item.email}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white">{item.mobile_no}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white">{item.address}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white flex flex-col"><spn>{item.placed_date}</spn><span>{item.placed_time}</span></td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white">{item.total}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white">{item.delivery_status}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white">{item.payment_status}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white flex flex-col"><span>{item.dispatch_date} </span> <span>{item.dispatch_time}</span></td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white">{item.courier_id}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 whitespace-nowrap dark:text-white "><span className="flex flex-col"><span>{item.receive_date}</span>{item.receive_time}</span></td>
                    {/* <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center"
                      >
                        <Image
                        
                        src={item.images} height={100} width={100} />
                      </div>
                    </td> */}

         
      <td
        onClick={() => handleImageClick(index)}
        className="px-4 pt-4 flex items-center font-medium text-gray-900 whitespace-nowrap cursor-pointer"
      >
        <BsThreeDotsVertical />
        {expandedRow === index && (
                <div className="flex flex-col gap-4 items-center  shadow">
                  <p className=" px-[30px] py-[10px] hover:text-[#008B74]">Modify</p>
                  <p  className=" px-[30px] py-[10px] hover:text-[#008B74]">Delete</p>
                </div>
              )}
      </td>
    
                  </tr>

                ))
              }

{/* <DeleteProduct 
          deleteProduct={deleteProduct} 
          setDeleteProduct={setDeleteProduct} /> */}


           
          </table>
        </div>
        <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">1000</span>
          </span>
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>




  );
}