import "./App.css";
import Functions from "./components/custom/Practice";
import TodoApp from "./components/custom/TodoApp";
import Counter from "./components/custom/Counter";
import BasicExample from "./components/bootstrap/Form";
import AppRouter from "./config/router/router";


function App() {
  const getData = (a) => {
   console.log(a)
  };
  return (
    <>
      {/* <Functions getData={getData} />
      <Counter />
      <br />
      <br />
      <TodoApp />
      <BasicExample/> */}
<AppRouter/>


    </>
  );
}

export default App;
