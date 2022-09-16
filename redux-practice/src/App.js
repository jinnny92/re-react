import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ type: "login", payload: { id: "yoojin", password: "1111" } });
  };
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  return (
    <div>
      <h1>{id}</h1>
      <h1>{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>+1 증가</button>
      <button onClick={login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
