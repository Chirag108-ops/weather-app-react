import React, { useEffect} from 'react';
import Search from './components/header/Search';
// import Form from './components/header/Form';
import Card from './components/body/layout/Card';
// import axios
import axios from 'axios';
// import icons
import { ImSpinner8 } from 'react-icons/im';
import { addData, addError, addLoading } from './Redux/Slices/AppSlice';
import { useDispatch, useSelector } from 'react-redux';
const API_KEY = 'aab3cc45e41cd16c4547d1b24065d080';

const WeatherApp = () => {
  const {location,data,errorMsg} = useSelector((state) => state.info)
  const dispatch = useDispatch()
  // // Fetch data from the API
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    dispatch(addLoading(true))
    axios.get(url)
      .then((res) => {
        dispatch(addData(res.data))
        dispatch(addLoading(false))
      })
      .catch(err => {
        dispatch(addLoading(false))
        dispatch(addError(err))
      });
  }, [location]);

  // Clear error message after a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(addError(''))
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
      <Search/>
      <Card></Card>
    </div>
  );
};

export default WeatherApp;
