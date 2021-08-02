const { useState, useRef, useEffect } = require("react");

const Timer = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    console.log({ counter });
    if (counter >= 5) {
      clearInterval(intervalRef.current);
    }
  }, [counter]);

  // const handleIncrease = () => {
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = setInterval(() => {
  //     setCounter((prev) => prev + 1);
  //   }, 1000);
  // };

  // const handleDecrease = () => {
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = setInterval(() => {
  //     setCounter((prev) => prev - 1);
  //   }, 1000);
  // };

  // const handleStop = () => {
  //   clearInterval(intervalRef.current);
  // };

  // handle three button in one function
  const handleButton = (val) => {
    clearInterval(intervalRef.current);
    if (val) {
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + val);
      }, 1000);
    }
  };

  return (
    <>
      <div>{counter}</div>
      <div>
        {/* <button onClick={() => handleDecrease()}>Decrease</button>
        <button onClick={() => handleStop()}>Stop</button>
        <button onClick={() => handleIncrease()}>Increase</button> */}
        <button onClick={() => handleButton(-1)}>Decrease</button>
        <button onClick={() => handleButton()}>Stop</button>
        <button onClick={() => handleButton(1)}>Increase</button>
      </div>
    </>
  );
};

export default Timer;
