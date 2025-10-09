import appError from '../../assets/App-Error.png'
const AppNotFound = () => {
  return (
    <>
        <div className="text-center space-y-5 my-10">
            <div className="max-w-md w-full mx-auto">
                <img className='w-full my-10' src={appError} alt="Error app" />
            </div>
            <h4 className='text-3xl md:text-4xl font-bold uppercase'>Nothing Matches Your Search</h4>
            <p className='text-gray-900/60'>No applications match your search criteria. Please adjust your keywords or try a different search.</p>
        </div>
    </>
  )
}

export default AppNotFound;