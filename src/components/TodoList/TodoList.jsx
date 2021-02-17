import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  handleTodoClick: PropTypes.func,
};
function TodoList(props) {
  const { todos, handleTodoClick } = props;
  function ClickTodo(todo) {
    handleTodoClick(todo);
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => ClickTodo(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
