import AppTable from "../components/antdesign/Table";

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    
  ];
const Userpage=()=>{
    const pagination =()=>{
         
    }
return(
    <>
    <h1>USERPAGE</h1>
    <AppTable data={data}/>
    </>
)
}
export default Userpage;