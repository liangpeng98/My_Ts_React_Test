import React, { useState, useEffect, useRef, useContext, useReducer } from "react";
import { Button } from "antd";

/**
 * @name usePrevious 通过useRef获取上一轮的值
 * @param value
 * @returns current 上一次的值
 */
const usePrevious = (value: number) => {
  const ref: React.MutableRefObject<number> = useRef(0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>之前：{prevCount}</h1>
      <h1>现在: {count}</h1>
      <Button onClick={() => setCount((val) => val + 1)}>count+1按钮</Button>
    </div>
  );
};

/**
 * @name
 * @params
 * @return
 */
const Example = (): JSX.Element => {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={handleAlertClick}>Show alert</Button>
    </div>
  );
};

/**
 * 使用 useReducer
 */
const ThemeContext = React.createContext<any>(null);
const setCountFn = (state: any, action: any) => {
  switch (action.type) {
    case "before":
      return state;
    case "now":
      return { count: state.count + 1 };
    default:
      return state;
  }
  return { count: 1 };
};
interface IStateCount {
  count: number;
}
const App = (): JSX.Element => {
  const [count, setCount] = useState<IStateCount>({ count: 100 });
  const [state, dispatch] = useReducer(setCountFn, count);
  return (
    <ThemeContext.Provider value={dispatch}>
      <Toolbar state={state} />
    </ThemeContext.Provider>
  );
};

const Toolbar = (props: any): JSX.Element => {
  return (
    <div>
      <ThemedButton state={props.state} />
    </div>
  );
};

const ThemedButton = (props: any): JSX.Element => {
  const dispatch = useContext(ThemeContext);
  return (
    <>
      <Button onClick={() => dispatch({ type: "before" })}>before: {props.state.count}</Button>
      <Button onClick={() => dispatch({ type: "now" })}>now: {props.state.count}</Button>
    </>
  );
};

export default function Play(): JSX.Element {
  return (
    <div>
      <div>我在打游戏</div>
      <Counter />
      <br />
      <Example />
      <br />
      <App></App>
    </div>
  );
}
