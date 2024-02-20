import { useReducer } from "react";
function Reducer(state, action) {
  switch (action.type) {
    case "increament": {
      return { age: state.age + 1 };
    }
    case "decreament": {
      return { age: state.age + 1 };
    }
  }
}
function myReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 0 });
}
function handleIncreament() {
  dispatch({ type: increament });
}
function handleDecreament() {
  dispatch({ type: decreament });
}
<>
  <button onClick={handleIncreament}>+</button>
  <button onClick={handleDecreament}>-</button>
</>;
