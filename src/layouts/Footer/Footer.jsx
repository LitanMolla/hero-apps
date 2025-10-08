import Container from '../../components/Container/Container'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-10 md:pt-20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
            <div className="md:max-w-100">
              <div className="flex gap-3 items-center">
                <img alt="Logo" className="h-11" src={logo} />
                <span className='text-xl font-medium'>HERO.IO</span>
              </div>
              <p className="mt-6 text-sm">
                <b>Hero Apps</b> serves as your comprehensive platform to find, download, and experience top mobile applications. We provide secure, current, and popular apps for both Android and iOS — everything conveniently located in one spot.
                Uncover smarter applications, more quickly.
              </p>
            </div>
            <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
              <div>
                <h2 className="font-semibold mb-5 uppercase">Quick Links</h2>
                <ul className="text-sm space-y-2">
                  <li><Link to='/' className='duration-300 hover:text-purple-500'>Home</Link></li>
                  <li><Link to='/apps' className='duration-300 hover:text-purple-500'>Apps</Link></li>
                  <li><Link to='/installation' className='duration-300 hover:text-purple-500'>Installation</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-5 uppercase">Contact</h2>
                <div className="text-sm space-y-2">
                  <p>+880170000000</p>
                  <p>contact@hero.ai</p>
                  <div className="flex gap-5">
                    <Link className='duration-300 hover:text-purple-500'><FaXTwitter /></Link>
                    <Link className='duration-300 hover:text-purple-500'><FaLinkedin /></Link>
                    <Link className='duration-300 hover:text-purple-500'><FaFacebook /></Link>
                    <Link className='duration-300 hover:text-purple-500'><FaInstagram /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-4 text-center text-sm pb-5">Copyright 2025 © HERO.IO. All Right Reserved.</p>
        </Container>
      </footer>
    </>
  )
}

export default Footer;