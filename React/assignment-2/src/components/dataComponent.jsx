const dataComponent = () => {
  const data = ["We", "are", "United"];
  return (
    //     {for(let i = 0; i< data.length; i++ ){
    //        console.log(i)
    //     }
    // }
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default dataComponent