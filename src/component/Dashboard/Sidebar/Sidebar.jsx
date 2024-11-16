import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { PiTShirtLight } from "react-icons/pi";
import { PiGearSixLight } from "react-icons/pi";
import { PiWalletLight } from "react-icons/pi";
import { PiCaretUp } from "react-icons/pi";
import { PiCaretDown } from "react-icons/pi";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const [showOrderDropdown, setShowOrderDropdown] = useState(false);
  const [showOrderDropdown1, setShowOrderDropdown1] = useState(false);
  const [showOrderDropdown2, setShowOrderDropdown2] = useState(false);

  const router = useRouter();

  const toggleOrderDropdown = () => {
    setShowOrderDropdown(!showOrderDropdown);
    setShowOrderDropdown1(false);
    setShowOrderDropdown2(false);
  };

  const toggleOrderDropdown1 = () => {
    setShowOrderDropdown1(!showOrderDropdown1);
    setShowOrderDropdown2(false);
    setShowOrderDropdown(false);
  };

  const toggleOrderDropdown2 = () => {
    setShowOrderDropdown2(!showOrderDropdown2);
    setShowOrderDropdown1(false);
    setShowOrderDropdown(false);
  };

  return (
    <div className={`fixed h-screen bg-[#FFFFFF]`}>
      <div className="py-3 px-3 lg:px-6 flex-col">
        <div className="flex gap-2 lg:justify-start justify-between items-center">
          <Image height={50} width={50} src="/navbar/LOGO_OUTFIT.svg" alt="" />
          <div>
            <p className="font-[700]">OUTFITS</p>
            <p>Duckui@demo.com</p>
          </div>
        </div>
      </div>

      <div className="lg:px-3 pt-[70px] px-1 lg:pl-6 lg:pr-6 border-r-2 border-[#E3EEEC]">
        <div className="flex flex-col gap-[10px]">
          <Link
            href={"/dashboard"}
            className={`flex items-center gap-3 font-[700] hover:bg-[#E3EEEC] hover:text-[#008B74] py-[15px] px-[10px] ${router.pathname === '/dashboard' ? 'bg-green-200' : ''}`}
          >
            <RxDashboard />
            <p>Dashboard</p>
          </Link>
          <Link href={"/dashboard/merchants"} className="flex items-center gap-3 font-[700] hover:bg-[#E3EEEC] hover:text-[#008B74] py-[15px] px-[10px]">
            <FiUsers />
            <p>Merchants</p>
          </Link>
          <div
            onClick={toggleOrderDropdown}
            className="flex items-center gap-3 font-[700] hover:bg-[#E3EEEC] hover:text-[#008B74] py-[15px] px-[10px] cursor-pointer"
          >
            <PiShoppingCartSimpleLight />
            <p>Orders</p>
            <div className="ml-auto">
              {showOrderDropdown ? (
                <PiCaretUp />
              ) : (
                <PiCaretDown />
              )}
            </div>
          </div>
          {showOrderDropdown && (
            <div className="pl-[50px] flex flex-col">
              <Link href={"/dashboard/orders"} className=" hover:text-[#008B74]">Customer orders</Link>
              <Link href={"/dashboard/order"} className="  hover:text-[#008B74]">Merchants orders</Link>
            </div>
          )}

          <div
            onClick={toggleOrderDropdown1}
            className="flex items-center gap-3 font-[700] hover:bg-[#E3EEEC] hover:text-[#008B74] py-[15px] px-[10px] cursor-pointer"
          >
            <PiTShirtLight />
            <p>Products</p>
            <div className="ml-auto">
              {showOrderDropdown1 ? (
                <PiCaretUp />
              ) : (
                <PiCaretDown />
              )}
            </div>
          </div>
          {showOrderDropdown1 && (
            <div className="pl-[50px] flex flex-col">
              <Link href={"/dashboard/products"} className=" hover:text-[#008B74]">Product</Link>
              <Link href={"/dashboard/products"} className="  hover:text-[#008B74]">Product categories</Link>
              <Link href={"/dashboard/products"} className="  hover:text-[#008B74]">Product type</Link>
              <Link href={"/dashboard/products"} className="  hover:text-[#008B74]">Product margins</Link>
            </div>
          )}

          <Link
            href={"/dashboard/transactions"}
            className="flex items-center gap-3 font-[700] hover:bg-[#E3EEEC] hover:text-[#008B74] py-[15px] px-[10px]"
          >
            <PiWalletLight />
            <p>Transactions</p>
          </Link>
          
          <div
            onClick={toggleOrderDropdown2}
            className="flex items-center gap-3 font-[700] hover:bg-[#E3EEEC] hover:text-[#008B74] py-[15px] px-[10px] cursor-pointer"
          >
             <PiGearSixLight />
            <p>Settings</p>
            <div className="ml-auto">
              {showOrderDropdown2 ? (
                <PiCaretUp />
              ) : (
                <PiCaretDown />
              )}
            </div>
          </div>
          {showOrderDropdown2 && (
            <div className="pl-[50px] flex flex-col">
              {/* <Link href={"/dashboard/products"} className=" hover:text-[#008B74]">Product</Link>
              <Link href={"/dashboard/products"} className="  hover:text-[#008B74]">Product categories</Link>
              <Link href={"/dashboard/products"} className="  hover:text-[#008B74]">Product type</Link>
              <Link href={"/dashboard/products"} className="  hover:text-[#008B74]">Product margins</Link> */}
            </div>
          )}
        </div>
      </div>
      <div className="pt-8 absolute bottom-0">
        <ul className="px-2 py-6">
          <button>
            <li className="text-[black] text-sm font-normal flex items-center py-2 px-4 gap-1">
              <BiLogOut />
              Log Out
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
