import axios from 'axios';
import { useEffect, useState } from 'react'

const useAppData = () => {
    const [apps, setApps] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        setError('');
        setPending(true);
        axios('/data.json').then(res => setApps(res.data)).catch(err => setError(err.message)).finally(() => setTimeout(()=>setPending(false),500))
    }, []);
    return { apps, pending, error };
}

export default useAppData;