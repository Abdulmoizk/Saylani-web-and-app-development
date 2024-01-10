import logo from "./logo.svg";
import "./App.css";
// import "./components/name";
import nameComponent from "./components/name";
import objectComponent from "./components/objectComponent";
import dataComponent from "./components/dataComponent";
import listComponent from "./components/listComponent";
import complexComponent from "./components/complexComponent";
import postsComponent from "./components/posts";
import BasicTextFields from "./MUI components/textfield.jsx";
function App() {
  return (
    (<h1>Question 1</h1>),
    (
      <p>
        <h1>Question 1</h1>
        {nameComponent()}
        {objectComponent()}
        {dataComponent()}
        {listComponent()}
        {complexComponent()}
        <br />
        <h1>Question 2</h1>
        <ul>
          <h2>{"=> "}import Something from 'package'</h2>{" "}
        </ul>
        <li>
          This syntax is used when the package exports a default export. The
          package may have one main entity that is designated as the default
          export, and when you use this syntax, you are importing that default
          export.
        </li>
        <br />
        <ul>
          <h2>{"=> "}import {"{"}Something{"}"} from 'package'</h2>{" "}
        </ul>
        <li>
          This syntax is used when the package exports multiple named exports.
          You are specifying which entities you want to import from the package.
        </li>
        <br />
        <br />
        <h1>Question 3</h1>
        {postsComponent()}
      </p>
    )
  );
}

// function App(){
//   return(
    
//   )
// }

export default App;
