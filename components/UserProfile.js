import { Avatar, Card, Button, Row, Col } from 'antd';
import React from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const dummy = {
  nickname: 'aim_1535',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: true,
};

const UserProfile = () => {
  const { me, logOutLoading } = useSelector((state) => state.user);
  console.log(me)
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  return (
    <Row style={{marginTop: "30px"}}>
      <Col span={8} offset={8}>
        <Card style={{opacity: '0.9'}}
          actions={[
            <div key="twit">짹짹<br />{dummy.Posts.length}</div>,
            <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
            <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{me.user.nickname[0]}</Avatar>}
            title={me.user.nickname}
          />
          <Button onClick={onLogout} loading={logOutLoading}>로그아웃</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
