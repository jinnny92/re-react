import React, { Component } from "react";
import { createBrowserHistory } from "react-router-dom";
//const history = createBrowserHistory();
// useNavigate 사용하는법
import { useNavigate } from "react-router-dom";

// class HistorySample extends Component {
//   //뒤로가기
//   handleGoBack = () => {
//     this.props.history.hoBack();
//   };

//   // 홈으로 이동
//   handleGoHome = () => {
//     this.props.history.push("/");
//   };

//   componentDidMount() {
//     // 이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
//     this.unblock = this.props.history.block("정말 떠나실 건가요?");
//   }

//   componentWillUnmount() {
//     // 컴포넌트가 언마운트되면 질문을 멈춤
//     if (this.unblock) {
//       this.unblock();
//     }
//   }
function HistorySample() {
  const navigate = useNavigate();

  // 뒤로가기
  // 인덱스로 처리, 두번 뒤로 가고싶으면 -2
  const handleGoBack = () => {
    navigate(-1);
  };

  // 홈으로 가기
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button name="back" onClick={handleGoBack}>
        뒤로
      </button>
      <button name="go" onClick={handleGoHome}>
        홈으로
      </button>
    </div>
  );
}

export default HistorySample;
