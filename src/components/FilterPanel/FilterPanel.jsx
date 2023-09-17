import React from 'react';
import { categoryList, ratingList } from '../../constants/constants';
import CheckboxProton from '../common/CheckboxProton/CheckboxProton';
import FilterListToggle from '../common/FilterListToggle/FilterListToggle';
import SliderProton from '../common/SliderProton/SliderProton';
import "./FilterPanel.css";

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedLocation,
  selectLocation,
  selectedRating,
  selectedPrice,
  selectRating,
  vehicles,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className='input-group'>
      {vehicles.map((vehicle) => (
        <CheckboxProton
          key={vehicle.id}
          vehicle={vehicle}
          changeChecked={changeChecked}
        />
      ))}
    </div>
  </div>
);

export default FilterPanel;