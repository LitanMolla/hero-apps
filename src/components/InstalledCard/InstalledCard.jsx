import { FaStar } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { Link } from 'react-router'

const InstalledCard = ({app,handleUnistall}) => {
    const { title, size, ratingAvg, image, downloads, id } = app || [];
    
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-white p-4 rounded-md border border-gray-200 gap-5 shadow-gray-300 hover:shadow-xl duration-300">
                <div className="">
                    <div className="flex gap-5 items-center flex-col md:flex-row justify-center md:justify-between">
                        <div className="w-30 border border-gray-200 rounded-sm">
                            <img className='w-full' src={image} alt={title} />
                        </div>
                        <div className="space-y-2">
                            <h4 className='font-medium'>{title}</h4>
                            <div className="flex items-center gap-5">
                                <p className='flex items-center gap-2 text-green-500'><FiDownload />{downloads}</p>
                                <p className='flex items-center gap-2 text-yellow-500'><FaStar />{ratingAvg}</p>
                                <p className='text-gray-900/60'>{size} MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link onClick={()=>handleUnistall(id,title)} className='bg-green-500 px-6 py-2 rounded-md text-gray-100 duration-300 hover:bg-green-600'>Unistall</Link>
            </div>
        </>
    )
}

export default InstalledCard;