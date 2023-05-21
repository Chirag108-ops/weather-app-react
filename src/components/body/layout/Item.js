import Icon from './Icon';
import Temp from '../information/Temp';
import { BsEye, BsWater, BsThermometer, BsWind } from 'react-icons/bs';
import Info from '../information/Info';
import Parameter from '../information/Parameter';
import { TbTemperatureCelsius } from 'react-icons/tb';

function Item(props) {
  let data = props.data;
  const temp = parseInt(data.main.feels_like);

  return (
    <div>
      <div className="flex items-center gap-x-5">
        <Icon data={data} />
        <Info data={data} />
      </div>
      <div className="my-20">
        <Temp data={data} />
        <div className="capitalize text-center">{data.weather[0].description}</div>
      </div>
      <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
        <Parameter
          data={data}
          param1="Visibility"
          val1={`${data.visibility / 1000} km`}
          icon1={<BsEye />}
          param2="Feels like"
          val2={<>{temp} <TbTemperatureCelsius /></>}
          icon2={<BsThermometer />}
        />
        <Parameter
          data={data}
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
