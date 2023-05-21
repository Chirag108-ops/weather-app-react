import { ImSpinner8 } from 'react-icons/im';

function Loader() {
  // Render a loading spinner
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <ImSpinner8 className='text-white text-5xl animate-spin' />
    </div>
  );
}

export default Loader;
