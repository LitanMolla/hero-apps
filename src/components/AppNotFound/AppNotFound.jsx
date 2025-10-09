import appError from '../../assets/App-Error.png'
import { Link } from 'react-router'
const AppNotFound = () => {
  return (
    <>
        <div className="text-center space-y-5 my-10">
            <div className="max-w-md w-full mx-auto">
                <img className='w-full my-10' src={appError} alt="Error app" />
            </div>
            <h4 className='text-3xl md:text-4xl font-bold uppercase'>Nothing Matches Your Search</h4>
            <p className='text-gray-900/60'>No applications match your search criteria. Please adjust your keywords or try a different search.</p>
            <Link to='/' className='text-gray-100 bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 rounded-md inline-block duration-300 hover:bg-gradient-to-l'>Go Back!</Link>
        </div>
    </>
  )
}

export default AppNotFound;