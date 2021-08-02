import { useState } from "react";

const DisplayCounter = ({ counter }) => {
  return <>{counter}</>;
};

const HandleCounter = ({ handleButton, text }) => {
  return (
    <>
      <button onClick={() => handleButton()}>{text}</button>
    </>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleButton = (val) => {
    setCounter((prev) => prev + val);
  };

  return (
    <div>
      {/* Same Component */}
      {/* <button onClick={() => handleButton(1)}>Increase Value</button> */}
      {/* <div>{counter}</div> */}
      {/* <button onClick={() => handleButton(-1)}>Decrease Value</button> */}

      <HandleCounter
        handleButton={() => handleButton(1)}
        text="Increase Value"
      />
      <div>
        <DisplayCounter counter={counter} />
      </div>
      <HandleCounter
        handleButton={() => handleButton(-1)}
        text="Decrease Value"
      />
    </div>
  );
};

export default Counter;
