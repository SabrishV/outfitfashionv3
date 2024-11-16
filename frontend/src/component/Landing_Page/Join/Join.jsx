import Image from "next/image";

export default function BecomeMerchant() {
    return (
        <div className="flex flex-col items-center px-[5%] py-[60px]">
            {/* Header Section */}
            <h1 className="text-[28px] font-[400] mt-[10px] text-center text-[#333]">
                Become a Merchant
            </h1>

            {/* Image Section */}
            <div className="my-[20px] w-full max-w-[1000px] h-auto">
                <Image
                    src="/join/join.svg" // Replace with your actual image path
                    alt="Merchant working"
                    width={1000}
                    height={200}
                    className="rounded-md"
                />
            </div>

            {/* Description Text */}
            <p className="text-[20px] text-center max-w-[600px] mb-[30px] text-[#333]">
                Now, sell to millions of people in your state, regardless of how big or little your company is.
            </p>

            {/* Register Button */}
            <button className="bg-[#1E3A8A] text-[#fff] px-[25px] py-[12px] text-[16px] font-[500] rounded-[5px] mb-[40px] hover:bg-[#2C4D9A]">
                Register now
            </button>

            {/* Requirements List */}
            <div className="text-[16px] font-[400] text-[#333] mt-[20px] max-w-[1000px] w-full">
                <p className="mb-[10px]">All you need to sell products:</p>
                <div className="flex flex-col space-y-[8px] items-start">
                    <p className="flex items-center space-x-[10px]">
                        <span className="text-blue-500 text-[20px]">✓</span> <span>GSTIN</span>
                    </p>
                    <p className="flex items-center space-x-[10px]">
                        <span className="text-blue-500 text-[20px]">✓</span> <span>Bank Account</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
