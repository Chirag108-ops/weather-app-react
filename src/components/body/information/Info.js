import React from 'react';

function Info(props) {
  let data = props.data;
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
