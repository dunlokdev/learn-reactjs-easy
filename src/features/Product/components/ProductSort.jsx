import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  // salePrice:165000
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor='primary'
      textColor='primary'
      onChange={handleSortChange}
      aria-label='disabled tabs example'
    >
      <Tab value='salePrice:ASC' label='Giá thấp tới cao'></Tab>
      <Tab value='salePrice:DESC' label='Giá cao xuống thấp'></Tab>
    </Tabs>
  );
}

export default ProductSort;
