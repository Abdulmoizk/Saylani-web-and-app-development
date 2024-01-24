import React from 'react';

function ChildComponent({ sendDataToParent }) {
  const sendAndHandleData = () => {
    const dataToSend = 'Data from Child';
    // Call the callback function passed from the parent
    sendDataToParent(dataToSend);
  };

  return (
    <div>
      <button onClick={sendAndHandleData}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
