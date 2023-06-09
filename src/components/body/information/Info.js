import React from 'react';
import { useSelector } from 'react-redux';
function Info() {
  const {data} = useSelector((state) => (state.info))
  if(Object.keys(data).length === 0) {
    return (
      <div>No data Available</div>
    )
  }
  const date = new Date();

  return (
    <div>
      {/* Display the city name and country */}
      <div className="text-2xl font-semibold">{data.name}, {data.sys.country}</div>
      
      {/* Display the current date */}
      <div>{date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}</div>
    </div>
  );
}

export default Info;
