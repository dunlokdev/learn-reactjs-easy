import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <div>
        <Link to={"/todos"}>Todos</Link>
      </div>
      <div>
        <Link to={"/albums"}>Albums</Link>
      </div>
      <div>
        <NavLink to={"/todos"} activeClassName="active-todo">Todos</NavLink>
      </div>
      <div>
        <NavLink to={"/albums"}>Albums</NavLink>
      </div>
      <Route path={"/todos"} component={TodoFeature} />
      <Route path={"/albums"} component={AlbumFeature} />
      <h1>Footer</h1>
    </div>
  );
}

export default App;
