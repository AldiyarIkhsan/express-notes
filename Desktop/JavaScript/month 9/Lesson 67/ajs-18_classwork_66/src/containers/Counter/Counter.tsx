import {
  addValue,
  decrement,
  increment,
  selectCounterValue,
} from '../../features/counter/counter.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './Counter.css';
const Counter = () => {
  const value = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const addHandler = (value: number) => {
    dispatch(addValue(value));
  };

  return (
    <div className="Counter">
      <h1>{value}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button
        onClick={() => {
          addHandler(5);
        }}
      >
        add 5
      </button>
      <button
        onClick={() => {
          addHandler(-5);
        }}
      >
        reduce 5
      </button>
    </div>
  );
};

export default Counter;
