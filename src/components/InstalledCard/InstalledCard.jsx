import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { Link } from 'react-router'

const InstalledCard = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-white p-4 rounded-md border border-gray-200 gap-5 shadow-gray-300 hover:shadow-xl duration-300">
                <div className="">
                    <div className="flex gap-5 items-center flex-col md:flex-row justify-center md:justify-between">
                        <div className="w-30 border border-gray-200 rounded-sm">
                            <img className='w-full' src="https://play-lh.googleusercontent.com/96_mWv5NI3VsON40Wt1l5Xjw2gjy36hzbv5oRf10Vawtf9hKZjgnWqy7_i30-HqapndX" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h4 className='font-medium'>Forest: Focus for Productivity</h4>
                            <div className="flex items-center gap-5">
                                <p className='flex items-center gap-2 text-green-500'><FiDownload />9M</p>
                                <p className='flex items-center gap-2 text-yellow-500'><FaStar />5</p>
                                <p className='text-gray-900/60'>250 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='bg-green-500 px-6 py-2 rounded-md text-gray-100 duration-300 hover:bg-green-600'>Unistall</Link>
            </div>
        </>
    )
}

export default InstalledCard