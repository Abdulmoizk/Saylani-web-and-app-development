import { useState } from "react";
import AppTable from "../components/antdesign/Table";
import { Button } from "antd";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const Userpage = () => {
  const [page, setPage] = useState(0);
  const paginatedArr = () => {
    let arr = [];
    let chunk = 3;
    for (var i = 0; i < data.length; i += chunk) {
      arr.push(data.slice(i, i + chunk));
    }
    return arr;
  };

  return (
    <>
      <h1>USERPAGE</h1>
      <AppTable data={paginatedArr()[page]} />
      <div>
        {paginatedArr().map((v, i) => (
          <Button onClick={() => setPage(i)} key={i}>
            {i + 1}
          </Button>
        ))}
      </div>
    </>
  );
};
export default Userpage;
