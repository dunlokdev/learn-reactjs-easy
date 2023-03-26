import { Button } from '@material-ui/core';
import Header from 'components/Header';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 5,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  const handleOnShowNotification = () => {
    enqueueSnackbar('User registered succesfull!', { variant: 'success' });
  };
  return (
    <div className='App'>
      <Header />
      <NavLink to={'/todos'} activeClassName='active-todo'>
        Todos
      </NavLink>
      <br />
      <NavLink to={'/albums'}>Albums</NavLink>

      {/* Không sử dụng Switch */}
      {/* <Route path={"/"} component={TodoFeature} />
      <Route path={"/todos"} component={TodoFeature} />
      <Route path={"/albums"} component={AlbumFeature} /> */}
      <Button onClick={handleOnShowNotification}>Show Notification</Button>

      <Switch>
        <Route path={'/'} component={CounterFeature} exact />
        <Route path={'/todos'} component={TodoFeature} />
        <Route path={'/albums'} component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
