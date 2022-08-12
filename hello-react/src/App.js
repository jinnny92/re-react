import { Fragment } from "react";

function App() {
  const name = "리액트";
  return (
    <>
      {name === "리액트" ? <h1>리액트입니다</h1> : <h1>리액트가 아닙니다</h1>}
    </>
  );
}

export default App;
