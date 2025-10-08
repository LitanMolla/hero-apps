import React from 'react'
import Container from '../../components/Container/Container'
import downloadsImg from '../../assets/icon-downloads.png'
import reviewImg from '../../assets/icon-review.png'
import ratingsImg from '../../assets/icon-ratings.png'
import { Link, useParams } from 'react-router'
import useAppData from '../../hooks/useAppData'
import { getInstallData, setInstallData } from '../../utilities/LocalStorage/LocalStorage'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner/Spinner'
import AppNotFound from '../../components/AppNotFound/AppNotFound'

const AppsDetails = () => {
  const { apps, pending } = useAppData();
  const { id } = useParams()
  const app = apps?.find(item => item.id === Number(id));
  const appExit = apps?.some(item => item.id === Number(id));
  const { title, size, reviews, ratingAvg, image, downloads, description, companyName, ratings } = app || [];
  const installData = getInstallData();
  const isExit = installData?.find(item => item == id);
  const handleInstall = () => {
    if (isExit) {
      return;
    }
    setInstallData(id)
    toast.success(`${title} Installed`)
  }
  return (
    <>
      {pending && <Spinner />}
      {appExit || pending || <AppNotFound />}
      {
        !pending
        &&
        app
        &&
        <div className="py-10 md:py-20">
          <Container>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <div className="w-70 shadow-gray-300 hover:shadow-xl duration-300 rounded-md overflow-hidden border border-gray-300">
                <img className='w-full  ' src={image} alt={title} />
              </div>
              <div className="space-y-2 flex-1 ">
                <h3 className='text-3xl font-semibold'>{title}</h3>
                <p>Developed by <span className='text-purple-500'>{companyName}</span></p>
                <hr className='border border-gray-300' />
                <div className="flex gap-10">
                  <div className="text-center space-y-1">
                    <img className='w-10 mx-auto' src={downloadsImg} alt="downloads" />
                    <p className=''>Downloads</p>
                    <h4 className='text-4xl font-bold'>{downloads}</h4>
                  </div>
                  <div className="text-center space-y-1">

                    <img className='w-10 mx-auto' src={ratingsImg} alt="ratings" />
                    <p className=''>Average Ratings</p>
                    <h4 className='text-4xl font-bold'>{ratingAvg}</h4>
                  </div>
                  <div className="text-center space-y-1">
                    <img className='w-10 mx-auto' src={reviewImg} alt="review" />
                    <p className=''>Total Reviews</p>
                    <h4 className='text-4xl font-bold'>{reviews}</h4>
                  </div>
                </div>
                <Link onClick={handleInstall} className={`${isExit && 'cursor-not-allowed'} px-6 py-3 bg-green-500 rounded-md text-gray-100 inline-block duration-300 hover:bg-green-600`}>{isExit ? 'Installed' : `Install Now (${size}) `} </Link>
              </div>
            </div>
            <hr className='border-gray-300 my-5' />
            <h4 className='text-xl font-medium'>Ratings</h4>
            <hr className='border-gray-300 my-5' />
            <h4 className='text-xl font-medium'>Description</h4>
            <p className='text-gray-900/60'>{description}</p>
          </Container>
        </div>
      }
    </>
  )
}

export default AppsDetails;