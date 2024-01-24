import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/bootstrap/navbar";
import Alert from "./components/alert";
import Floater from "./components/antdesign/button";
import CardColumn from "./components/antdesign/cardColumn";
import Input from "./components/input";
import ChildComponent from "./components/gptcomponent";
import SquareBtn from "./components/square";
import Board from "./components/board";
import { Col, Row } from "antd";

function App() {
  const arr = [
    { title: "card 1", content: "this is card 1", age: 23 },
    { title: "card 2", content: "this is card 2", age: 24 },
    { title: "card 3", content: "this is card 3", age: 24 },
  ];
  return (
    <>
      <Navbar title="React Practice" />
      {/* <Alert message="Hello World" /> */}
      <Floater />
      <Row gutter={10}>
      {arr.map((v, i) => {
        console.log(v.title); // Correct usage of console.log
        return (
          <Col span={8}>
          <CardColumn key={i} title={v.title} content={v.content} age={v.age} />
          </Col>
        );
      })}
      </Row>
     
      <Board />
      <Input onChange />
    </>
  );
}

export default App;
