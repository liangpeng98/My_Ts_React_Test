// 1. 引入包
import React, { useState, useEffect } from 'react';

import { Form, Input, Button, Radio } from 'antd';

import styles from './index.module.scss';

// 2. 声明组件
interface IFormData {
  name: string;
  typeName: string;
}

const Header = (): JSX.Element => {
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 10 },
  };

  const onFinishHandle = (values: IFormData) => {
    console.log('查询条件', values);
  };

  const onFinishFailedHandle = (errorInfo: object) => {
    console.log('失败', errorInfo);
  };

  const [isShow, setIsShow] = useState(Boolean);
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(window.navigator.userAgent)
    ) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

  return (
    <div className={styles.headerBox}>
      <Form
        {...formItemLayout}
        layout="inline"
        form={form}
        onFinish={onFinishHandle}
        onFinishFailed={onFinishFailedHandle}
      >
        <Form.Item label="用户名" name="name">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="用户类型" name="typeName">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCount(count + step);
    }, 1000);
    return () => clearInterval(timerID);
  }, [count, step]);

  return (
    <>
      <h1>{count}</h1>
      <Input value={step} onChange={(e) => setStep(Number(e.target.value))} />
    </>
  );
}

const Team = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
};

// 导出组件
export default Team;
