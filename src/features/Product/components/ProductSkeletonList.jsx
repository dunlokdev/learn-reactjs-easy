import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList({ length }) {
  console.log(length);
  return (
    <div>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Box padding={1}>
                <Skeleton variant='rect' width='100%' height={183} />
              </Box>
              <Skeleton />
              <Skeleton width='60%' />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductSkeletonList;
