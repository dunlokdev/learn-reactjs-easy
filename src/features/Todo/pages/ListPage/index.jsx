import React from "react";
import PropTypes from "prop-types";

ListPage.propTypes = {
  todoList: PropTypes.array,
};

ListPage.defaultProps = {
  todoList: [],
};

function ListPage({ todoList }) {
  return (
    <ul>
      <h3>This is list page</h3>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default ListPage;
