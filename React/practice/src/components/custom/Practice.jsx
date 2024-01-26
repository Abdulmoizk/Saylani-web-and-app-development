const Functions = ({ getData }) => {
  return(
  <button onClick={()=> getData("Hi iam moiz")}>Send Data</button>
  )
};
export default Functions;
