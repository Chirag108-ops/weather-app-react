import React, { useState, useEffect} from 'react';
import Search from './components/header/Search';
// import Form from './components/header/Form';
import Card from './components/body/layout/Card';
// import axios
import axios from 'axios';
// import icons
import { ImSpinner8 } from 'react-icons/im';
const API_KEY = 'aab3cc45e41cd16c4547d1b24065d080';

const WeatherApp = (props) => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Delhi');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleOnSearchChange = (searchData) => {
    setLocation(searchData.city)
  }
  // Fetch data from the API
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    
    axios.get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);

  // Clear error message after a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 1000);
    
    // Clear the timer when the component unmounts or when `errorMsg` changes
    return () => clearTimeout(timer);
  }, [errorMsg]);

  if (!data) {
    return (
      <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
        <div>
          <ImSpinner8 className='text-5xl animate-spin text-white' />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
      <Search onSearchChange={handleOnSearchChange} errorMsg={errorMsg}/>
      <Card loading={loading} data={data} errorMsg={errorMsg}></Card>
    </div>
  );
};

export default WeatherApp;
