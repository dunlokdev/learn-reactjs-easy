import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  const handleOnChange = (event) => {
    // Cách 1:
    // event.persist();
    // Cách 2:
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography variant='subtitle2'>GIÁ</Typography>

      <Box>
        <TextField name='salePrice_gte' value={values.salePrice_gte} onChange={handleOnChange} />
        <span>-</span>
        <TextField name='salePrice_lte' value={values.salePrice_lte} onChange={handleOnChange} />
      </Box>

      <Button variant='outlined' color='primary' onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
