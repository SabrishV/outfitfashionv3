import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import ProductData from "./ProductData";
import { CiExport } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { LiaFilterSolid } from "react-icons/lia";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import NewProduct from "./NewProduct";
export default function Product (){
    const [activeTab, setActiveTab] = useState(0);
    const [openProduct, setOpenProduct] = useState(false)
  const menus = [
    {
      name: <div>All Product <span className="bg-[#CCEDE8] rounded-[5px] py-[4px] px-[7px]">100</span></div>
    },
    {
      name: "Pending Approval"
    },
    {
      name: "Rejected Request"
    },
    {
        name: "Product Margin"
      },
  ];
  const handleClickTab = (data) => {
    setActiveTab(data);
  };
  const [isClicked, setIsClicked] = useState(false);
    const [isClickedDate, setIsClickedDate] = useState(false);
    const [isStatus, setIsStatus] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setIsClickedDate(false);
    };

    const handleClickDate = () => {
        setIsClickedDate(!isClickedDate);
        setIsClicked(false);
    };

    const handleClickStatus = () => {
        setIsStatus(!isStatus);
    };
    return(
        <div className="mt-[30px] w-full">
            <div className="flex justify-between w-full items-center">
                <div className="flex gap-1 text-[20px]">
                <p className="font-[700]">Product</p>
                <p className="font-[700]">(100)</p>
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
                <NewProduct 
          openProduct={openProduct} 
          setOpenProduct={setOpenProduct} />
            </div>
            <div className="mt-[40px] flex gap-3">
                <div className="w-[30%] flex items-center gap-[15px]">
                    <div className="flex gap-2 items-center text-[#005446] cursor-pointer rounded-[7px] py-[7px] font-[600] px-[15px] border border-[#005446]" onClick={handleClick}>
                        <LiaFilterSolid className="font-[600]" />
                        <p>Filters</p>
                        {isClicked ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </div>
                    {
                        isClicked && (
                            <div className="absolute top-[260px] bg-[#ffff] shadow p-[10px] z-[500] rounded-[10px] w-[17%] border">
                                <p className="pb-[10px] font-[700]">Filter</p>
                                <div className=" rounded-[10px] border flex items-center px-4">
                                    <TbSearch className="text-xl text-[var(--text-color)]" />
                                    <input
                                        type="text"
                                        className="p-2 w-[94%] outline-none text-[var(--text-color)] bg-transparent"
                                        placeholder="Search..."
                                    />
                                </div>
                                <div className="mt-[10px] border ">
                                    <p onClick={handleClickStatus} className="flex text-[14px] mt-2 font-[600] gap-2 px-[10px] items-center cursor-pointer">

                                        {isStatus ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                                        Status
                                    </p>

                                    {
                                        isStatus && (
                                            <div className="px-[20px]">
                                                <div className="flex gap-2">
                                                    <th className="">

                                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="checkbox-all" className="sr-only">checkbox</label>
                                                    </th>
                                                    <p>Pending</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <th className="">

                                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="checkbox-all" className="sr-only">checkbox</label>
                                                    </th>
                                                    <p>In Ships</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <th className="">

                                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="checkbox-all" className="sr-only">checkbox</label>
                                                    </th>
                                                    <p>Shipping</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <th className="">

                                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="checkbox-all" className="sr-only">checkbox</label>
                                                    </th>
                                                    <p>Unpaid</p>
                                                </div>

                                                <div className="flex gap-2">
                                                    <th className="">

                                                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="checkbox-all" className="sr-only">checkbox</label>
                                                    </th>
                                                    <p>Paid</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <p className="flex text-[14px] font-[600] my-4 gap-2 px-[10px] items-center cursor-pointer">

                                        {isStatus ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                                        List Option 4
                                    </p>
                                </div>
                                <div className="flex justify-between py-[10px]">
                                    <button className="bg-[#005446] border border-[#005446] text-[#ffff] py-[8px] px-[30px]">Apply</button>
                                    <button className="border-[#005446] border py-[8px] px-[30px]">Cancel</button>
                                </div>

                            </div>
                        )
                    }

                    <div onClick={handleClickDate} className="flex gap-2 items-center text-[#005446] cursor-pointer rounded-[7px] py-[7px] font-[600] px-[15px] border border-[#005446]">
                        <CiCalendar className="font-[600]" />
                        <p>Today</p>
                        {isClickedDate ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                    </div>
                    {
                        isClickedDate && (
                            <div className="absolute top-[260px] bg-[#ffff] shadow p-[10px] w-[17%] rounded-[10px] z-[500] border">
                                <p className="pb-[10px] font-[700]">Pick date</p>
                                <div className="mt-[10px] border px-[10px]">
                                    <div className="flex gap-2 mt-2">
                                        <th className="">

                                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-all" className="sr-only">checkbox</label>
                                        </th>
                                        <p>Today</p>
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <th className="">

                                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-all" className="sr-only">checkbox</label>
                                        </th>
                                        <p>Last 7 days</p>
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <th className="">

                                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-all" className="sr-only">checkbox</label>
                                        </th>
                                        <p>Last month</p>
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <th className="">

                                            <input id="checkbox-all" type="checkbox" className=" bg-gray-100 border-gray-300 rounded-full text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-all" className="sr-only">checkbox</label>
                                        </th>
                                        <p>Last 6 months</p>
                                    </div>
                                    <p className="text-[#005446] my-4">
                                        + Add Custom Date
                                    </p>

                                </div>
                                <div className="flex justify-between py-[10px]">
                                    <button className="bg-[#005446] border border-[#005446] text-[#ffff] py-[8px] px-[30px]">Apply</button>
                                    <button className="border-[#005446] border py-[8px] px-[30px]">Cancel</button>
                                </div>

                            </div>
                        )
                    }

                </div>
                <div className="lg:w-[70%] flex gap-2 px-[10px] rounded-[7px] cursor-pointer items-center border border-[#CECECE]">
                    <GoSearch />
                    <input className="outline-none lg:w-[50%]" type="text" name="" id="" placeholder="Search specific product" />
                </div>
            </div>

            <div className="flex gap-2 lg:hidden mt-[20px]">
                            <div className="bg-[#00A78B] flex items-center gap-1 text-white py-[10px] px-[20px] cursor-pointer rounded-[7px]">
                                <p>Import</p>
                                <CiExport />
                            </div>
                            <div className="bg-[#00A78B] flex items-center gap-1 text-white py-[10px] px-[20px] cursor-pointer rounded-[7px]">
                                <p>Export</p>
                                <CiImport />
                            </div>
                        </div>

            <div className="mt-[30px]">
      <div className=" flex flex-col justify-between">
        <div className="flex items-center justify-between">
        <div className=" flex gap-3">
          {menus.map((menu, index) => (
            
            <button
              onClick={() => handleClickTab(index)}
              key={index}
              className={` flex items-center align-middle space-x-[5px] ${
                activeTab === index ? "text-[#008B74] font-[700] border border-b-[#005446] border-l-[white] border-r-[white] border-t-[white]" : " text-[#AEAEAE]"
              }  `}
            >
              <span className="lg:py-[10px]">{menu.icon}</span>
              <span className="lg:py-[10px]">{menu.name}</span>
            </button>
          ))}
        </div>
        <div className="lg:flex gap-2  hidden">
                    <div className="bg-[#00A78B] flex items-center gap-1 text-white py-[10px] px-[20px] cursor-pointer rounded-[7px]">
                    <p>Import</p>
                    <CiExport />
                    </div>
                    <div className="bg-[#00A78B] flex items-center gap-1 text-white py-[10px] px-[20px] cursor-pointer rounded-[7px]">
                    <p>Export</p>
                    <CiImport />
                    </div>
                </div>
        </div>
        <div className="">{ProductData[activeTab].content}</div>
      </div>
    </div>
        </div>
    )
}