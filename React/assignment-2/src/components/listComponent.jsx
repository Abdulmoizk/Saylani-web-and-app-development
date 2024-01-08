const listComponent = () => {
  const list = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ];
  return (
    <ul>
      {list.map((value, index) => (
        <li key={index}>{value.name}</li>
      ))}
    </ul>
  );
};

export default listComponent