import Link from "next/link";
import { useState } from "react";
import NewProductData from "./CreateNewData";
import { IoIosArrowForward } from "react-icons/io";
export default function CreateNewProduct (){
    const [activeTab, setActiveTab] = useState(0);
  const menus = [
    {
      name: "Create New Category"
    },
    {
      name: "Draft"
    },
  ];
  const handleClickTab = (data) => {
    setActiveTab(data);
  };
    return(
        <div className="mt-[30px] px-[40px]">
           <div className="flex items-center justify-start gap-1">
            <Link href={"/dashboard/products"} className="font-[700]">Products</Link>
            <IoIosArrowForward />
            <p className="text-[#008B74] font-[700] underline">Create new product category</p>
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
        </div>
        <div className="">{NewProductData[activeTab].content}</div>
      </div>
    </div>
        </div>
    )
}