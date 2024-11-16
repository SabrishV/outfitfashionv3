import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { TbMenu2, TbUser } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import NavLink from "./Navlink";
import UserDetail from "../Navbar/UserDetail";
import ShoppingBag from "./ShoppingBag";

export default function Navigation (){
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    const [user, setUser] = useState(false)

    return (
        <div className="px-[3%] py-[20px] bg-[#FFFFFF] shadow sticky top-0 z-50">
            <div className="w-full flex items-center justify-between">
                <div className="flex space-x-[40px]">
                    <Link href={"/"} className="flex z-[500] space-x-[5px] items-center">
                        <Image
                            width={30}
                            className="h-auto"
                            height={30}
                            src="/navbar/LOGO_OUTFIT.svg"
                            alt="logo"
                        />
                        <span className="text-[30px] font-[600]">Outfit Fashions</span>
                    </Link>
                    <ul className="flex space-x-[35px] pt-[18px] z-[500]">
                        <NavLink className="cursor-pointer font-arimo" href={"/"}>HOME</NavLink>
                        <NavLink className="cursor-pointer" href={"/about"}>ABOUT</NavLink>
                        <NavLink className="cursor-pointer" href={"/contact"}>CONTACT US</NavLink>
                        <NavLink className="cursor-pointer" href={"/join"}>JOIN US</NavLink>
                    </ul>
                </div>
                <div className="flex space-x-[15px] z-[500]">
                <div
                onClick={() => setUser(true)}>
                <TbUser  className="text-[20px] cursor-pointer"/>
                </div>
                <Link href={"/Shoppingbag"} className="relative"
                
                >
                <FiShoppingBag  className="text-[20px] cursor-pointer"/>
                <p className="absolute bg-[#024E82] text-[#ffff] top-[-2px] rounded-[100%] p-[2px] right-[-2px] text-[8px]">10</p>
                </Link>
                <TbMenu2 className="text-[20px] cursor-pointer" />
                </div>
            </div>
            <UserDetail
          user={user}                                                                                                                                                                                                                                       
          setUser={setUser} />
         
        </div>
    );
};


