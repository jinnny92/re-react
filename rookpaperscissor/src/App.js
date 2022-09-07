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

  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    //유저가 선택할때(버튼을 누를때), 컴퓨터가 랜덤한 값을 보여준다
    let computerChoice = randomChoice(); //컴퓨터가 랜덤하게 값을 선택한다는 함수를 만들어서 결과값을 Computerchoice라는 변수에 넣어준다
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 있는 key값만 뽑아서 배열로 만들어주는 함수
    console.log("Item array", itemArray);
    //컴퓨터에서 랜덤으로 값을 줄 수 있는 함수 :  Math.random()
    let randomItem = Math.floor(Math.random() * itemArray.length);
    //console.log(randomItem); //random이라는 함수는 0~1사이의 값을 랜덤하게 반환하는데 우리가 가져올 수 있는건 숫자인데 위의 choice랑 어떻게 연관을 지을 수 있는지
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box name="You" item={userSelect} />
        <Box name="Computer" item={computerSelect} />
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
