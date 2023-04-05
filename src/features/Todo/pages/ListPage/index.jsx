import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useMemo } from 'react';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    // update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    const queryParams = { status: 'all' };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
    // setFilteredStatus("all");
  };

  // [x] Handle show completed click
  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
    // setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    const queryParams = { status: 'new' };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
    // setFilteredStatus("new");
  };

  // ! Dùng useMemo để giới hạn reload
  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (value) => {
    const newTodo = {
      id: Math.floor(Math.random() * 999) + '-random',
      title: value.title,
      status: 'new',
    };

    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h3>What to do ?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
