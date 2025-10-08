import Container from '../Container/Container'
import { Link } from 'react-router'
import apple from '../../assets/apple.svg'
import play from '../../assets/play.svg'
import hero from '../../assets/hero.png'

const Hero = () => {
    return (
        <>
            <div className="">
                <Container>
                    <h1 className='text-3xl md:text-5xl text-center font-extrabold mt-10 md:mt-20 leading-14'>We Build <br className='hidden md:block' /><span className='bg-gradient-to-tr bg-clip-text text-transparent from-purple-600 to-pink-500'>Productive</span> Apps</h1>
                    <p className='text-gray-900/70 max-w-[800px] mx-auto text-center mt-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className="flex justify-center gap-5 my-10">
                        <Link to='https://play.google.com/store/apps/' className='rounded-md font-medium px-6 py-3 border border-gray-300 items-center gap-3 duration-300 hover:bg-gray-200 flex'> <img className='w-8' src={play} alt="Play Store" /> Google Play</Link>
                        <Link to='https://www.apple.com/app-store/' className='rounded-md font-medium px-6 py-3 border border-gray-300 items-center gap-3 duration-300 hover:bg-gray-200 flex'> <img className='w-8' src={apple} alt="App Store" />App Store</Link>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <img className='w-full' src={hero} alt="hero" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero;