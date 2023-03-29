import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

ListPage.propTypes = {};
const useStyles = makeStyles((themes) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    total: 1,
    limit: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ _page: 1, _limit: 10 });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        setProductList(data);
        console.log(pagination);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to get product list: ', error);
      }

      setLoading(false);
    })();
  }, [filter]);

  const handlePageChange = (event, page) => {
    setFilter((prev) => ({ ...prev, _page: page }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <Typography component='h3' variant='h5'>
                Danh sách sản phẩm
              </Typography>
              {loading ? <ProductSkeletonList length={10} /> : <ProductList data={productList} />}

              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color='primary'
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
