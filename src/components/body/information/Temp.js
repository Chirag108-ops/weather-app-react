import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { useSelector } from 'react-redux';
function Temp() {
  const {data} = useSelector((state) => (state.info))
  if(Object.keys(data).length === 0) {
    return (
      <div>No data Available</div>
    )
  }
  
  return (
    <div className="flex justify-center items-center">
      <div className="text-[144px] leading-none font-light">
        {/* Display temperature */}
        {parseInt(data.main.temp)}
      </div>
      <div className="text-4xl">
        {/* Display temperature unit icon */}
        <TbTemperatureCelsius/>
      </div>
    </div>
  );
}

export default Temp;
