import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row,Avatar } from 'antd';
import {TeamOutlined} from '@ant-design/icons';


//로그인을 제외한 모든 창 맨 위에 뜨는 양식


const dummy = {
  nickname: 'AIM_1535',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};
// const onSearch = value => console.log(value);

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu  style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        {/* <Row>
          <Col span={4} offset={0}>
            <Menu.Item key="home"><Link href="/"><a style={{color: 'white'}}>DiarySNS</a></Link></Menu.Item>
          </Col>
          <Col span={8} offset={4}>
            <Menu.Item key="mail">
              <Input.Search enterButton onSearch={onSearch} style={{ verticalAlign: 'middle' }} />
            </Menu.Item>
          </Col>
          <Col span={1} offset={6}>
            <Menu.Item key="social"><Link href="/social"><TeamOutlined /></Link></Menu.Item>
          </Col>
          <Col span={1} offset={0}>   
            <Menu.Item key="profile"><Link href="/"><Avatar>{dummy.nickname[0]}</Avatar></Link></Menu.Item>
          </Col>
        </Row> */}
      </Menu>
      <Row>
        <Col span={24}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
