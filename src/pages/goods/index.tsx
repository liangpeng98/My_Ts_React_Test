import React, { useState, useReducer, useRef, useCallback } from 'react';

import { Button, Input } from 'antd';

const initialState = { count: 0 };

interface IStateReducer {
  count: number;
}

const reducer = (state: IStateReducer, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

// count + -
const Counter = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <Button onClick={() => dispatch({ type: 'decrement' })}>count-</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>count+</Button>
    </div>
  );
};

// 获取焦点
const TextInputWithFocusButton = (): JSX.Element => {
  const inputEl = useRef<any>();
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <div>
      <Input ref={inputEl} type="text" />
      <Button onClick={onButtonClick}>Focus the input</Button>
    </div>
  );
};

const useClientRect = () => {
  const [rect, setRect] = useState<any>();
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect().height);
    }
  }, []);
  return [rect, ref];
};

const MeasureExample = (): JSX.Element => {
  const [rect, ref] = useClientRect();
  return (
    <div>
      <h1 ref={ref}>Hello, world</h1>
      <h2>The above header is {Math.round(rect)}px tall</h2>
    </div>
  );
};

export default function Goods() {
  return (
    <div>
      我是商品列表
      <Counter></Counter>
      <TextInputWithFocusButton></TextInputWithFocusButton>
      <MeasureExample></MeasureExample>
    </div>
  );
}
