import "./App.css";
import ApiCall from "./component/ApiCall";
import Counter from "./component/Counter";
import Timer from "./component/Timer";

function App() {
  return (
    <div className="App">
      <Timer />
      <Counter />
      <ApiCall />
    </div>
  );
}

export default App;
