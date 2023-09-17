import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';
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