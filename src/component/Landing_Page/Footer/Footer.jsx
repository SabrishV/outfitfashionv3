import Image from "next/image";
import Link from "next/link";
import { LiaGreaterThanSolid } from "react-icons/lia";
const Footer =()=>{
    return(
        <div className="bg-[#FBFBFB] px-[5%] py-[50px]">

            <div className="flex justify-between">
                <div>
                    <p className="my-[20px] text-[16px] font-[700]">COMPANY INFO</p>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p> About Us</p> </Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Latest Posts</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Contact Us</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Shop</p></Link>
                </div>
                <div>
                    <p className="my-[20px] text-[16px] font-[700]">HELP LINKS</p>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Order Status</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Delivery</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Shipping Info</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>FAQ</p></Link>
                </div>
                <div>
                    <p className="my-[20px] text-[16px] font-[700]">USEFUL LINKS</p>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Special Offers</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Gift Cards</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Advertising</p></Link>
                    <Link href={"/"} className="cursor-pointer hover:text-[#024E82]"><p>Terms of Use</p></Link>
                </div>
                <div>
                    <p className="my-[20px] text-[16px] font-[700]">GET IN THE KNOW</p>
                    <div className="flex">
                        <div>
                        <input className="outline-none " type="text" name="" id="" placeholder="Enter email" />
                        <div className="border-b border-[#414040]"></div>
                        </div>
                        <LiaGreaterThanSolid />
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-[40px] mb-[20px]"> 
                <div>
                    <p className="text-[14px]">© 2020 Outfit Fashions</p>
                    <div className="flex space-x-[10px]">
                        <Link href={"/"} className="text-[14px] cursor-pointer hover:text-[#024E82]">Privacy Policy</Link>
                        <Link href={"/"} className="text-[14px] cursor-pointer hover:text-[#024E82]">Terms & Conditions</Link>
                    </div>
                </div>
                <div className="flex space-x-[20px]">
                <Image src={"/hero/Rectangle 13.svg"} height={50} width={50} alt="imagtif" />
                <Image src={"/hero/Rectangle 14.svg"} height={50} width={50} alt="imagetef"/>
                <Image src={"/hero/Rectangle 15.svg"} height={50} width={50} alt="imagefaz"/>
                <Image src={"/hero/Rectangle 16.svg"} height={50} width={50} alt="imagesgh"/>

                </div>
            </div>
        </div>
    )
}
export default Footer;