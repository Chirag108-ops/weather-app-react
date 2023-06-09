import React from 'react';

function Parameter(props) {
  return (
    <div className="flex justify-between">
      {/* Parameter 1 */}
      <div className="flex items-center gap-x-2">
        <div className="text-[20px]">
          {props.icon1}
        </div>
        <div>
          {/* Display parameter 1 and its value */}
          {props.param1} <span className="ml-2">{props.val1}</span>
        </div>
      </div>
      
      {/* Parameter 2 */}
      <div className="flex items-center gap-x-2">
        <div className="text-[20px]">
          {props.icon2}
        </div>
        <div className="flex">
          {/* Display parameter 2 and its value */}
          {props.param2} <div className="flex ml-2">{props.val2}</div>
        </div>
      </div>
    </div>
  );
}

export default Parameter;
