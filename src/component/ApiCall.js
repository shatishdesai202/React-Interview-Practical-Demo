import { useEffect, useState } from "react";

const ApiCall = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      setTodos(await result.json());
    };

    fetchData();
  }, []);

  console.log(todos);
  return (
    <>
      {todos && todos.map((item, index) => <div key={index}>{item.title}</div>)}
    </>
  );
};

export default ApiCall;
