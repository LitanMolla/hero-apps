import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import InstalledCard from '../../components/InstalledCard/InstalledCard'
import useAppData from '../../hooks/useAppData';
import { getInstallData, removeItem } from '../../utilities/LocalStorage/LocalStorage';
import Spinner from '../../components/Spinner/Spinner';
import InstalledAppNotFound from '../../components/InstalledAppNotFound/InstalledAppNotFound';
import { toast } from 'react-toastify';

const Installation = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState('');
  const { apps, pending } = useAppData();
  useEffect(() => {
    const installData = getInstallData();
    const filter = apps?.filter(item => installData.includes(String(item.id)));
    setInstalledApp([...filter]);
  }, [apps]);
  const handleUnistall = (id,title) => {
    removeItem(id);
    const filter = installedApp?.filter(i => i.id !== id);
    setInstalledApp([...filter]);
    toast.warn(`${title} Uninstalled`)
  }
  const handleSort = () => {
    if (sort === 'lowtohigh') {
      const sortData = installedApp.sort((a, b) => a.size - b.size);
      setInstalledApp([...sortData]);
    } else if (sort === 'highttolow') {
      const sortData = installedApp.sort((a, b) => b.size - a.size);
      setInstalledApp([...sortData]);
    }
  }
  return (
    <>
      <div className="my-10 md:my-20">
        <Container>
          <h2 className='text-3xl md:text-5xl text-center font-bold'>Your Installed Apps</h2>
          <p className='text-gray-900/60 text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>
          <div className="flex justify-between items-center my-10">
            <h4 className='text-xl font-medium'>{installedApp.length} Apps Found</h4>
            <select onChange={(event) => setSort(event.target.value)} onClick={handleSort} className='border outline-0 px-4 py-2 rounded-sm border-gray-300 bg-white'>
              <option value="">Sort By Size</option>
              <option value="lowtohigh">Low to high</option>
              <option value="highttolow">High to low</option>
            </select>
          </div>
          {installedApp.length === 0 && !pending && <InstalledAppNotFound />}
          {pending ? <Spinner /> : <div className="space-y-5">{installedApp.map(app => (<InstalledCard key={app.id} app={app} handleUnistall={handleUnistall} />))}</div>}
        </Container>
      </div>
    </>
  )
}

export default Installation