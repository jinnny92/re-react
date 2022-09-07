import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

//1. 박스 2개(타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3~4번의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 지면 빨강, 이기면 초록, 비기면 검정으로 테두리 색이 바뀐다

const choice = {
  rook: {
    name: "Rook",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };
  return (
    <div>
      <div className="main">
        <Box name="You" item={userSelect} />
        {/* <Box name="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rook")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
