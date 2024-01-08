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
      {complex.map((value, index) => (
        <div key={index}>
          <h3>{value.company}</h3>
          <ul>
            {value.jobs.map((job, jobIndex) => (
              <li key={jobIndex}>{job}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default complexComponent