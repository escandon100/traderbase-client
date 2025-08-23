import { useEffect, useState } from 'react';
import './earningsPopup.scss';


const EarningsPopup = () => {

     const [show, setShow] = useState(false);
     const [message, setMessage] = useState('');


    const getRandomAmount = () => {
        const min = 1000;
        const max = 50000;
        return `$${(Math.floor(Math.random() * (max - min + 1)) + min).toLocaleString()}`;
    };


  const fetchUser = async () => {
    try {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      const user = data.results[0];
      const name = user.name.first;
      const country = user.location.country.toUpperCase();
      const amount = getRandomAmount();

      setMessage(`${name} from ${country} has just Earned ${amount}`);
      setShow(true);

      setTimeout(() => setShow(false), 8000);
    } catch (err) {
      console.error('Failed to fetch random user:', err);
    }
  };

    useEffect(() => {
        fetchUser(); 
        const interval = setInterval(fetchUser, 20000);
        return () => clearInterval(interval);
  }, []);

    if (!show) return null;

    return (
        <div className='earningsPopup'>
             {message}
        </div>
    )


}


export default EarningsPopup