import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const AppCard = () => {
    return (
        <>
            <div className="bg-white p-4 rounded-md space-y-2">
                <div className="border border-gray-300 rounded-sm overflow-hidden h-70">
                    <img className='h-full w-full object-cover' src="https://play-lh.googleusercontent.com/96_mWv5NI3VsON40Wt1l5Xjw2gjy36hzbv5oRf10Vawtf9hKZjgnWqy7_i30-HqapndX" alt="" />
                </div>
                <p className='font-medium'>Forest: Focus for Productivity</p>
                <div className="flex justify-between items-center">
                    <p className='flex gap-2 items-center bg-green-100 text-green-600 px-4 py-1 rounded-lg'><FiDownload /> 9M</p>
                    <p className='flex gap-2 items-center bg-yellow-100 text-yellow-600 px-4 py-1 rounded-lg'><FaStar /> 9</p>
                </div>
            </div>
        </>
    )
}

export default AppCard