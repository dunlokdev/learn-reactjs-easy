import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Product Feature</h1>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
