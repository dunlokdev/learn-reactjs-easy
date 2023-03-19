import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <NavLink to={"/todos"} activeClassName="active-todo">Todos</NavLink>
      <br />
      <NavLink to={"/albums"}>Albums</NavLink>

      {/* Không sử dụng Switch */}
      {/* <Route path={"/"} component={TodoFeature} />
      <Route path={"/todos"} component={TodoFeature} />
      <Route path={"/albums"} component={AlbumFeature} /> */}

      <Switch>
        <Route path={"/"} component={TodoFeature} />
        <Route path={"/todos"} component={TodoFeature} />
        <Route path={"/albums"} component={AlbumFeature} />
      </Switch>

      <h1>Footer</h1>
    </div>
  );
}

export default App;
