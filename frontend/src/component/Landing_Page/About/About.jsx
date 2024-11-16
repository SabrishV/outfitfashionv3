import Image from "next/image";
import Link from "next/link";


export default function About() {
    return (
        <>
            <div className="bg-[url('/about/unsplash_7RIMS-NMsbc.svg')] w-full align-middle bg-cover h-[60vh] bg-no-repeat flex justify-start items-end">
                <div className="flex flex-col justify-start items-start">
                    <div className="px-[20px] text-start">
                        <p className="text-[#ffff] text-[50px] text-start py-[80px] font-[400]">ABOUT OUTFIT FASHIONS</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center mt-[100px] px-[5%]">
                <div className="flex justify-center text-center space-x-[60px]">
                    <div className="bg-[url('/about/unsplash_W7b3eDUb_2I.svg')] w-full align-middle bg-cover h-[90vh] bg-no-repeat flex justify-center items-end">
                        <div className="flex flex-col justify-start items-start">
                            <div className="px-[20px] text-start">
                                <p className="bg-[#ffff] text-[25px] text-[#024E82] mb-[40px] px-[28px] py-[15px] rounded-[15px] text-start font-[400]">BUY NOW</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="bg-[url('/about/unsplash_a3RhaDG_pNM.svg')] w-full align-middle bg-cover h-[90vh] bg-no-repeat flex justify-center items-end">
                        <div className="flex flex-col justify-start items-start">
                            <div className="px-[20px] text-start">
                                <p className="bg-[#ffff] text-[25px] text-[#024E82] mb-[40px] px-[28px] py-[15px] rounded-[15px] text-start font-[400]">BUY NOW</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="flex flex-col justify-center text-center py-[40px]">
                <p className="text-[40px] font-[700]">OUR</p>
                <p className="text-[40px] font-[700]">PRODUCTS</p>
            </div>
            <div className="flex flex-col px-[5%]">
                <div className="flex space-x-[50px]">
                    <div>
                        <Image src={"/about/Rectangle 8.svg"} height={400} width={400} alt="kidecloth" />
                        <div className="flex flex-col mt-[10px] justify-start text-start">
                            <p className="font-[700]">Kid Clothing</p>
                           
                        </div>
                    </div>
                    <div>
                        <Image src={"/about/Rectangle 8 (1).svg"} height={400} width={400} alt="womencloth" />
                        <div className="flex flex-col mt-[10px] justify-start text-start">
                            <p className="font-[700]">Womens Clothing </p>
                          
                        </div>
                    </div>
                    <div>
                        <Image src={"/about/Rectangle 8 (2).svg"} height={400} width={400} alt="mencloth"/>
                        <div className="flex flex-col mt-[10px] justify-start text-start">
                            <p className="font-[700]">Mens Clothing</p>
                            
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-center text-center py-[70px]">
                <p className="text-[40px] font-[700]">Testimonials</p>
            </div>
            <div className="flex flex-col justify-center gap-[60px] items-center px-[20%]">
            <div className="flex space-x-[40px]">
                <Image src={"/about/unsplash_6W4F62sN_yI.svg"} height={300} width={300} alt="stacy"/>
                <div className="flex flex-col justify-center items-start align-middle gap-[30px]">
                <Image src={"/about/page 1.svg"} height={40} width={40} alt="djhdsjhsj"/>
                    <p className="text-[14px] font-[700]">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
                    <p className="text-[14px] font-[400]">Stacy</p>
                </div>
            </div>


            <div className="flex space-x-[40px]">
                <Image src={"/about/unsplash_6W4F62sN_yI (1).svg"} height={230} width={230}  alt="tiffany"/>
                <div className="flex flex-col justify-center items-start align-middle gap-[30px]">
                <Image src={"/about/page 1.svg"} height={40} width={40} alt="yds"/>
                    <p className="text-[14px] font-[700]">I ordered 5 shirts from them and received them in no time. The customer support was awesome!</p>
                    <p className="text-[14px] font-[400]">Tiffany</p>
                </div>
            </div>


            <div className="flex space-x-[40px]">
                <Image src={"/about/unsplash_6W4F62sN_yI (2).svg"} height={300} width={300} alt="james" />
                <div className="flex flex-col justify-center items-start align-middle gap-[30px]">
                <Image src={"/about/page 1.svg"} height={40} width={40} alt="rsghsa"/>
                    <p className="text-[14px] font-[700]">I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.</p>
                    <p className="text-[14px] font-[400]">James</p>
                </div>
            </div>


            </div>
        </>

    )
}