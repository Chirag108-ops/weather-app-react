import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { url, options } from './Api';

function Search({ onSearchChange, errorMsg }) {
  const [search, setSearch] = useState(null);
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${url}?minPopulation=100000&namePrefix=${inputValue}`, options);
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            city: `${city.city}`,
            label: `${city.name}, ${city.countryCode}`
          }
        })
      }
    } catch (error) {
      console.error(error);
    }
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '25px',
      border: '2px solid #ccc',
      boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#3699FF' : null,
      color: state.isFocused ? 'white' : null,
    }),
  }
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      className={`h-16  w-full max-w-[450px] rounded-full mb-2`}
      styles={customStyles}
      placeholder='Search for City'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
