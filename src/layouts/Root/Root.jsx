import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import { ToastContainer } from 'react-toastify'
import Spinner from '../../components/Spinner/Spinner'

const Root = () => {
  const navigation = useNavigation();
  const isPending = Boolean(navigation.location);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className='flex-1'>
          { isPending ? <Spinner/> : <Outlet />}
        </main>
        <Footer />
        <ToastContainer
          theme='dark'
        />
      </div>
    </>
  )
}

export default Root