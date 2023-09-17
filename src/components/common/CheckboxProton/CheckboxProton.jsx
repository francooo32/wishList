import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckboxProton = ({ changeChecked, vehicle }) => {
  
  const { checked, label, id } = vehicle;
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckboxProton;