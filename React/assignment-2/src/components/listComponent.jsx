const listComponent = () => {
  const list = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ];
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default listComponent