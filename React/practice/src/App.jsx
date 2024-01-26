import "./App.css";
import Functions from "./components/custom/Practice";
import TodoApp from "./components/custom/TodoApp";
import Counter from "./components/custom/Counter";

function App() {
  const getData = (a) => {
   console.log(a)
  };
  return (
    <>
      <Functions getData={getData} />
      <Counter />
      <br />
      <br />
      <TodoApp />
    </>
  );
}

export default App;
