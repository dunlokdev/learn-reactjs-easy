import { Box, makeStyles, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHODLER } from 'constrants/index';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

ProductItem.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((themes) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '15px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    cursor: 'pointer',
  },
  image: {
    objectFit: 'contain',
  },
}));

function ProductItem({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHODLER}`;

  const classes = useStyles();

  return (
    <Box padding={1} className={classes.root}>
      <Box padding={1} minHeight={184}>
        <img
          className={classes.image}
          src={thumbnailUrl}
          alt={product.name}
          width='100%'
          height={184}
        />
      </Box>
      <Typography variant='body2' className={styles.textClamp}>
        {product.name}
      </Typography>
      <Typography variant='body2'>
        <Box component='span' fontSize='16px' fontWeight='bold' mr={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            product.salePrice
          )}
        </Box>
        {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default ProductItem;
