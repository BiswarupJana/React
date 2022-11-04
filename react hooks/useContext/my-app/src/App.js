import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {
  const [ok, dispatch] = useReducer(reducer, initialState);
  console.log(ok);
  return (
    <>
      Count: {ok.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      
    </>
  );
}



export default App;
