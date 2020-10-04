import React from 'react';
import { Todo } from '../../assets/mockdata/todolist';
import RowItem from '../../shared/rowItem';
import './style.scss';

const TodoList = ({ todos }: { todos: Todo[] }) => {
  // Normally we would use date's and filter on dates to check if they happen in the next 7 days or if they happen in the next 30 days

  const todoList = todos.map((todo: Todo) => (
    <RowItem key={todo.id} icon={todo.icon} iconColor={todo.iconColor} date={todo.date} urgent={todo.urgent}>
      {todo.name}
    </RowItem>
  ));

  const thisWeek = [todoList[0], todoList[1]];
  const thisMonth = [todoList[2], todoList[3]];

  return (
    <div className="todolist">
      <div className="__listname">This week</div>
      <div className="__todos">{thisWeek}</div>
      <div className="__listname">This Month</div>
      <div className="__todos">{thisMonth}</div>
    </div>
  );
};

export default TodoList;
