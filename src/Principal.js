import 'antd/dist/antd.css';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
  HomeOutlined,
  MailOutlined,
  FireOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TrophyOutlined,
} from '@ant-design/icons';

import { Menu, Layout, Button, Switch, Divider } from 'antd';
import App from './App';

const { Sider, Content, Footer, Header } = Layout;
const { SubMenu } = Menu;

const Principal = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleCollapseMenu = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  const handleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <Layout>
      <Header>Header aqui</Header>
      <Layout>
        <Sider collapsible onCollapse={handleCollapseMenu} collapsed={collapsed}>
          {/* <Button type="primary" onClick={handleCollapseMenu}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button> */}
          <Menu defaultSelectedKeys={['1']} mode="inline" theme={theme}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/main">Início</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FireOutlined />}>
              <Link to="/warmup">Aquecimento</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TrophyOutlined />}>
              <Link to="/game">Treino</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<MailOutlined />}>
              Contato
            </Menu.Item>
            <Switch size="small" onChange={handleTheme} checkedChildren="Light" unCheckedChildren="Dark" />
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ height: '100vh' }}>
            <App />
          </Content>
          <Footer>Aqui o rodapé</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Principal;
