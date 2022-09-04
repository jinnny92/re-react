import { createAction, handleActions } from 'redux-actions';
//액션 타입 정의하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//createAction을 사용하면 매번 객체를 직접 만들어 줄 필요 없이 간단하게 액션 생성 함수 선언하기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//액션 생성 함수 만들기
//export const increase = () => ({ type: INCREASE });
//export const decrease = () => ({ type: DECREASE });

//초기 상태 및 리듀서 함수 만들기
//초기 상태에는 number 값을 설정해 주었음
const initialState = {
  number: 0,
};

//현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드 작성했음
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

//handleActions 함수를 사용해 리듀서 함수를 간단하게 만들기

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
