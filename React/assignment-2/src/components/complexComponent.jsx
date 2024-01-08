const complexComponent = () => {
  const complex = [
    {
      company: "XYZ",
      jobs: ["Javascript", "React"],
    },
    {
      company: "ABC",
      jobs: ["AngularJs", "Ionic"],
    },
  ];
  return (
    <div>
      {complex.map((item, index) => (
        <div key={index}>
          <h3>{item.company}</h3>
          <ul>
            {item.jobs.map((job, jobIndex) => (
              <li key={jobIndex}>{job}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default complexComponent