import { Button } from '@material-ui/core';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 5,
  //     };
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   };

  //   fetchProducts();
  // }, []);

  // const handleOnShowNotification = () => {
  //   enqueueSnackbar('User registered succesfull!', { variant: 'success' });
  // };
  return (
    <div className='App'>
      <Header />
      {/* Không sử dụng Switch */}
      {/* <Route path={"/"} component={TodoFeature} />
      <Route path={"/todos"} component={TodoFeature} />
      <Route path={"/albums"} component={AlbumFeature} /> */}

      <Switch>
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/posts/:postId' exact />

        <Route path={'/'} component={CounterFeature} exact />
        <Route path={'/todos'} component={TodoFeature} />
        <Route path={'/albums'} component={AlbumFeature} />
        <Route path={'/products'} component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
