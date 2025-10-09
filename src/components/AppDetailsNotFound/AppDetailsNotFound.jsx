import errorImg from '../../assets/App-Error.png'
import Container from '../Container/Container'
import { Link } from 'react-router'
const AppDetailsNotFound = () => {
    return (
        <>
            <div className="text-center">
                <Container>
                    <div className="my-10 md:my-20">
                        <div className="space-y-5">
                            <div className="max-w-md mx-auto">
                                <img className='w-full mb-10' src={errorImg} alt="errorImg" />
                            </div>
                            <h4 className='text-3xl md:text-4xl font-bold uppercase'>App Does Not Exist</h4>
                            <p className='text-gray-900/60'>Sorry, the requested app cannot be found. It may have been removed or the link is incorrect.</p>
                            <div className="space-x-5">
                                <Link to='/' className='text-gray-100 bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 rounded-md inline-block duration-300 hover:bg-gradient-to-l'>Home</Link>
                                <Link to='/apps' className='text-gray-100 bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 rounded-md inline-block duration-300 hover:bg-gradient-to-l'>All Apps</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AppDetailsNotFound;