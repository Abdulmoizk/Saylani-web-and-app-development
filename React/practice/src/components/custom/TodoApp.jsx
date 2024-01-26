import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { value: "Abdul Moiz", disabled: true },
    { value: "Mohammad Hanif", disabled: true },
  ]);
  const [value, setValue] = useState("");
  const addTodo = () => {
    setTodos([...todos, { value, disabled: true }]);
    console.log(setTodos);
    setValue("");
  };
  const deleteTodo = (i) => {
    const oldTodos = [...todos];
    oldTodos.splice(i, 1);
    setTodos(oldTodos);
  };
  const editTodo = (i, v) => {
    const oldTodos = [...todos];
    oldTodos.splice(i, 1, { ...v, disabled: false });
    setTodos(oldTodos);
  };
  const updateTodo = (i) => {
    const oldTodos = [...todos];
    oldTodos[i].disabled = true;
    setTodos(oldTodos);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((v, i) => (
          <li key={i}>
            <input
              disabled={v.disabled}
              onChange={(e) => editTodo(i, { ...v, value: e.target.value })}
              type="text"
              value={v.value}
            />
            {v.disabled ? (
              <button onClick={() => editTodo(i, v)}>Edit</button>
            ) : (
              <button onClick={() => updateTodo(i)}>Update</button>
            )}
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
