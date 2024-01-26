import { useState } from "react";



function Counter(){
    const [count, setCount] = useState(0);
    return(
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
          Substract
        </button>
        </>
    )
}
export default Counter