import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//액션 타입 정의
const CHANGE_INPUT = 'todos/INPUT'; //인풋 값을 변경함
const INSERT = 'todos/INSERT'; //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; //todo를 체크/체크해제함
const REMOVE = 'todos/REMOVE'; //todo를 제거함

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

//액션 생성 함수 만들기
//이번에는 액션 생성 함수에서 파라미터가 필요
//전달받은 파라미터는 액션 객체 안에 추가 필드로
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

let id = 3; //insert가 호출될 때마다 1씩 더해진다
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

//초기 상태 및 리듀서 함수 만들기
//객체에 한 개 이상의 값이 들어가므로 불변성을 유지해 주어야 한다

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
