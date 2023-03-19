import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TodoList from "./components/TodoList";
import ListPage from "./pages/ListPage";
import PageDetail from "./pages/PageDetail";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <h2>Todo feature</h2>

      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:postId`} component={PageDetail} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
