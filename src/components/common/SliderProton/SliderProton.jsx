import React from 'react';
import Slider from '@mui/material/Slider';

const SliderProton = ({ value, changePrice }) => {

  return (
    <div >
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay='on'
        min={10000}
        max={100000000}
      />
    </div>
  );
};

export default SliderProton;