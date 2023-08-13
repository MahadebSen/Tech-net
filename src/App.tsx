import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex flex-row gap-4 items-center">
        <button
          className="rounded-full border-2 border-sky-500 p-3 m-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="rounded-full border-2 border-sky-500 p-3 m-3"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount
        </button>
        <div className="rounded-lg p-4 border-2 border-black">{count}</div>
        <button
          className="rounded-full border-2 border-red-500 p-3 m-3"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
