import logo from "./logo.svg";
import Colorbox from "./components/ColorBox/Colorbox";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
const dataTodoList = [
  { id: 1, title: "I love Clara Nguyen" },
  { id: 2, title: "You love Clara Nguyen" },
  { id: 3, title: "We love Clara Nguyen" },
];
function App() {
  const [todoList, setTodoList] = useState(dataTodoList);
  function TodoClick(todo) {
    console.log("App ne", todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log("Form submit ne: ", formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <div>Welcome to study React Hook</div>
      <div>Roark Nguyen</div>
      <Colorbox />
      <TodoList todos={todoList} handleTodoClick={TodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
