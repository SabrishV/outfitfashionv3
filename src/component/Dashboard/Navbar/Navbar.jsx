import Image from "next/image";
import { FcMenu } from "react-icons/fc";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  

  
  return (
    <nav className="px-[50px] flex justify-end py-[19px] top-0 w-[100%] nav-wrapper z-[200]">
       
        {/* <FcMenu className="text-[30px] mr-4"/> */}
        <div className="flex gap-4 justify-end items-center ">  
        <IoMdNotificationsOutline  className="text-[#008B74] text-[30px]"/>
        <div className="flex gap-2">
            <Image src={"/navbar/Group 1079.svg"} height={40} width={40} alt="user"/>
            <div>
                <p className="font-[700]">Alya singh</p>
                <p>Alyasingh@gmail.com</p>
            </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
