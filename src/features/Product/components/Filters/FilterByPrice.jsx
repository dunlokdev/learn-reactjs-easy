import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: 'flex',
    flexFlow: 'row nowrap',

    margin: '16px 0',

    '& > span': {
      margin: '0 16px',
    },
  },

  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyles();
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

  const handleDefaultRange = () => {
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant='subtitle2'>CHỌN KHOẢNG GIÁ</Typography>

      <Box className={classes.range}>
        <TextField name='salePrice_gte' value={values.salePrice_gte} onChange={handleOnChange} />
        <span>-</span>
        <TextField name='salePrice_lte' value={values.salePrice_lte} onChange={handleOnChange} />
      </Box>

      <Box className={classes.btn}>
        <Button variant='outlined' color='primary' onClick={handleSubmit} size='small'>
          Áp dụng
        </Button>

        <Button variant='outlined' color='primary' onClick={handleDefaultRange} size='small'>
          Mặc định
        </Button>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
