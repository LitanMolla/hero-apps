import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { title, ratingAvg, image, id, downloads} = app || [];
    return (
        <>
            <Link to={`/app-details/${id}`}>
                <div className="bg-white p-4 rounded-md space-y-2 shadow-gray-300 duration-300 hover:shadow-xl">
                    <div className="border border-gray-300 rounded-sm overflow-hidden h-70">
                        <img className='h-full w-full object-cover' src={image} alt={title} />
                    </div>
                    <p className='font-medium'>{title}</p>
                    <div className="flex justify-between items-center">
                        <p className='flex gap-2 items-center bg-green-100 text-green-600 px-4 py-1 rounded-lg'><FiDownload /> {downloads}</p>
                        <p className='flex gap-2 items-center bg-yellow-100 text-yellow-600 px-4 py-1 rounded-lg'><FaStar /> {ratingAvg}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default AppCard