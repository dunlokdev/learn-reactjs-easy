import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
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
  return (
    <div className='App'>
      <h1>Header</h1>
      <NavLink to={'/todos'} activeClassName='active-todo'>
        Todos
      </NavLink>
      <br />
      <NavLink to={'/albums'}>Albums</NavLink>

      {/* Không sử dụng Switch */}
      {/* <Route path={"/"} component={TodoFeature} />
      <Route path={"/todos"} component={TodoFeature} />
      <Route path={"/albums"} component={AlbumFeature} /> */}

      <Switch>
        <Route path={'/'} component={TodoFeature} exact />
        <Route path={'/todos'} component={TodoFeature} />
        <Route path={'/albums'} component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>

      <h1>Footer</h1>
    </div>
  );
}

export default App;
