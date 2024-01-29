import React from "react";
import "../components.scss";
import {  LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from '@ant-design/icons';
import { auth, signOut } from "../../firebase/firebase";


const { Header, Content } = Layout;

const items1 = ["Home", "Profile","Users", "Login" , "Signup", ].map((key) => ({
  key: `/${key}`,
  label: `${key}`,
}));

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={(data) => {
            navigate(data.key);
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          />
          <Button
          icon={ <LogoutOutlined/> }
          onClick={()=>{
            signOut(auth).then(() => {
                console.log("logout")
              }).catch((error) => {
                // An error happened.
              });
          }}
          >Logout</Button>
      </Header>
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
