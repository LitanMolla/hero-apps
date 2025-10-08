import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import useAppData from '../../hooks/useAppData';
import AppCard from '../../components/AppCard/AppCard';
import Spinner from '../../components/Spinner/Spinner';
import AppNotFound from '../../components/AppNotFound/AppNotFound';

const Apps = () => {
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const { apps, pending, error } = useAppData();
  const serachValue = search.trim().toLowerCase();
  const searchResulData = apps.filter(app => app.title.toLowerCase().includes(serachValue));
  const handleSearch = (event) => {
    setSearchLoading(true);
    setTimeout(() => setSearchLoading(false), 500)
    setSearch(event.target.value);
  }
  return (
    <>
      <div className="my-10 md:my-20">
        <Container>
          <h2 className='text-3xl md:text-5xl text-center font-bold'>Our All Applications</h2>
          <p className='text-gray-900/60 text-center mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
          <div className="flex justify-between items-center mt-10">
            <h4 className='text-xl font-medium'>({searchResulData.length}) Apps Found</h4>
            <div className="max-w-[400px] w-full">
              <input onChange={handleSearch} className='border w-full outline-0 px-4 py-2 rounded-sm border-gray-300' type="search" placeholder='Search Apps' />
            </div>
          </div>
          {pending && <Spinner />}
          {searchLoading && <Spinner />}
          {searchResulData.length === 0 && !searchLoading && <AppNotFound />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
            {pending || searchLoading || searchResulData.map(app => (<AppCard key={app.id} app={app} />))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Apps