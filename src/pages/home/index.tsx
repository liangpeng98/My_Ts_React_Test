import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

import { Layout, Menu, Popconfirm, message } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

interface IMenuType {
  key: string;
  icon: JSX.Element;
  name: string;
  url: string;
}

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const [collapsed, setcollapsed] = useState<boolean>(false);
  const [menuList, setmenuList] = useState<IMenuType[]>([]);
  const [active, setActive] = useState<string[]>(['1']);

  // 初始化数据
  useEffect(() => {
    const menuList = [
      {
        key: '1',
        name: 'Team',
        icon: <UserOutlined />,
        url: '',
      },
      {
        key: '2',
        name: '游戏',
        icon: <VideoCameraOutlined />,
        url: '/home/play',
      },
      {
        key: '3',
        name: '商品',
        icon: <UploadOutlined />,
        url: '/home/goods',
      },
    ];
    setmenuList(menuList);
  }, []);

  // 左侧menu 缩进弹出
  const toggleHandle = () => {
    setcollapsed(!collapsed);
  };

  // 当 active、menuList、navigate 变化时，路由跳转到当前页面
  useEffect(() => {
    if (active && menuList.length > 0 && navigate) {
      const url = menuList.filter((v) => active[0] == v.key)[0].url;
      navigate(url);
    }
  }, [active, menuList, navigate]);

  // 点击 menu item
  const onClickMenuHandle = ({ keyPath }: any) => {
    setActive([...keyPath]);
  };

  // 退出
  const confirm = () => {
    message.success('退出成功!');
    navigate('/');
  };

  return (
    <Layout className={styles.container}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}></div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={active}
          selectedKeys={active}
          onClick={onClickMenuHandle}
        >
          {menuList.map((item) => {
            return (
              <Menu.Item icon={item.icon} key={item.key}>
                {item.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header
          className={`${styles.siteLayoutBackground} ${styles.homeHeader}`}
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: styles.trigger,
              onClick: toggleHandle,
            }
          )}
          <div className={styles.logout}>
            <Popconfirm
              placement="top"
              title="确认退出登陆？"
              onConfirm={confirm}
              okText="确认"
              cancelText="取消"
            >
              <LogoutOutlined />
            </Popconfirm>
          </div>
        </Header>
        <Content
          className={styles.siteLayoutBackground}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
