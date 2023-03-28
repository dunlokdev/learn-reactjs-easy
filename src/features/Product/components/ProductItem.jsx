import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHODLER } from 'constrants/index';
import PropTypes from 'prop-types';
import React from 'react';

ProductItem.propTypes = {
  product: PropTypes.object,
};

function ProductItem({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHODLER}`;

  return (
    <Box padding={1}>
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width='100%' height={183} />
      </Box>
      <Typography variant='body2'>{product.name}</Typography>
      <Typography variant='body2'>
        {product.salePrice} - {product.promotionPercent}%
      </Typography>
    </Box>
  );
}

export default ProductItem;
