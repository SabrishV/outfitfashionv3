import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div className="bg-[url('/contact/Contact.svg')] w-full bg-cover h-[60vh] bg-no-repeat flex justify-start items-end">
                <div className="flex flex-col justify-start items-start">
                    <div className="px-[20px] text-start">
                        <p className="text-[#fff] text-[50px] text-start py-[80px] font-[400]"></p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center mt-[100px] px-[5%] text-center">
                <p className="text-[24px] font-[400]">We would love to hear from you.</p>
                <p className="text-[18px] text-[#555] mt-[10px]">If you have any query or suggestion, you can contact us here. We look forward to hearing from you.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-[40px] px-[5%] space-y-[20px] lg:space-y-0 lg:space-x-[20px]">
                {/* Contact Form with Bottom Padding */}
                <form className="w-full lg:w-2/3 max-w-md lg:max-w-none pb-[40px]">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-[10px] my-[10px] text-[16px] border border-gray-300 rounded-[5px]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-[10px] my-[10px] text-[16px] border border-gray-300 rounded-[5px]"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full p-[10px] my-[10px] h-[100px] text-[16px] border border-gray-300 rounded-[5px] resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#333] text-[#fff] p-[10px] text-[16px] font-[700] rounded-[5px] mt-[10px] hover:bg-[#555]"
                    >
                        SEND MESSAGE
                    </button>
                </form>

                {/* Contact Information */}
                <div className="w-full lg:w-1/3 flex flex-col space-y-[30px] text-left">
                    <div>
                        <p className="text-[24px] font-[700] mb-[10px]">Visit Us</p>
                        <p className="text-[16px] text-[#555]">OUTFIT FASHIONS, COIMBATORE.</p>
                    </div>
                    <div>
                        <p className="text-[24px] font-[700] mb-[10px]">Get In Touch</p>
                        <p className="text-[16px] text-[#555]">You can get in touch with us through this email:</p>
                        <p className="text-[16px] text-[#555]">sales.outfitfashions@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}
