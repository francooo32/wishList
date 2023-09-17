import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@mui/material/Icon';
import logoMercadoLibre from "../../public/buysection/logomercadolibre.png"

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Search'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;