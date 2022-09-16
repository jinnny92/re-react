import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+1 증가</button>
    </div>
  );
}

export default App;
