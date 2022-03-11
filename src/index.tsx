import React from 'react'
import ReactDOM from 'react-dom'

// 引入antd的css
import 'antd/dist/antd.css';
// 引入跟组件
import App from './router/index'

import './index.scss'

const Render = (Component: any) => {
  ReactDOM.render(<Component />,document.getElementById('root'))
}

Render(App)
