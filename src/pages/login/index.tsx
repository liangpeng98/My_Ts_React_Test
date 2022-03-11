/* 
  登陆页面 
*/
import React from "react"
import { useNavigate } from "react-router-dom"
// 引入antd
import { Form, Input, Button, message } from "antd"
// 引入css
import styles from "./index.module.scss"

interface IFomeData {
  username: string
  password: string
}

const Login = (): JSX.Element => {
  const navigate = useNavigate()
  console.log(navigate)
  // 登陆成功回调
  const onFinish = (values: IFomeData) => {
    if (
      values.username === "admin" &&
      values.password === "admin"
    ) {
      message.success("登陆成功")
      // 登录成功，跳转路由
      navigate("/home", {
        state: {
          status: "success",
          message: "登陆成功"
        }
      })
    }
  }

  const onFinishFailed = (errorInfo: object) => {
    console.log("登陆失败", errorInfo)
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <div className={styles.loginHeadName}>欢迎登陆</div>
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 17 }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          labelAlign="left"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 17 }}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginBtn}
            >
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Login
