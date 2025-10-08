import { Link } from 'react-router'

const InstalledAppNotFound = () => {
    return (
        <>
            <div className="text-center space-y-5 my-10 md:my-20">
                <h3 className='uppercase text-3xl font-semibold'>Oops! You don’t have any installed apps.</h3>
                <p className='text-gray-900/60'>Nothing installed yet! Head over to Apps and grab your favorites — they’ll show up here once added.</p>
                <Link to='/apps' className='text-gray-100 bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 rounded-md inline-block duration-300 hover:bg-gradient-to-l'>Apps</Link>
            </div>
        </>
    )
}

export default InstalledAppNotFound;