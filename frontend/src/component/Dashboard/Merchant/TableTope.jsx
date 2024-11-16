'use client'
import React, { useState } from 'react'
import { TbPlus, TbSearch } from 'react-icons/tb'
import EnhancedTable from './MerchantTable'

const TableTope = () => {
    const [activeTab, setActiveTab] = useState("all")

    const tabs = [
        {
            tab1: "All Orders",
            number: 100,
            active: "all"
        },
        {
            tab1: "Active Orders",
            number: 2,
            active: "active"
        },
        {
            tab1: "Inactive Orders",
            number: 2,
            active: "inactive"
        },
    ]
    // const data={
    //     all:
    // }

    const handleActive = (active) => {
        setActiveTab(active)
    }
    return (
        <div className='p-4'>
            <div className='w-full flex lg:flex-row justify-between items-center'>
                <p>Customer Orders(100)</p>
                <button className='flex items-center gap-3 p-3 rounded-md bg-[lightgreen]'>
                    <TbPlus />
                    <p>Add new Order</p>
                </button>
            </div>
            <div className='flex items-center gap-4 w-full mt-3'>
                <div className='flex gap-5'>
                    <select className='p-2 border-2 rounded-lg' name="" id="">
                        <option value="">
                            Filters
                        </option>
                    </select>
                    <select className='p-2 border-2 rounded-lg' name="" id="">
                        <option value="">
                            Today
                        </option>
                    </select>
                </div>
                <div className='px-4 py-1 rounded-md border-2 flex items-center gap-3 w-[90%]'>
                    <TbSearch className='text-3xl' />
                    <input placeholder='Search Specific orders' className='outline-none p-1 w-full border-none' type="text" />
                </div>
            </div>
            <div className='bg-white rounded-md p-3'>
                <div className='flex flex-row gap-5 mb-1'>
                    {
                        tabs.map((tab, index) => (
                            <div key={index} onClick={() => handleActive(tab.active)} className={`text-bold flex items-center gap-2 cursor-pointer pb-3 ${activeTab === tab.active ? "border-[lightgreen] border-b-4" : ""}`}>
                                <p>{tab.tab1}</p>
                                <p className='p-1 rounded-md bg-gray-400'>{tab.number}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full overflow-y-auto'>
                    <EnhancedTable />
                </div>
            </div>
        </div>
    )
}

export default TableTope