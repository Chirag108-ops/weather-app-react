import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';

function Temp(props) {
  let data = props.data;
  
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
