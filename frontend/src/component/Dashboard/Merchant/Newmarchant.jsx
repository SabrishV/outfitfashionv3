"use client";
import { fetchJson } from "@/component/lib/fetchjson";
import React, { useContext, useEffect, useState } from "react";
import { TbX } from "react-icons/tb";


const NewMerchant = ({ openMerchant, setOpenMerchant }) => {
    const [formData, setFormData] = useState({
        merchantName: "",
        merchantEmail: "",
        merchantPassword: "",
        merchantPhone: "",
        merchantAddress: "",
        merchantGstin: ""
      });
      const [message, setMessage] = useState("")
      const [loading, setLoading] = useState(false)
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        try {
          const response = await fetchJson("/api/merchant", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          });


          if (response.message === 'Merchant registration request created Successfully') {
            // Handle successful submission (e.g., show a success message)
            setLoading(false)
            setMessage("Merchant created successfully");
            setTimeout(() => {
              setMessage("");
              setOpenMerchant(false)
              window.location.href = '/dashboard/merchants';
            }, 4000);
          }
        } catch (error) {
          console.error("Error:", error);
          setLoading(false)
        }
      };
    
  return (

    <div
    // onClick={() => setOpenProduct(false)}
    className={`flex px-5 w-full h-screen transform transition-transform duration-300 ease-in-out bounce ${
      openMerchant ? "translate-y-0" : "translate-y-[-100%]"
    } fixed z-[200] top-0 left-0 bottom-0 justify-center items-center`}
  >
  <div
    className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll`}
  >
    <div
      className={`modal bg-black  bg-opacity-40 fixed inset-0 flex items-center  justify-center`}
    >
      <div
        className={`modal-content  lg:w-[40%] h-[90vh] w-full rounded-md overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
      >
        <div className=" bg-[#ffff] p-6 items-center">
            
          <h2 className="text-[20px] font-[700] flex justify-center items-center text-[#008B74] ">Create Merchant</h2>
          <span
            onClick={() => setOpenMerchant(false)}
            className="text-xl cursor-pointer text-[var(--text-color)]"
          >
            <TbX />
          </span>
          <form action="" onSubmit={handleSubmit}>
          
          <div className="border border-[#b4b3b3] mt-[20px] px-[10px] rounded-[10px]">
            <div className="py-[20px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px] mt-[10px]">Merchant Name<span>*</span></label>
            <input
                      className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full"
                      type="text"
                      name="merchantName"
                      value={formData.merchantName}
                      onChange={handleChange}
                      placeholder="Merchant Name"
                      id="merchantName"
                      required
                    />
            </div>
            <div className="py-[20px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px] mt-[10px]">Merchant email<span>*</span></label>
            <input
                      className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full"
                      type="text"
                      name="merchantEmail"
                      value={formData.merchantEmail}
                      onChange={handleChange}
                      placeholder="Merchant Email"
                      id="merchantEmail"
                      required
                    />
            </div>
            <div className="py-[20px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px] mt-[10px]">Merchant password<span>*</span></label>
            <input
                      className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full"
                      type="password"
                      name="merchantPassword"
                      value={formData.merchantPassword}
                      onChange={handleChange}
                      placeholder="Merchant Password"
                      id="merchantPassword"
                      required
                    />
            </div>
            <div className="py-[20px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px] mt-[10px]">Merchant phone<span>*</span></label>
            <input
                      className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full"
                      type="number"
                      name="merchantPhone"
                      value={formData.merchantPhone}
                      onChange={handleChange}
                      placeholder="Merchant Phone"
                      id="merchantPhone"
                      required
                    />
            </div>
            <div className="py-[20px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px] mt-[10px]">Merchant address<span>*</span></label>
            <input
                      className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full"
                      type="text"
                      name="merchantAddress"
                      value={formData.merchantAddress}
                      onChange={handleChange}
                      placeholder="Merchant Address"
                      id="merchantAddress"
                      required
                    />
            </div>
            <div className="py-[20px]">
            <label htmlFor="" className="text-[#008B74] font-[700] text-[16px] mt-[10px]">Merchant Gstin<span>*</span></label>
            <input
                      className="border border-[#b4b3b3] outline-none rounded-[10px] mt-[10px] py-[10px] px-[5px] text-[black] w-full"
                      type="text"
                      name="merchantGstin"
                      value={formData.merchantGstin}
                      onChange={handleChange}
                      placeholder="Merchant Gstin"
                      id="merchantGstin"
                      required
                    />
            </div>
          </div>
          <p className="text-[#008B74]">{message}</p>
          <div className="flex text-center justify-center gap-[70px] mt-[20px]">
                  <button disabled={loading} type="submit" className="bg-[#008B74] border border-[#008b74] px-[35px] rounded-[7px] py-[15px] text-white">{loading ? "Creating..." :"Save"}</button>
                </div>
          </form>

        </div>
        
       
       
      </div>
    </div>
  </div>
  </div>

    
  );
};

export default NewMerchant;