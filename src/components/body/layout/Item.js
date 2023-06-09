import Icon from './Icon';
import Temp from '../information/Temp';
import { BsEye, BsWater, BsThermometer, BsWind } from 'react-icons/bs';
import Info from '../information/Info';
import Parameter from '../information/Parameter';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { useSelector } from 'react-redux';

function Item() {
  const {data} = useSelector((state) => (state.info))
  if(Object.keys(data).length === 0) {
    return (
      <div>No data Available</div>
    )
  }
  const temp = data.main.feels_like
  return (
    <div>
      <div className="flex items-center gap-x-5">
        <Icon/>
        <Info/>
      </div>
      <div className="my-20">
        <Temp/>
        <div className="capitalize text-center">{data.weather[0].description}</div>
      </div>
      <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
        <Parameter
          param1="Visibility"
          val1={`${data.visibility / 1000} km`}
          icon1={<BsEye />}
          param2="Feels like"
          val2={<>{temp} <TbTemperatureCelsius /></>}
          icon2={<BsThermometer />}
        />
        <Parameter
          param1="Humidity"
          val1={`${data.main.humidity} %`}
          icon1={<BsWater />}
          param2="Wind"
          val2={`${data.wind.speed} m/s`}
          icon2={<BsWind />}
        />
      </div>
    </div>
  );
}

export default Item;
