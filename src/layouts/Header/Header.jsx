import Container from '../../components/Container/Container'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router'
import { FaGithub } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsopen] = useState(false)
    const menu = <>
        <li><NavLink onClick={() => setIsopen(prv => !prv)} to='/' className={({ isActive }) => (isActive ? 'bg-gradient-to-tr bg-clip-text text-transparent from-purple-600 to-pink-500 font-medium border-b-2 border-purple-500' : 'font-medium')}>Home</NavLink></li>
        <li><NavLink onClick={() => setIsopen(prv => !prv)} to='/apps' className={({ isActive }) => (isActive ? 'bg-gradient-to-tr bg-clip-text text-transparent from-purple-600 to-pink-500 font-medium border-b-2 border-purple-500' : 'font-medium')}>Apps</NavLink></li>
        <li><NavLink onClick={() => setIsopen(prv => !prv)} to='/installation' className={({ isActive }) => (isActive ? 'bg-gradient-to-tr bg-clip-text text-transparent from-purple-600 to-pink-500 font-medium border-b-2 border-purple-500' : 'font-medium')}>Installation</NavLink></li>
    </>
    return (
        <>
            <header className='py-4 bg-white'>
                <Container>
                    <div className="flex justify-between items-center">
                        <button onClick={() => setIsopen(prv => !prv)} className='text-2xl md:hidden'><FaBarsStaggered /></button>
                        <Link to='/' className='flex items-center gap-2'>
                            <img className='w-10' src={logo} alt="Logo" />
                            <span className='text-2xl font-semibold bg-gradient-to-tr bg-clip-text text-transparent from-purple-600 to-pink-500'>HERO.IO</span>
                        </Link>
                        <ul className='md:flex gap-5 hidden'>
                            {menu}
                        </ul>
                        <Link to='https://github.com/LitanMolla' target='_blank' className='bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center text-gray-100 px-5 py-2.5 rounded-md gap-2.5 duration-300 hover:bg-gradient-to-tl'><FaGithub />Contribute</Link>
                    </div>
                    {isOpen && <ul className='mt-5 space-y-2'>{menu}</ul>}
                </Container>
            </header>
        </>
    )
}

export default Header